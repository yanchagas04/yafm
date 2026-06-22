import { PiggyBank } from "lucide-react";

export default function Header() {
    return (
        <header className="flex w-full h-fit justify-between items-center backdrop-blur-xs md:bg-transparent bg-slate-950/10 p-4 sticky top-0 z-50">
            <div className="flex items-center gap-3">
                <PiggyBank className="w-8 h-8 text-emerald-500" />
                <span className="flex flex-col w-fit h-fit">
                    <h1 className="text-2xl font-bold">YAFM</h1>
                    <p className="text-xs text-slate-400">Yet Another Financial Manager</p>
                </span>
            </div>
            <div className="flex items-center gap-4">
                <button className="text-sm font-medium hover:text-emerald-400 cursor-pointer">Entrar</button>
                <button className="bg-emerald-600 hover:bg-emerald-500 px-4 py-2 rounded-lg text-sm font-medium cursor-pointer transition-colors">Registrar-se</button>
            </div>
        </header>
    );
}