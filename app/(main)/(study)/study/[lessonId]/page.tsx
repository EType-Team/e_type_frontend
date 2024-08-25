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
        {id: 1, word: 'apple'},
        {id: 2, word: 'banana'},
        {id: 3, word: 'cherry'},
        {id: 4, word: 'customer'}
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