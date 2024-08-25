import ReadyCard from "./_components/ready-card";
import Study from "./_components/study";
import Timer from "./_components/timer";

const StudyLessonIdPage = ({
    params
}: {
    params: { lessonId: string }
}) => {

    // lessonIdよりlesson情報を取得する予定
    const lessonInfo = { label: 'easy', time: 120000, words: [
        {id: 1, english: 'apple', japanese: 'りんご'},
        {id: 1, english: 'banana', japanese: 'ばなな'},
        {id: 1, english: 'cherry', japanese: 'さくらんぼ'},
        {id: 1, english: 'customer', japanese: 'お客さん'}
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