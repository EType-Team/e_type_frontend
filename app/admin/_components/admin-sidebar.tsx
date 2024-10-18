import AdminSidebarRoutes from "./admin-sidebar-routes"

const AdminSidebar = () => {
    return ( 
        <div className="h-full border-r flex flex-col overflow-y-auto bg-white shadow-sm">
            <div className="flex flex-col w-full">
                <AdminSidebarRoutes />
            </div>
        </div>
    )
}
 
export default AdminSidebar