"use client";

import { useRouter, usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Header from "@/app/components/header/header";
import Footer from "@/app/components/footer/footer";
import { Provider } from "react-redux";
import { store } from "../Toolkit/store";

export default function ClientLayout({ children }) {
    const router = useRouter();
    const pathname = usePathname();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const token = localStorage.getItem("Token");

        if (!token && pathname !== "/PublicPage") {
            router.push("/PublicPage");
        } else if (token && pathname === "/PublicPage") {
            router.push("/");
        } else {
            setLoading(false);
        }
    }, [pathname, router]);

    if (loading) return <div className="h-screen flex items-center justify-center text-lg font-semibold">Loading...</div>;

    return (
        <Provider store={store}>
            <div className="flex flex-col min-h-screen bg-gradient-to-br from-white to-blue-50">
                <Header />
                <main className="flex-grow px-4 py-6">{children}</main>
                <Footer />
            </div>
        </Provider>
    );
}
