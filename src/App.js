import React, { useState } from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Sidebar from './components/sidebar/Sidebar';
import TopNav from './components/navbar/TopNav';
import BoardHeader from './components/board/BoardHeader';
import KanbanBoard from './components/board/KanbanBoard';
import Login from './components/auth/Login';
import ProtectedRoute from './components/auth/ProtectedRoute';
import { 
  DashboardView, 
  InboxView, 
  TeamView, 
  ProjectWorkspaceView, 
  SettingsView 
} from './components/pages/Pages';
import { DollarSign, Activity, Globe } from 'lucide-react';

export default function App() {
  const location = useLocation();
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    return localStorage.getItem('isAuthenticated') === 'true';
  });

  const viewTitles = {
    '/real-estate': { breadcrumb: 'Projects > Real Estate App', title: 'Mobile App Projects' },
    '/dashboard': { breadcrumb: 'Workspace > Dashboard', title: 'Analytics & Activity' },
    '/inbox': { breadcrumb: 'Workspace > Inbox', title: 'Messages & Notifications' },
    '/team': { breadcrumb: 'Workspace > Team', title: 'Team Directory' },
    '/finance-app': { breadcrumb: 'Projects > Finance App', title: 'Finance Mobile App' },
    '/fitness-app': { breadcrumb: 'Projects > Fitness App', title: 'Fitness Tracker App' },
    '/website-dev': { breadcrumb: 'Projects > Website Development', title: 'Web App Infrastructure' },
    '/settings': { breadcrumb: 'System > Settings', title: 'Workspace Settings' },
  };

  const currentView = viewTitles[location.pathname] || viewTitles['/real-estate'];

  // Agar login page par hain to sidebar aur topnav na dikhein
  if (location.pathname === '/login') {
    return (
      <Routes>
        <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    );
  }

  return (
    <ProtectedRoute isAuthenticated={isAuthenticated}>
      <div className="flex min-h-screen bg-slate-50">
        {/* 1. Left Sidebar */}
        <Sidebar setIsAuthenticated={setIsAuthenticated} />

        {/* 2. Main Content Area */}
        <div className="flex-1 flex flex-col p-8 overflow-y-auto">
          <TopNav 
            breadcrumb={currentView.breadcrumb} 
            title={currentView.title} 
          />

          <Routes>
            <Route path="/" element={<Navigate to="/real-estate" replace />} />
            <Route 
              path="/real-estate" 
              element={
                <>
                  <BoardHeader />
                  <KanbanBoard />
                </>
              } 
            />
            <Route path="/dashboard" element={<DashboardView />} />
            <Route path="/inbox" element={<InboxView />} />
            <Route path="/team" element={<TeamView />} />
            <Route path="/finance-app" element={<ProjectWorkspaceView title="Finance Mobile App" category="Finance" icon={DollarSign} />} />
            <Route path="/fitness-app" element={<ProjectWorkspaceView title="Fitness Tracker App" category="Health & Fitness" icon={Activity} />} />
            <Route path="/website-dev" element={<ProjectWorkspaceView title="Website Development" category="Web Application" icon={Globe} />} />
            <Route path="/settings" element={<SettingsView />} />
            <Route path="*" element={<Navigate to="/real-estate" replace />} />
          </Routes>
        </div>
      </div>
    </ProtectedRoute>
  );
}