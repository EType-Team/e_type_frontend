import Navbar from "@/components/navbar"
import Sidebar from "@/components/sidebar"

const MainLayout = ({
    children
}: {
    children: React.ReactNode
}) => {
    return (
        <div className="h-full">
            <div className="h-[70px] fixed inset-y-0 w-full z-50">
                <Navbar />
            </div>
            {children}
        </div>
    )
}

export default MainLayout
