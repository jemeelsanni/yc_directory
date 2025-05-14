import Navbar from "../../../components/Navbar";

export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <main className="font-work-sans bg-white text-[#000] h-full">
            <Navbar />
            {children}
        </main>
    );
};