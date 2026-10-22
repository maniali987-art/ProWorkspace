import React, { useState } from 'react';
import Sidebar from './components/sidebar/Sidebar';
import TopNav from './components/navbar/TopNav';
import BoardHeader from './components/board/BoardHeader';
import KanbanBoard from './components/board/KanbanBoard';

export default function App() {
  // Screen state: default 'real-estate' board khulega
  const [activeView, setActiveView] = useState('real-estate');

  return (
    <div className="flex min-h-screen bg-slate-50">
      {/* 1. Left Sidebar */}
      <Sidebar activeView={activeView} setActiveView={setActiveView} />

      {/* 2. Main Area */}
      <div className="flex-1 flex flex-col p-8 overflow-y-auto">
        {activeView === 'real-estate' ? (
          <>
            <TopNav onActionClick={() => setActiveView('other')} />
            <BoardHeader onTabClick={() => setActiveView('other')} />
            <KanbanBoard />
          </>
        ) : (
          /* Usman Ali Screen */
          <div className="flex-1 flex flex-col items-center justify-center min-h-[500px]">
            <div className="bg-white border border-slate-200 shadow-sm rounded-2xl p-10 max-w-md w-full text-center">
              <div className="w-20 h-20 rounded-full bg-blue-100 text-blue-600 font-bold text-2xl flex items-center justify-center mx-auto mb-4 border-2 border-blue-200">
                UA
              </div>
              <h2 className="text-3xl font-extrabold text-slate-800 tracking-tight">
                Usman Ali
              </h2>
              <p className="text-sm font-semibold text-blue-600 mt-1">Workspace Owner & Lead Developer</p>
              <p className="text-xs text-slate-500 mt-3 bg-slate-50 py-3 px-4 rounded-xl border border-slate-100">
                Yeh section Usman Ali ke zariye manage ho raha hai. Wapas Real Estate Board dekhne ke liye niche button ya sidebar click karein.
              </p>
              <button
                onClick={() => setActiveView('real-estate')}
                className="mt-6 inline-flex items-center justify-center px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold rounded-lg shadow-sm transition-all"
              >
                Back to Real Estate Board
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}