import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";

import { Outlet } from "react-router-dom";
// import { useState } from "react";

const DashboardLayout = () => {
    // const [isRightSidebarOpen, setRightSidebarOpen] = useState(false);

    return (
        <div>
            <Sidebar />
            <div>
                {/* <Header onToggleRightSidebar={() => setRightSidebarOpen(true)} /> */}
                <Header />
                <main>
                    <Outlet />
                </main>
            </div>

            {/* <FileDetailsPanel // ✅ renamed usage
                isOpen={isRightSidebarOpen}
                onClose={() => setRightSidebarOpen(false)}
            /> */}

        </div>
    );
}

export default DashboardLayout;