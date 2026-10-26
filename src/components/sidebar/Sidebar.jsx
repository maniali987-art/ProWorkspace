import React from 'react';
import { NavLink } from 'react-router-dom';
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
  Layers,
  X
} from 'lucide-react';

export default function Sidebar({ setIsAuthenticated, isOpen, setIsOpen }) {
  const navLinkClass = ({ isActive }) =>
    isActive
      ? 'w-full flex items-center gap-3 px-3 py-2.5 text-blue-600 bg-blue-50 rounded-lg text-xs font-semibold transition-all'
      : 'w-full flex items-center gap-3 px-3 py-2.5 text-slate-600 hover:text-blue-600 hover:bg-slate-50 rounded-lg text-xs font-semibold transition-all';

  const subNavLinkClass = ({ isActive }) =>
    isActive
      ? 'flex items-center justify-between py-1.5 px-2 bg-blue-50 text-blue-600 rounded font-medium transition-colors'
      : 'flex items-center justify-between py-1.5 px-2 text-slate-500 hover:text-slate-800 hover:bg-slate-50 rounded transition-colors';

  const closeSidebarOnMobile = () => {
    if (setIsOpen) setIsOpen(false);
  };

  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated');
    if (setIsAuthenticated) {
      setIsAuthenticated(false);
    }
  };

  return (
    <>
      {/* 1. Mobile Backdrop Overlay */}
      {isOpen && (
        <div 
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-40 md:hidden transition-opacity"
        />
      )}

      {/* 2. Responsive Sidebar Drawer */}
      <aside
        className={`fixed md:sticky top-0 left-0 z-50 h-screen w-64 bg-white border-r border-slate-200 flex flex-col justify-between p-4 shrink-0 transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
        }`}
      >
        <div>
          {/* Header with Close Button for Mobile */}
          <div className="flex items-center justify-between mb-4">
            <NavLink
              to="/dashboard"
              onClick={closeSidebarOnMobile}
              className="flex items-center gap-3 px-2 py-1.5 hover:bg-slate-50 rounded-xl transition-colors"
            >
              <div className="w-9 h-9 rounded-xl bg-blue-600 flex items-center justify-center text-white shadow-sm">
                <Layers size={20} />
              </div>
              <div>
                <h2 className="text-sm font-bold text-slate-800 leading-tight">ProWorkspace</h2>
                <p className="text-[11px] text-slate-400">Enterprise Plan</p>
              </div>
            </NavLink>

            <button 
              onClick={() => setIsOpen(false)}
              className="p-1.5 text-slate-400 hover:text-slate-600 md:hidden rounded-lg hover:bg-slate-100"
            >
              <X size={18} />
            </button>
          </div>

          {/* Search Bar */}
          <div className="relative mb-4">
            <Search size={16} className="absolute left-3 top-2.5 text-slate-400" />
            <input
              type="text"
              placeholder="Search..."
              className="w-full bg-slate-50 border border-slate-200 rounded-lg pl-9 pr-3 py-2 text-xs text-slate-700 outline-none focus:border-blue-500 focus:bg-white transition-all"
            />
          </div>

          {/* Navigation Links */}
          <nav className="space-y-1">
            <NavLink to="/dashboard" onClick={closeSidebarOnMobile} className={navLinkClass}>
              <LayoutDashboard size={17} />
              <span>Dashboard</span>
            </NavLink>

            <NavLink
              to="/inbox"
              onClick={closeSidebarOnMobile}
              className={({ isActive }) =>
                isActive
                  ? 'w-full flex items-center justify-between px-3 py-2.5 text-blue-600 bg-blue-50 rounded-lg text-xs font-semibold'
                  : 'w-full flex items-center justify-between px-3 py-2.5 text-slate-600 hover:text-blue-600 hover:bg-slate-50 rounded-lg text-xs font-semibold'
              }
            >
              <div className="flex items-center gap-3">
                <Inbox size={17} />
                <span>Inbox</span>
              </div>
              <span className="bg-red-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full">100</span>
            </NavLink>

            <NavLink to="/team" onClick={closeSidebarOnMobile} className={navLinkClass}>
              <Users size={17} />
              <span>Team</span>
            </NavLink>

            <div className="flex items-center justify-between px-3 py-2 text-blue-600 bg-blue-50/60 rounded-lg text-xs font-semibold mt-2">
              <div className="flex items-center gap-3">
                <Folder size={17} />
                <span>Projects</span>
              </div>
              <span className="bg-red-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full">12</span>
            </div>

            <div className="pt-2 pl-4 pr-1">
              <div className="flex items-center justify-between text-xs font-semibold text-slate-700 py-1">
                <div className="flex items-center gap-2">
                  <Folder size={15} className="text-slate-500" />
                  <span>Mobile App</span>
                </div>
                <ChevronDown size={14} className="text-slate-400" />
              </div>

              <div className="pl-5 pt-1 space-y-1 text-xs">
                <NavLink to="/finance-app" onClick={closeSidebarOnMobile} className={subNavLinkClass}>
                  <span>Finance App</span>
                  <span className="bg-red-400 text-white text-[10px] px-1.5 py-0.2 rounded-full">2</span>
                </NavLink>

                <NavLink to="/real-estate" onClick={closeSidebarOnMobile} className={subNavLinkClass}>
                  <span>Real Estate App</span>
                  <span className="bg-red-500 text-white text-[10px] px-1.5 py-0.2 rounded-full">8</span>
                </NavLink>

                <NavLink to="/fitness-app" onClick={closeSidebarOnMobile} className={subNavLinkClass}>
                  <span>Fitness App</span>
                  <span className="bg-red-400 text-white text-[10px] px-1.5 py-0.2 rounded-full">2</span>
                </NavLink>
              </div>

              <NavLink
                to="/website-dev"
                onClick={closeSidebarOnMobile}
                className={({ isActive }) =>
                  `flex items-center justify-between text-xs font-semibold py-2 px-1 rounded mt-1 transition-colors ${
                    isActive ? 'text-blue-600 bg-blue-50' : 'text-slate-700 hover:bg-slate-50'
                  }`
                }
              >
                <div className="flex items-center gap-2">
                  <Folder size={15} className="text-slate-500" />
                  <span>Website Development</span>
                </div>
                <ChevronDown size={14} className="text-slate-400" />
              </NavLink>
            </div>

            <div className="pt-2">
              <button className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-xs font-medium py-2.5 rounded-lg transition-colors">
                <Plus size={16} />
                <span>New Project</span>
              </button>
            </div>
          </nav>
        </div>

        {/* Footer */}
        <div className="pt-3 border-t border-slate-100 space-y-1">
          <NavLink to="/settings" onClick={closeSidebarOnMobile} className={navLinkClass}>
            <Settings size={16} />
            <span>Settings</span>
          </NavLink>

          <button
            onClick={handleLogout}
            className="w-full flex items-center gap-3 px-3 py-2 text-red-500 hover:bg-red-50 rounded-lg text-xs font-medium transition-colors"
          >
            <LogOut size={16} />
            <span>Logout</span>
          </button>

          <div className="flex items-center gap-3 px-2 pt-3 mt-2 border-t border-slate-100">
            <img
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=60"
              alt="User"
              className="w-9 h-9 rounded-full object-cover"
            />
            <div className="leading-tight text-left">
              <h4 className="text-xs font-semibold text-slate-800">Usman Ali</h4>
              <p className="text-[10px] text-slate-400">admin@workspace.com</p>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}