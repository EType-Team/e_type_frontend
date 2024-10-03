import React, { useState } from 'react';
import useLesson from '@/app/admin/_data/useLesson';
import { Word } from '@/types';

interface AddWordProps {
    lessonId: number;
    setWordList: React.Dispatch<React.SetStateAction<Word[]>>;
    fetchWords: () => Promise<void>;
}

const AddWord: React.FC<AddWordProps> = ({ lessonId, setWordList, fetchWords }) => {
    const [english, setEnglish] = useState('');
    const [japanese, setJapanese] = useState('');
    const { addNewWordToLesson } = useLesson();
    const [error, setError] = useState<string | null>(null);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setError(null);
        
        // mp3Path を英語の単語を基に自動生成
        const mp3Path = `/audio/${english}.mp3`;

        try {
            const newWord = await addNewWordToLesson(lessonId, { english, japanese, mp3_path: mp3Path });
            if (newWord) {
                setWordList(prevWords => [...prevWords, newWord]);
                setEnglish('');
                setJapanese('');
                await fetchWords(); // 新しい単語を追加した後に単語リストを再取得
            } else {
                setError('Failed to add the word');
            }
        } catch (err) {
            setError('An unexpected error occurred');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="mt-4">
            <h2 className="text-xl font-semibold mb-2">単語を追加</h2>
            {error && <p className="text-red-500 mb-2">{error}</p>}
            <input
                type="text"
                value={english}
                onChange={(e) => setEnglish(e.target.value)}
                placeholder="English"
                className="border p-2 mb-2 w-full"
            />
            <input
                type="text"
                value={japanese}
                onChange={(e) => setJapanese(e.target.value)}
                placeholder="Japanese"
                className="border p-2 mb-2 w-full"
            />
            <button type="submit" className=" px-2 py-1 border">
                Add Word
            </button>
        </form>
    );
};

export default AddWord;
