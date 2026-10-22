import React, { useState } from 'react';
import TaskCard from './TaskCard';
import { initialTasks } from '../../data/mockData';
import { Plus } from 'lucide-react';


export default function KanbanBoard() {
  const [tasks] = useState(initialTasks);

  const columns = [
    { id: 'todo', title: 'To Do', color: 'bg-slate-400' },
    { id: 'in_progress', title: 'In Progress', color: 'bg-blue-600' },
    { id: 'done', title: 'Done', color: 'bg-emerald-500' }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
      {columns.map((column) => {
        const columnTasks = tasks.filter((t) => t.status === column.id);

        return (
          <div key={column.id} className="bg-slate-100/70 p-4 rounded-2xl flex flex-col gap-3 min-h-[500px]">
            {/* Column Header */}
            <div className="flex items-center justify-between px-1">
              <div className="flex items-center gap-2">
                <span className={`w-2.5 h-2.5 rounded-full ${column.color}`} />
                <h3 className="text-xs font-bold text-slate-700 tracking-wide uppercase">
                  {column.title}
                </h3>
                <span className="bg-slate-200 text-slate-600 text-[10px] font-bold px-2 py-0.5 rounded-full">
                  {columnTasks.length}
                </span>
              </div>
              <button className="text-slate-400 hover:text-slate-700">
                <Plus size={16} />
              </button>
            </div>

            {/* Task Cards List */}
            <div className="flex flex-col gap-3">
              {columnTasks.map((task) => (
                <TaskCard key={task.id} task={task} />
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}