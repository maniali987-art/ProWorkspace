import React from 'react';
import { 
  Users, 
  Mail, 
  TrendingUp, 
  DollarSign, 
  Activity, 
  Globe, 
  Settings as SettingsIcon,
  CheckCircle2,
  Clock,
  AlertCircle
} from 'lucide-react';

// 1. Dashboard Page
export function DashboardView() {
  const stats = [
    { title: 'Total Projects', count: '12', change: '+2 this month', icon: TrendingUp, color: 'text-blue-600 bg-blue-50' },
    { title: 'Ongoing Tasks', count: '64', change: '18 high priority', icon: Clock, color: 'text-amber-600 bg-amber-50' },
    { title: 'Completed Tasks', count: '142', change: '+32% efficiency', icon: CheckCircle2, color: 'text-emerald-600 bg-emerald-50' },
    { title: 'Pending Reviews', count: '7', change: 'Requires attention', icon: AlertCircle, color: 'text-red-600 bg-red-50' },
  ];

  return (
    <div className="space-y-6 pt-4">
      <div>
        <h2 className="text-xl font-bold text-slate-800">Workspace Dashboard</h2>
        <p className="text-xs text-slate-400 mt-0.5">Overview of active projects, timeline progress and team analytics</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {stats.map((s, i) => {
          const Icon = s.icon;
          return (
            <div key={i} className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-semibold text-slate-500">{s.title}</span>
                <span className={`p-2 rounded-xl ${s.color}`}><Icon size={16} /></span>
              </div>
              <h3 className="text-2xl font-bold text-slate-800">{s.count}</h3>
              <p className="text-[11px] text-slate-400 mt-1">{s.change}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// 2. Inbox Page
export function InboxView() {
  const messages = [
    { sender: 'Sarah Connor', subject: 'Real Estate contract updates', time: '10:45 AM', unread: true },
    { sender: 'David Miller', subject: 'Mobile API deployment completed', time: 'Yesterday', unread: false },
    { sender: 'Emma Watson', subject: 'Design review feedback on Kanban cards', time: '2 days ago', unread: false },
  ];

  return (
    <div className="space-y-4 pt-4">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold text-slate-800">Inbox</h2>
          <p className="text-xs text-slate-400 mt-0.5">Direct notifications and team threads</p>
        </div>
        <span className="bg-red-500 text-white text-xs font-bold px-2.5 py-1 rounded-full">100 Unread</span>
      </div>

      <div className="bg-white rounded-2xl border border-slate-200 divide-y divide-slate-100 shadow-sm overflow-hidden">
        {messages.map((m, idx) => (
          <div key={idx} className={`p-4 flex items-center justify-between hover:bg-slate-50 transition-colors cursor-pointer ${m.unread ? 'bg-blue-50/30' : ''}`}>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-xs">
                <Mail size={15} />
              </div>
              <div>
                <h4 className="text-xs font-bold text-slate-800">{m.sender}</h4>
                <p className="text-xs text-slate-500 mt-0.5">{m.subject}</p>
              </div>
            </div>
            <span className="text-[11px] text-slate-400">{m.time}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

// 3. Team Page
export function TeamView() {
  const members = [
    { name: 'Alex Johnson', role: 'Frontend Lead', status: 'Online', img: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=60' },
    { name: 'Michael Smith', role: 'Product Manager', status: 'In Meeting', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=60' },
    { name: 'Zoya Khan', role: 'UI/UX Designer', status: 'Online', img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format&fit=crop&q=60' },
  ];

  return (
    <div className="space-y-4 pt-4">
      <div>
        <h2 className="text-xl font-bold text-slate-800">Team Directory</h2>
        <p className="text-xs text-slate-400 mt-0.5">Manage members, active permissions and assignments</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {members.map((m, idx) => (
          <div key={idx} className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-4">
            <img src={m.img} alt={m.name} className="w-12 h-12 rounded-full object-cover border border-slate-200" />
            <div>
              <h4 className="text-sm font-bold text-slate-800">{m.name}</h4>
              <p className="text-xs text-slate-500">{m.role}</p>
              <span className="inline-block mt-1 text-[10px] font-semibold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">
                {m.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// 4. Project Placeholder View (Finance, Fitness, Website Dev)
export function ProjectWorkspaceView({ title, category, icon: Icon }) {
  return (
    <div className="space-y-4 pt-4">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center shadow-sm">
          <Icon size={20} />
        </div>
        <div>
          <h2 className="text-xl font-bold text-slate-800">{title}</h2>
          <p className="text-xs text-slate-400 mt-0.5">{category} Workspace</p>
        </div>
      </div>

      <div className="bg-white rounded-2xl border border-slate-200 p-8 text-center min-h-[350px] flex flex-col items-center justify-center shadow-sm">
        <div className="w-16 h-16 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 mb-3">
          <Icon size={28} />
        </div>
        <h3 className="text-base font-bold text-slate-700">{title} Tasks & Board</h3>
        <p className="text-xs text-slate-400 max-w-sm mt-1">
          This project workspace is configured. You can start adding tasks or integrate board columns for this module.
        </p>
      </div>
    </div>
  );
}

// 5. Settings Page
export function SettingsView() {
  return (
    <div className="space-y-4 pt-4">
      <div>
        <h2 className="text-xl font-bold text-slate-800">Workspace Settings</h2>
        <p className="text-xs text-slate-400 mt-0.5">Manage system preferences and notifications</p>
      </div>

      <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm max-w-2xl space-y-4">
        <div className="space-y-1">
          <label className="text-xs font-bold text-slate-700">Workspace Name</label>
          <input 
            type="text" 
            defaultValue="ProWorkspace Enterprise" 
            className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-xs text-slate-800 outline-none focus:border-blue-500" 
          />
        </div>
        <div className="space-y-1">
          <label className="text-xs font-bold text-slate-700">Owner Contact</label>
          <input 
            type="text" 
            defaultValue="admin@workspace.com" 
            className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-xs text-slate-800 outline-none focus:border-blue-500" 
          />
        </div>
        <button className="bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold px-4 py-2 rounded-lg transition-colors">
          Save Settings
        </button>
      </div>
    </div>
  );
}