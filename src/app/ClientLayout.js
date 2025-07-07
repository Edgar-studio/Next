"use client";

import { useRouter, usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Header from "@/app/components/header/header";
import Footer from "@/app/components/footer/footer";
import {Provider} from "react-redux";
import {store} from "../Toolkit/store";
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

    if (loading) return null;

    return (
        <Provider  store={store}>
            <>
                <Header />
                <main className="min-h-[80vh]">{children}</main>
                <Footer />
            </>
        </Provider>

    );
}
