import "./globals.css";
import ClientLayout from "./ClientLayout";
import {ToastContainer} from "react-toastify";

export default function RootLayout({ children }) {
    return (
        <html lang="en">
        <body>
        <ClientLayout>{children}
            <ToastContainer limit={2} position="top-right" autoClose={3000} />
        </ClientLayout>
        </body>
        </html>
    );
}
