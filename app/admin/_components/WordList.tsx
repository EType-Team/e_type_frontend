import React from 'react';
import useLesson from '../_data/useLesson';
import { Word } from '@/types';

interface WordListProps {
    wordList: Word[];
    setWordList: React.Dispatch<React.SetStateAction<Word[]>>;
    lessonId: number;
}


const WordList: React.FC<WordListProps> = ({ wordList, setWordList, lessonId }) => {
    const { removeWordFromLesson } = useLesson(); 

    const handleDeleteWord = async (wordId: number) => {
        try {
            // バックエンドで単語を削除
            await removeWordFromLesson(lessonId, wordId);

            // ローカルのリストから削除
            const updatedWords = wordList.filter(word => word.id !== wordId);
            setWordList(updatedWords);
        } catch (error) {
            console.error('Error deleting word:', error);
        }
    };

    return (
        <div className="mt-4">
            <h2 className="text-xl font-semibold mb-2">単語リスト</h2>
            {wordList.length > 0 ? (
                <ul className="space-y-2">
                    {wordList.map((word) => (
                        <li key={word.id} className="flex justify-between items-center p-2 bg-gray-50 rounded">
                            <div>
                                <span className="font-medium">{word.english}</span>
                                <span className="mx-2">-</span>
                                <span>{word.japanese}</span>
                            </div>
                            <button
                                onClick={() => handleDeleteWord(word.id)}
                                className="text-red-500 hover:text-red-700"
                            >
                                削除
                            </button>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No words available for this lesson.</p>
            )}
        </div>
    );
};

export default WordList;
