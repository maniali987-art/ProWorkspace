import React, { useState } from 'react';
import { CircleDot, Columns, List, Table2 } from 'lucide-react';

export default function BoardHeader() {
  const [activeTab, setActiveTab] = useState('board');

  const tabs = [
    { id: 'overview', label: 'Overview', icon: CircleDot },
    { id: 'board', label: 'Board', icon: Columns },
    { id: 'list', label: 'List', icon: List },
    { id: 'table', label: 'Table', icon: Table2 },
  ];

  return (
    <div className="pt-6 pb-4">
      {/* Task Heading & Short Description */}
      <div className="mb-5">
        <h2 className="text-lg font-bold text-slate-800">Task</h2>
        <p className="text-xs text-slate-400 mt-0.5">Short descripction will be placed here</p>
      </div>

      {/* View Switcher Tabs */}
      <div className="flex items-center gap-6 border-b border-slate-200 text-xs">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;

          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-1.5 pb-2.5 font-medium transition-colors relative ${
                isActive
                  ? 'text-blue-600 font-semibold'
                  : 'text-slate-500 hover:text-slate-800'
              }`}
            >
              <Icon size={15} />
              <span>{tab.label}</span>
              {isActive && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 rounded-full" />
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}