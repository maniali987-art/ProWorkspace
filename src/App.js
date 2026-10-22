import React from 'react';
import Sidebar from './components/sidebar/Sidebar';
import TopNav from './components/navbar/TopNav';
import BoardHeader from './components/board/BoardHeader';

export default function App() {
  return (
    <div className="flex min-h-screen bg-slate-50">
      {/* 1. Left Sidebar */}
      <Sidebar />

      
      <div className="flex-1 flex flex-col p-8 overflow-y-auto">
        <TopNav />
        <BoardHeader />
        {/* Yahan agle step mein Board Views aur Kanban Columns aayenge */}
      
      </div>
      
    </div>
    
  );
}