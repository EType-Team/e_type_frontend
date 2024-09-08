import Navbar from "@/components/navbar";

const AuthLayout = ({
    children
}: {
    children: React.ReactNode
}) => {
    return (
        <div className="h-full">
            <div className="h-[70px] fixed inset-y-0 w-full z-50">
                <Navbar />
            </div>
            <main className="pt-[70px] h-full flex flex-col items-center justify-center">
                {children}
            </main>
        </div>
    )
}
 
export default AuthLayout;