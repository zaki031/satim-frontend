import Sidebar from "./sidebar";
import Navbar from "./navbar";
import logo from "@/assets/logo.svg";

interface LayoutProps {
    children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
    return (
        <div className="flex">
            <div className="fixed top-0 left-0 h-screen min-w-[368px] bg-gray-800">
                <Sidebar />
            </div>
            
            <div className="ml-[400px] w-full pt-4 mr-8 overflow-auto">
                <Navbar />
                {children}
            </div>
        </div>
    );
}
