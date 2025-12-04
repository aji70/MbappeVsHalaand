import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Wallet, TrendingUp, ArrowRight } from 'lucide-react';

const BettingCard = ({ onPlaceBet }) => {
    const [amount, setAmount] = useState('');
    const [currency, setCurrency] = useState('USDT');
    const [selectedPlayer, setSelectedPlayer] = useState(null);

    const potentialReturn = amount ? (parseFloat(amount) * 1.8).toFixed(3) : '0.000';
    const isAmountValid = !amount || parseFloat(amount) >= 5;

    return (
        <div className="glass-panel p-6 md:p-8 w-full max-w-md mx-auto relative overflow-hidden">
            {/* Glow Effect */}


            <div className="relative z-10">
                <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                    <Wallet className="w-5 h-5 text-[#00ff88]" />
                    Place Your Stake
                </h3>

                {/* Player Selection */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                    {['Haaland', 'Mbappe'].map((player) => (
                        <button
                            key={player}
                            onClick={() => setSelectedPlayer(player)}
                            className={`p-4 rounded-xl border transition-all duration-300 ${selectedPlayer === player
                                ? 'bg-[#00ff88]/10 border-[#00ff88] text-[#00ff88]'
                                : 'bg-white/5 border-white/10 hover:border-white/30 text-gray-400'
                                }`}
                        >
                            <span className="block text-sm font-medium">Win</span>
                            <span className="block font-bold">{player}</span>
                        </button>
                    ))}
                </div>

                {/* Amount Input */}
                <div className="mb-6">
                    <label className="block text-xs text-gray-400 mb-2 uppercase tracking-wider">Stake Amount</label>
                    <div className="relative">
                        <input
                            type="number"
                            value={amount}
                            onChange={(e) => setAmount(e.target.value)}
                            placeholder="0.00"
                            className={`input-field pr-24 text-2xl font-mono ${!isAmountValid ? 'border-red-500 focus:border-red-500' : ''}`}
                        />
                        <div className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center gap-2 bg-black/40 rounded-lg p-1">
                            <button
                                onClick={() => setCurrency('USDT')}
                                className={`px-2 py-1 rounded text-xs font-bold transition-colors ${currency === 'USDT' ? 'bg-white/20 text-white' : 'text-gray-500'
                                    }`}
                            >
                                USDT
                            </button>
                            <button
                                onClick={() => setCurrency('USDC')}
                                className={`px-2 py-1 rounded text-xs font-bold transition-colors ${currency === 'USDC' ? 'bg-white/20 text-white' : 'text-gray-500'
                                    }`}
                            >
                                USDC
                            </button>
                        </div>
                    </div>
                    {!isAmountValid && (
                        <p className="text-red-500 text-xs mt-2">Minimum stake amount is 5 USD</p>
                    )}
                </div>

                {/* Potential Return */}
                <div className="flex items-center justify-between mb-8">
                    <span className="text-sm text-gray-400 flex items-center gap-2">
                        <TrendingUp className="w-4 h-4" />
                        Potential Return
                    </span>
                    <span className="text-xl font-mono font-bold text-[#00ff88]">
                        {potentialReturn} {currency}
                    </span>
                </div>

                {/* Action Button */}
                <button
                    onClick={() => onPlaceBet({ amount, currency, player: selectedPlayer })}
                    disabled={!amount || !selectedPlayer || !isAmountValid}
                    className="btn-primary w-full flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    Stake <ArrowRight className="w-5 h-5" />
                </button>
            </div>
        </div>
    );
};

export default BettingCard;
