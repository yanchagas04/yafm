import Image from "next/image";
import YafmLogo from "@/public/yafm-logo.png"

export default function Header() {
    return (
        <header className="flex w-full h-fit justify-between items-center backdrop-blur-xs md:bg-transparent bg-slate-950/10 p-4 sticky top-0 z-50">
            <div className="flex items-center gap-3">
                <Image src={YafmLogo} alt="YAFM Logo" width={48} height={48} />
                <span className="flex flex-col w-fit h-fit">
                    <h1 className="text-2xl font-bold">YAFM</h1>
                    <p className="text-xs text-slate-400">Yet Another Financial Manager</p>
                </span>
            </div>
            <div className="flex items-center gap-4">
                <a className="bg-emerald-600 hover:bg-emerald-500 px-4 py-2 md:px-6 md:py-4 rounded-lg text-md font-medium cursor-pointer transition-all ease-in   duration-150 hover:rounded-4xl" href="/home">Acessar</a>
            </div>
        </header>
    );
}