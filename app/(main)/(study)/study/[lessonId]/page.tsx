import Study from "./_components/study";

const StudyLessonIdPage = ({
    params
}: {
    params: { lessonId: string }
}) => {

    // lessonIdでlesson情報を取得する予定
    const lessonInfo = { label: 'easy', time: 30000, words: [
        {id: 1, english: 'apple', japanese: 'りんご'},
        {id: 2, english: 'banana', japanese: 'ばなな'},
        {id: 3, english: 'cherry', japanese: 'さくらんぼ'},
        {id: 4, english: 'customer', japanese: 'お客さん'},
        {id: 5, english: 'president', japanese: '大統領さん'},
        {id: 6, english: 'copyright', japanese: '著作権'},
        {id: 7, english: 'employer', japanese: '雇用主'},
        {id: 8, english: 'receptionist', japanese: '受付'},
        {id: 9, english: 'engineer', japanese: '技術者'},
        {id: 10, english: 'clerk', japanese: '事務員'},
        {id: 11, english: 'court', japanese: '裁判所'},
        {id: 12, english: 'auditorium', japanese: '講堂'},
        {id: 13, english: 'appendix', japanese: '付録'}
    ]};

    return ( 
        <div className="relative flex flex-col items-center gap-y-52">
            <Study
                label={lessonInfo.label}
                time={lessonInfo.time}
                words={lessonInfo.words}
            />
        </div>
     );
}
 
export default StudyLessonIdPage;