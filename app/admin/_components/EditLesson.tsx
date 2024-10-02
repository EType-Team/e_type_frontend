import React, { useState } from 'react';
import useLesson from '@/app/admin/_data/useLesson';
import { Lesson } from '@/types';
import { toast } from 'sonner';

interface EditLessonProps {
    lesson: Lesson;
    setLesson: React.Dispatch<React.SetStateAction<Lesson | null>>;
}

const EditLesson: React.FC<EditLessonProps> = ({ lesson, setLesson }) => {
    const [title, setTitle] = useState(lesson.title);
    const [description, setDescription] = useState(lesson.description);
    const { updateLesson } = useLesson();

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const updatedLesson = await updateLesson(lesson.id, { title, description });
        if (updatedLesson) {
            setLesson(prevLesson => 
                prevLesson ? 
                    { ...prevLesson, title: updatedLesson.title, description: updatedLesson.description } : 
                    updatedLesson
            );
            toast.success('レッスンが更新されました！');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="mb-4">
            <div className="space-y-4">
                <div>
                    <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                        Title
                    </label>
                    <input
                        id="title"
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                </div>
                <div>
                    <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                        Description
                    </label>
                    <textarea
                        id="description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        rows={3}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                </div>
                <button 
                    type="submit" 
                    className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                    レッスンを更新
                </button>
            </div>
        </form>
    );
};

export default EditLesson;