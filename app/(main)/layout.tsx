const MainLayout = ({
    children
}: {
    children: React.ReactNode
}) => {
    return (
        <div className="h-full">
            <div className="h-[70px] fixed inset-y-0 w-full z-50">
                Navbar
            </div>
            <div className="flex pt-[80px] h-full w-56 flex-col fixed inset-y-0 z-50">
                Sidebar
            </div>
            <main className="md:pl-56 pt-[80px] h-full">
                {children}
            </main>
        </div>
    )
}

export default MainLayout
