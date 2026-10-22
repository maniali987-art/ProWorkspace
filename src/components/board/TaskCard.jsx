import React from 'react';
import { MessageSquare, Paperclip, MoreHorizontal } from 'lucide-react';

export default function TaskCard({ task }) {
  const priorityStyles = {
    Urgent: 'bg-red-50 text-red-600 border-red-200',
    High: 'bg-amber-50 text-amber-600 border-amber-200',
    Medium: 'bg-blue-50 text-blue-600 border-blue-200',
    Low: 'bg-slate-50 text-slate-600 border-slate-200'
  };

  return (
    <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
      {/* Priority Tag & Card Menu */}
      <div className="flex items-center justify-between mb-2.5">
        <span className={`text-[10px] font-bold px-2 py-0.5 rounded border ${priorityStyles[task.priority] || priorityStyles.Low}`}>
          {task.priority}
        </span>
        <button className="text-slate-400 hover:text-slate-600">
          <MoreHorizontal size={15} />
        </button>
      </div>

      {/* Task Title & Description */}
      <h4 className="text-sm font-semibold text-slate-800 leading-snug mb-1">
        {task.title}
      </h4>
      <p className="text-xs text-slate-500 line-clamp-2 mb-3">
        {task.description}
      </p>

      {/* Footer: Tags, Members & Counters */}
      <div className="flex items-center justify-between pt-2 border-t border-slate-100 text-slate-400 text-xs">
        <div className="flex items-center -space-x-1.5">
          {task.members.map((imgUrl, idx) => (
            <img
              key={idx}
              src={imgUrl}
              alt="assignee"
              className="w-5 h-5 rounded-full border border-white object-cover"
            />
          ))}
        </div>

        <div className="flex items-center gap-3">
          <span className="flex items-center gap-1 text-[11px]">
            <MessageSquare size={13} />
            {task.commentsCount}
          </span>
          <span className="flex items-center gap-1 text-[11px]">
            <Paperclip size={13} />
            {task.attachmentsCount}
          </span>
        </div>
      </div>
    </div>
  );
}