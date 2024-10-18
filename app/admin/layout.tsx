import AdminNavbar from "./_components/admin-navbar";

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="h-full">
            <div className="fixed inset-0 h-[70px] w-full z-50">
                <AdminNavbar />
            </div>
            <main className="pt-[70px]">
                {children}
            </main>
        </div>
    );
};

export default AdminLayout;
