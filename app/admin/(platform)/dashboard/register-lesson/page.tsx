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

    const handleWordChange = (index: number, field: keyof Word, value: string) => {
        const updatedWords = [...words];
        updatedWords[index] = { ...updatedWords[index], [field]: value };
        setWords(updatedWords);
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const lessonData: LessonData = {
            title: lessonName,
            description: lessonDescription,
            words: words.map(word => ({
                english: word.english,
                japanese: word.japanese,
                mp3_path: word.mp3_path,
            })),
        };

        console.log('送信するデータ:', lessonData); // 送信前にデータをログ出力

        try {
            const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/lessons`, lessonData);

            if (response.status === 200) {
                toast.success('レッスンが登録されました！');
                router.push('/admin/dashboard'); // 登録後にダッシュボードへリダイレクト
            } else {
                toast.error('レッスンの登録に失敗しました');
            }
        } catch (error) {
            console.error('Error submitting lesson:', error);
            toast.error('レッスンの登録に失敗しました');
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
                    <div key={index} className="grid grid-cols-3 gap-4 mb-2">
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
                            <label className="block mb-1">MP3ファイルのパス</label>
                            <input
                                type="text"
                                value={word.mp3_path}
                                onChange={(e) => handleWordChange(index, 'mp3_path', e.target.value)}
                                className="border border-gray-300 p-2 w-full"
                            />
                        </div>
                    </div>
                ))}
                <button
                    type="button"
                    onClick={handleAddWord}
                    className="bg-blue-500 text-white px-4 py-2 rounded"
                >
                    単語を追加
                </button>
                <div className="mt-4">
                    <button type="submit" className="bg-blue-400 text-white px-4 py-2 rounded">
                        レッスン登録
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
