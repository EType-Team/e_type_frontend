import axios from 'axios';
import { Lesson } from '@/types';

const API_URL = process.env.NEXT_PUBLIC_API_URL;

interface LessonData {
    title: string;
    description: string;
}

interface LessonUpdateData {
    title: string;
    description: string;
}

interface WordData {
    english: string;
    japanese: string;
    mp3_path: string;
}

const useLesson = () => {
    const getLessons = async () => {
        const response = await axios.get(`${API_URL}/lessons`);
        return response.data;
    };

    const getLesson = async (id: number) => {
        try {
            const lessonResponse = await axios.get(`${API_URL}/lessons/${id}`);
            const lesson = lessonResponse.data;
    
            const wordsResponse = await axios.get(`${API_URL}/lessonWord/${id}`);
            const words = wordsResponse.data;
    
            return { ...lesson, words };
        } catch (error) {
            console.error("Error fetching lesson or words data:", error);
            return null;
        }
    };
    
    

    const createLesson = async (lessonData: LessonData) => {
        const response = await axios.post(`${API_URL}/lessons`, lessonData);
        return response.data;
    };

    const updateLesson = async (id: number, lessonData: LessonUpdateData): Promise<Lesson | null> => {
        try {
            const response = await axios.put<Lesson>(`${API_URL}/lessons/${id}`, lessonData);
            return response.data;
        } catch (error) {
            console.error('Error updating lesson:', error);
            return null;
        }
    };

    const deleteLesson = async (id: number) => {
        await axios.delete(`${API_URL}/lessons/${id}`);
    };

    const addNewWordToLesson = async (lessonId: number, wordData: WordData) => {
        const response = await axios.post(`${API_URL}/lessons/${lessonId}/words`, wordData);
        return response.data;
    };

    const removeWordFromLesson = async (lessonId: number, wordId: number) => {
        await axios.delete(`${API_URL}/lessons/${lessonId}/words/${wordId}`);
    };

    return {
        getLessons,
        getLesson,
        createLesson,
        updateLesson,
        deleteLesson,
        addNewWordToLesson,
        removeWordFromLesson,
    };
};

export default useLesson;