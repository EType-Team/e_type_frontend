const StudyLayout = ({
    children
}: {
    children: React.ReactNode
}) => {
    return ( 
        <main className="pt-[70px] h-full">
            {children}
        </main>
     );
}
 
export default StudyLayout;