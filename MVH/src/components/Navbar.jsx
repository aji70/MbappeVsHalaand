import React from 'react';
import { Wallet } from 'lucide-react';

const Navbar = () => {
    return (
        <nav className="w-full py-4 px-6 flex items-center justify-between border-b border-white/10 bg-black/20 backdrop-blur-md sticky top-0 z-50">
            <div className="flex items-center gap-2">
                <span className="text-xl md:text-2xl font-black tracking-tighter text-white">
                    MBAPPE <span className="text-[#00ff88]">VS</span> HAALAND
                </span>
            </div>

            <button className="flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg transition-all duration-300 text-sm font-bold text-white">
                <Wallet className="w-4 h-4 text-[#00ff88]" />
                <span className="hidden md:inline">Connect Wallet</span>
                <span className="md:hidden">Connect</span>
            </button>
        </nav>
    );
};

export default Navbar;
