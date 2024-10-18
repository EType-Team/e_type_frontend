'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';
import axios from 'axios';

interface Word {
    english: string;
    japanese: string;
    mp3_path: string;
}

interface LessonData {
    title: string;
    description: string;
    words: Word[];
}

const RegisterLesson = () => {
    const [lessonName, setLessonName] = useState<string>('');
    const [lessonDescription, setLessonDescription] = useState<string>('');
    const [words, setWords] = useState<Word[]>(Array.from({ length: 10 }, () => ({ english: '', japanese: '', mp3_path: '' })));

    const router = useRouter(); 

    const handleAddWord = () => {
        setWords([...words, { english: '', japanese: '', mp3_path: '' }]);
    };

    const handleRemoveWord = (index: number) => {
        const updatedWords = words.filter((_, i) => i !== index);
        setWords(updatedWords);
    };

    const handleWordChange = (index: number, field: keyof Word, value: string) => {
        const updatedWords = [...words];
        // mp3_path は自動生成
        if (field === 'english') {
            updatedWords[index] = { ...updatedWords[index], english: value, mp3_path: `/audio/${value}.mp3` };
        } else {
            updatedWords[index] = { ...updatedWords[index], [field]: value };
        }
        setWords(updatedWords);
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
   
        const filteredWords = words.filter(word => 
            word.english.trim() !== '' && 
            word.japanese.trim() !== '' && 
            word.mp3_path.trim() !== ''
        );
    
        if (filteredWords.length === 0) {
            toast.error('すべての項目を入力してください');
            return;
        }

        const lessonData: LessonData = {
            title: lessonName.trim(),
            description: lessonDescription.trim(),
            words: filteredWords
        };
        try {
            const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/lessons`, lessonData);
    
            if (response.status === 200 || response.status === 201) {
                toast.success('レッスンが登録されました！');
                router.push('/admin/dashboard');
            } else {
                toast.error(`レッスンの登録に失敗しました: ${response.data.message || '不明なエラー'}`);
            }
        } catch (error: any) {
            console.error('Error submitting lesson:', error);
            toast.error(`エラー: ${error.response?.data?.message || error.message || '不明なエラーが発生しました'}`);
        }
    };

    const handleBackToDashboard = () => {
        router.push('/admin/dashboard'); // ダッシュボードに戻る
    };

    return (
        <div className="p-8 pl-32 pr-32 flex flex-col">
            <h1 className="text-2xl mb-4">レッスン登録</h1>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="block mb-2">レッスン名</label>
                    <input
                        type="text"
                        value={lessonName}
                        onChange={(e) => setLessonName(e.target.value)}
                        className="border border-gray-300 p-2 w-full"
                        required
                    />
                </div>
                <div>
                    <label className="block mb-2">レッスンの説明</label>
                    <textarea
                        value={lessonDescription}
                        onChange={(e) => setLessonDescription(e.target.value)}
                        className="border border-gray-300 p-2 w-full"
                        required
                    />
                </div>
                <h2 className="text-xl mt-4">単語リスト</h2>
                {words.map((word, index) => (
                    <div key={index} className="grid grid-cols-3 gap-4 mb-2 items-center">
                        <div>
                            <label className="block mb-1">英語</label>
                            <input
                                type="text"
                                value={word.english}
                                onChange={(e) => handleWordChange(index, 'english', e.target.value)}
                                className="border border-gray-300 p-2 w-full"
                            />
                        </div>
                        <div>
                            <label className="block mb-1">日本語</label>
                            <input
                                type="text"
                                value={word.japanese}
                                onChange={(e) => handleWordChange(index, 'japanese', e.target.value)}
                                className="border border-gray-300 p-2 w-full"
                            />
                        </div>
                        <div>
                            <button
                                type="button"
                                onClick={() => handleRemoveWord(index)}
                                className="text-red-500 px-4 py-2 rounded"
                            >
                                削除
                            </button>
                        </div>
                    </div>
                ))}
                <button
                    type="button"
                    onClick={handleAddWord}
                    className="w-8 h-8  bg-blue-400 text-lg text-white font-semibold rounded-full hover:bg-blue-500"
                >
                    +
                </button>
                <div className="mt-4">
                    <button type="submit" className="bg-blue-400 text-white px-4 py-2 rounded">
                        レッスンを登録
                    </button>
                </div>
            </form>
            <div className="mt-8">
                <button 
                    type="button" 
                    onClick={handleBackToDashboard} 
                    className="bg-gray-500 text-white px-4 py-2 rounded"
                >
                    ダッシュボードに戻る
                </button>
            </div>
        </div>
    );
};

export default RegisterLesson;
