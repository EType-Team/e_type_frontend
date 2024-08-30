import Sidebar from "@/components/sidebar"

const PlatformLayout = ({
    children
}: {
    children: React.ReactNode
}) => {
    return ( 
        <>
            <div className="flex pt-[70px] h-full w-56 flex-col fixed inset-y-0 z-50">
                <Sidebar />
            </div>
            <main className="md:pl-56 pt-[70px] h-full">
                {children}
            </main>
        </>
    )
}
 
export default PlatformLayout