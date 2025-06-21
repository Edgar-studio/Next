"use client";

import { useRouter, usePathname } from "next/navigation";
import { useEffect } from "react";
import Header from "@/app/components/header/header";
import Footer from "@/app/components/footer/footer";


export default function ClientLayout({ children }) {
    const router = useRouter();
    const pathname = usePathname();

    useEffect(() => {
        const token = localStorage.getItem("Token");

        if (!token) {
            router.push("/PublicPage");
        }else {
            router.push("/");
        }
    }, [pathname, router]);

    return (
        <>
            <Header />
            <main className="min-h-[80vh]">{children}</main>
            <Footer />
        </>
    );
}
