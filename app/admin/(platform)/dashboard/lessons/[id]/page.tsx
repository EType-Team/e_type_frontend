'use client';

import React, { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import useLesson from '@/app/admin/_data/useLesson';
import EditLesson from '@/app/admin/_components/EditLesson';
import WordList from '@/app/admin/_components/WordList';
import { getLessonWordsByLessonId } from '@/data/lessonWord';
import AddWord from '@/app/admin/_components/AddWord';
import { Lesson } from '@/types';
import { Word, LessonWord } from '@/types';

const LessonDetail: React.FC = () => {
    const router = useRouter();
    const { id } = useParams();
    const { getLesson, deleteLesson } = useLesson();
    const [lesson, setLesson] = useState<Lesson | null>(null);
    const [wordList, setWordList] = useState<Word[]>([]);

    const fetchLesson = async () => {
        if (id) {
            const fetchedLesson = await getLesson(Number(id));
            if (fetchedLesson) {
                setLesson(fetchedLesson);
            }
        }
    };

    // Wordをフェッチする関数
    const fetchWords = async () => {
        if (lesson) {
            const lessonWords = await getLessonWordsByLessonId(lesson.id);
            if (lessonWords) {
                const mappedWords: Word[] = lessonWords.map((lw: LessonWord) => ({
                    id: lw.word.id,
                    english: lw.word.english,
                    japanese: lw.word.japanese,
                    mp3path: lw.word.mp3path,
                }));
                setWordList(mappedWords);
            }
        }
    };

    useEffect(() => {
        fetchLesson();
    }, [id]);

    useEffect(() => {
        if (lesson) {
            fetchWords();
        }
    }, [lesson]);

    const handleDelete = async () => {
        if (id) {
            await deleteLesson(Number(id));
            router.push('/admin/dashboard/lessons');
        }
    };

    if (!lesson) return <div>Loading...</div>;

    return (
        <div className="p-8">

            <EditLesson 
                lesson={{
                    ...lesson,
                    words: wordList,
                } as Lesson & { words: Word[] }}
                setLesson={setLesson}
            />
                        
            <WordList 
                wordList={wordList}
                setWordList={setWordList} 
                lessonId={lesson.id}
            />
            
            <AddWord 
                lessonId={lesson.id} 
                setWordList={setWordList} 
                fetchWords={fetchWords}
            />
            
            <button
                onClick={handleDelete}
                className=" px-2 py-1 border"
            >
                レッスンを削除
            </button>
        </div>
    );
};

export default LessonDetail;
