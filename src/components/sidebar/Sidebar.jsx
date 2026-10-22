import React from 'react';
import {
  LayoutDashboard,
  Inbox,
  Users,
  Folder,
  Settings,
  LogOut,
  ChevronDown,
  Plus,
  Search,
  Layers
} from 'lucide-react';

export default function Sidebar({ activeView, setActiveView }) {
  return (
    <aside className="w-64 h-screen bg-white border-r border-slate-200 flex flex-col justify-between p-4 shrink-0">
      <div>
        {/* Workspace Brand Header */}
        <div 
          onClick={() => setActiveView('workspace')}
          className="flex items-center gap-3 px-2 py-3 mb-4 cursor-pointer hover:bg-slate-50 rounded-xl transition-colors"
        >
          <div className="w-9 h-9 rounded-xl bg-blue-600 flex items-center justify-center text-white shadow-sm">
            <Layers size={20} />
          </div>
          <div>
            <h2 className="text-sm font-bold text-slate-800 leading-tight">ProWorkspace</h2>
            <p className="text-xs text-slate-400">Enterprise Plan</p>
          </div>
        </div>

        {/* Search Bar */}
        <div className="relative mb-5">
          <Search size={16} className="absolute left-3 top-2.5 text-slate-400" />
          <input
            type="text"
            placeholder="Search..."
            onFocus={() => setActiveView('search')}
            className="w-full bg-slate-50 border border-slate-200 rounded-lg pl-9 pr-3 py-2 text-xs text-slate-700 outline-none focus:border-blue-500 focus:bg-white transition-all"
          />
        </div>

        {/* Main Navigation */}
        <nav className="space-y-1">
          <button 
            onClick={() => setActiveView('dashboard')}
            className="w-full flex items-center gap-3 px-3 py-2.5 text-slate-600 hover:text-blue-600 hover:bg-slate-50 rounded-lg text-xs font-semibold transition-all"
          >
            <LayoutDashboard size={17} />
            <span>Dashboard</span>
          </button>

          <button 
            onClick={() => setActiveView('inbox')}
            className="w-full flex items-center justify-between px-3 py-2.5 text-slate-600 hover:text-blue-600 hover:bg-slate-50 rounded-lg text-xs font-semibold transition-all"
          >
            <div className="flex items-center gap-3">
              <Inbox size={17} />
              <span>Inbox</span>
            </div>
            <span className="bg-red-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full">100</span>
          </button>

          <button 
            onClick={() => setActiveView('team')}
            className="w-full flex items-center gap-3 px-3 py-2.5 text-slate-600 hover:text-blue-600 hover:bg-slate-50 rounded-lg text-xs font-semibold transition-all"
          >
            <Users size={17} />
            <span>Team</span>
          </button>

          <button 
            onClick={() => setActiveView('projects')}
            className="w-full flex items-center justify-between px-3 py-2.5 text-blue-600 bg-blue-50 rounded-lg text-xs font-semibold transition-all"
          >
            <div className="flex items-center gap-3">
              <Folder size={17} />
              <span>Projects</span>
            </div>
            <span className="bg-red-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full">12</span>
          </button>

          {/* Nested Sub-Projects */}
          <div className="pt-2 pl-4 pr-1">
            <div 
              onClick={() => setActiveView('mobile-app')}
              className="flex items-center justify-between text-xs font-semibold text-slate-700 py-1 cursor-pointer"
            >
              <div className="flex items-center gap-2">
                <Folder size={15} className="text-slate-500" />
                <span>Mobile App</span>
              </div>
              <ChevronDown size={14} className="text-slate-400" />
            </div>

            <div className="pl-5 pt-1 space-y-1 text-xs">
              <div 
                onClick={() => setActiveView('finance-app')}
                className="flex items-center justify-between py-1.5 px-2 text-slate-500 hover:text-slate-800 rounded cursor-pointer hover:bg-slate-50"
              >
                <span>Finance App</span>
                <span className="bg-red-400 text-white text-[10px] px-1.5 py-0.2 rounded-full">2</span>
              </div>
              
              <div 
                onClick={() => setActiveView('real-estate')}
                className={`flex items-center justify-between py-1.5 px-2 rounded font-medium cursor-pointer transition-colors ${
                  activeView === 'real-estate' ? 'bg-blue-50 text-blue-600' : 'text-slate-500 hover:bg-slate-50'
                }`}
              >
                <span>Real Estate App</span>
                <span className="bg-red-500 text-white text-[10px] px-1.5 py-0.2 rounded-full">8</span>
              </div>

              <div 
                onClick={() => setActiveView('fitness-app')}
                className="flex items-center justify-between py-1.5 px-2 text-slate-500 hover:text-slate-800 rounded cursor-pointer hover:bg-slate-50"
              >
                <span>Fitness App</span>
                <span className="bg-red-400 text-white text-[10px] px-1.5 py-0.2 rounded-full">2</span>
              </div>
            </div>

            <div 
              onClick={() => setActiveView('website-dev')}
              className="flex items-center justify-between text-xs font-semibold text-slate-700 py-2 cursor-pointer mt-1"
            >
              <div className="flex items-center gap-2">
                <Folder size={15} className="text-slate-500" />
                <span>Website Development</span>
              </div>
              <ChevronDown size={14} className="text-slate-400" />
            </div>
          </div>

          {/* New Project Button */}
          <div className="pt-2">
            <button 
              onClick={() => setActiveView('new-project')}
              className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-xs font-medium py-2.5 rounded-lg transition-colors"
            >
              <Plus size={16} />
              <span>New Project</span>
            </button>
          </div>
        </nav>
      </div>

      {/* Footer Area */}
      <div className="pt-3 border-t border-slate-100 space-y-1">
        <button 
          onClick={() => setActiveView('settings')}
          className="w-full flex items-center gap-3 px-3 py-2 text-slate-600 hover:text-slate-900 rounded-lg text-xs font-medium"
        >
          <Settings size={16} />
          <span>Settings</span>
        </button>

        <button 
          onClick={() => setActiveView('logout')}
          className="w-full flex items-center gap-3 px-3 py-2 text-red-500 hover:bg-red-50 rounded-lg text-xs font-medium"
        >
          <LogOut size={16} />
          <span>Logout</span>
        </button>

        {/* User Card */}
        <div 
          onClick={() => setActiveView('user-profile')}
          className="flex items-center gap-3 px-2 pt-3 mt-2 border-t border-slate-100 cursor-pointer hover:bg-slate-50 rounded-xl p-1 transition-colors"
        >
          <img
            src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=60"
            alt="User"
            className="w-9 h-9 rounded-full object-cover"
          />
          <div className="leading-tight text-left">
            <h4 className="text-xs font-semibold text-slate-800">Usman Ali</h4>
            <p className="text-[10px] text-slate-400">usmanali@workspace.com</p>
          </div>
        </div>
      </div>
    </aside>
  );
}