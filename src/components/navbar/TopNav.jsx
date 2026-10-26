import React from 'react';
import { Search, HelpCircle, Menu } from 'lucide-react';

export default function TopNav({ 
  breadcrumb = 'Projects > Real Estate App', 
  title = 'Mobile App Projects',
  onMenuClick 
}) {
  return (
    <header className="flex flex-col gap-4 pb-5 border-b border-slate-100">
      {/* Top Bar on Mobile */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          {/* Hamburger button visible only on mobile */}
          <button
            onClick={onMenuClick}
            className="p-2 -ml-1 text-slate-600 hover:bg-slate-100 rounded-xl md:hidden transition-colors"
            aria-label="Open Navigation"
          >
            <Menu size={20} />
          </button>

          <div>
            <div className="flex items-center gap-1.5 text-[11px] text-slate-400 font-medium mb-0.5">
              <span>{breadcrumb}</span>
            </div>
            <h1 className="text-xl md:text-2xl font-bold text-blue-600">{title}</h1>
          </div>
        </div>

        {/* Action icons right */}
        <div className="flex items-center gap-2">
          <button className="flex items-center gap-1.5 bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold px-3 py-1.5 rounded-lg transition-colors shadow-sm">
            <span>Share</span>
          </button>
          <button className="text-slate-400 hover:text-slate-600 p-1">
            <HelpCircle size={18} />
          </button>
        </div>
      </div>

      {/* Search & Avatars Row */}
      <div className="flex items-center justify-between gap-3">
        <div className="relative flex-1 max-w-md">
          <Search size={15} className="absolute left-3 top-2.5 text-slate-400" />
          <input
            type="text"
            placeholder="Find task..."
            className="w-full bg-white border border-slate-200 rounded-full pl-9 pr-4 py-1.5 text-xs text-slate-700 outline-none focus:border-blue-500 shadow-sm"
          />
        </div>

        <div className="flex items-center -space-x-2 shrink-0">
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
          <span className="w-7 h-7 rounded-full bg-blue-100 text-blue-600 text-[10px] font-bold flex items-center justify-center border-2 border-white">
            +11
          </span>
        </div>
      </div>
    </header>
  );
}