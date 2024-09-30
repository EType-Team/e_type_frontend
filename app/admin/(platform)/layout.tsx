import AdminSidebar from "../_components/admin-sidebar";

const AdminPlatformLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="flex h-full">
            <div className="fixed inset-y-0 left-0 w-56 pt-[70px] z-50">
                <AdminSidebar />
            </div>
            <main className="md:pl-56 flex-1">
                {children}
            </main>
        </div>
    );
};

export default AdminPlatformLayout;
