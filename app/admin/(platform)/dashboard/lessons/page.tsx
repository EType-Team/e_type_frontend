"use client"
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import useLesson from '@/app/admin/_data/useLesson';
import { Lesson } from '@/types';

const LessonList = () => {
    const { getLessons } = useLesson();
    const [lessons, setLessons] = useState<Lesson[]>([]);
    const router = useRouter();

    useEffect(() => {
        const fetchLessons = async () => {
            try {
                const data = await getLessons();
                setLessons(data);
            } catch (error) {
                console.error('Error fetching lessons:', error);
            }
        };

        fetchLessons();
    }, []);

    const handleLessonClick = (id: number) => {
        router.push(`/admin/dashboard/lessons/${id}`);
    };

    return (
        <div className="p-8 pl-32 pr-32 flex flex-col">
            <h2 className="text-2xl font-bold mb-4">レッスン一覧</h2>
            {lessons.length === 0 ? (
                <p>レッスンがありません。</p>
            ) : (
                <ul>
                    {lessons.map((lesson) => (
                        <li
                            key={lesson.id}
                            className="border p-4 mb-4 rounded cursor-pointer hover:bg-gray-100"
                            onClick={() => handleLessonClick(lesson.id)}
                        >
                            <h3 className="text-xl font-semibold">{lesson.title}</h3>
                            <p>{lesson.description}</p>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default LessonList;
