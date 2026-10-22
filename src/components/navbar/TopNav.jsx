/* eslint-disable no-unused-vars */
import React from 'react';
import { Search, HelpCircle } from 'lucide-react';

export default function TopNav({ onActionClick }) {
  return (
    <header className="flex flex-col md:flex-row md:items-center justify-between pb-6 gap-4 border-b border-slate-100">
      <div>
        <div className="flex items-center gap-1.5 text-xs text-slate-400 font-medium mb-1">
          <span>Projects</span>
          <span>&gt;</span>
          <span className="text-slate-600 font-semibold">Real Estate App</span>
        </div>
        <h1 className="text-2xl font-bold text-blue-600">Mobile App Projects</h1>
      </div>

      <div className="flex items-center gap-4">
        {/* Find Task Search Input */}
        <div className="relative">
          <Search size={15} className="absolute left-3 top-2.5 text-slate-400" />
          <input
            type="text"
            placeholder="Find task..."
            onFocus={onActionClick}
            className="bg-white border border-slate-200 rounded-full pl-9 pr-4 py-1.5 text-xs text-slate-700 outline-none w-56 focus:border-blue-500 shadow-sm"
          />
        </div>

        {/* Team Avatars */}
        <div 
          onClick={onActionClick} 
          className="flex items-center -space-x-2 cursor-pointer hover:opacity-80 transition-opacity"
        >
          <img
            src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=60&auto=format&fit=crop&q=60"
            alt="member"
            className="w-7 h-7 rounded-full border-2 border-white object-cover"
          />
          <img
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&auto=format&fit=crop&q=60"
            alt="member"
            className="w-7 h-7 rounded-full border-2 border-white object-cover"
          />
          <img
            src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=60&auto=format&fit=crop&q=60"
            alt="member"
            className="w-7 h-7 rounded-full border-2 border-white object-cover"
          />
          <span className="w-7 h-7 rounded-full bg-blue-100 text-blue-600 text-[10px] font-bold flex items-center justify-center border-2 border-white">
            +11
          </span>
        </div>

        {/* Share Button */}
        <button 
          onClick={onActionClick}
          className="flex items-center gap-1.5 bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold px-4 py-1.5 rounded-lg transition-colors shadow-sm"
        >
          <span>Share</span>
        </button>

        {/* Help Icon */}
        <button 
          onClick={onActionClick} 
          className="text-slate-400 hover:text-slate-600"
        >
          <HelpCircle size={18} />
        </button>
      </div>
    </header>
  );
}