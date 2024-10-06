import LPDisplayNavbar from "@/components/lp-display-Navbar"

const LPDisplayLayout = ({
    children
}: {
    children: React.ReactNode
}) => {
    return (
        <div className="h-full bg-slate-100">
            <div className="h-[70px] fixed inset-y-0 w-full z-50">
                <LPDisplayNavbar />
            </div>
            <div className="pt-[70px]">
                {children}
            </div>
        </div>
    )
}

export default LPDisplayLayout