'use client';

import React, { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import useLesson from '@/data/useLesson';
import EditLesson from '@/app/admin/_components/EditLesson';
import WordList from '@/app/admin/_components/WordList';
import { getLessonWordsByLessonId } from '@/data/lessonWord';
import AddWord from '@/app/admin/_components/AddWord';
import { Lesson } from '@/types';
import { Word, LessonWord } from '@/types';

const LessonDetail: React.FC = () => {
    const router = useRouter();
    const { id: lessonId } = useParams();
    const { getLesson, deleteLesson } = useLesson();
    const [lesson, setLesson] = useState<Lesson | null>(null);
    const [wordList, setWordList] = useState<Word[]>([]);


    const fetchLessonData = async () => {
        if (lessonId) {
            const fetchedLesson = await getLesson(Number(lessonId));
            if (fetchedLesson) {
                setLesson(fetchedLesson);
                const lessonWords = await getLessonWordsByLessonId(fetchedLesson.id);
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
        }
    };

    useEffect(() => {
        fetchLessonData();
    }, [lessonId]);

    const handleDelete = async () => {
        if (lessonId) {
            await deleteLesson(Number(lessonId));
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
                fetchWords={fetchLessonData}
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
