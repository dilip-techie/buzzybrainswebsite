'use strict';
import React from 'react';
import { 
  LayoutDashboard, 
  Database, 
  FileText, 
  BarChart3, 
  LogOut, 
  UserCircle,
  Dumbbell,
  UserCircle2,
  Activity,
  Layers,
  UserPlus,
  Trophy,
  Search,
  Zap,
  Bot
} from 'lucide-react';
import { Role } from '@prisma/client';

interface SidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  userRole: Role;
  userName?: string | null;
  onLogout: () => void;
}

export default function Sidebar({ 
  activeTab, 
  setActiveTab, 
  userRole, 
  userName, 
  onLogout 
}: SidebarProps) {
  const isTeacherOrAdmin = userRole === Role.Admin || userRole === Role.Teacher;

  const navItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    ...(userRole === Role.Admin ? [{ id: 'teachers', label: 'Teacher Management', icon: UserCircle }] : []),
    ...(isTeacherOrAdmin ? [{ id: 'provision', label: 'Provision Students', icon: UserPlus }] : []),
    ...(isTeacherOrAdmin ? [{ id: 'students', label: 'Manage Students', icon: Search }] : []),
    ...(isTeacherOrAdmin ? [{ id: 'batches', label: 'Batches', icon: Layers }] : []),
    ...(isTeacherOrAdmin ? [{ id: 'questions', label: 'Question Bank', icon: Database }] : []),
    ...(isTeacherOrAdmin ? [{ id: 'ai-seeder', label: 'AI Seeder', icon: Bot }] : []),
    ...(isTeacherOrAdmin ? [{ id: 'create-test', label: 'Create Test', icon: Zap }] : []),
    { id: 'tests', label: isTeacherOrAdmin ? 'Manage Tests' : 'Available Tests', icon: FileText },
    ...(isTeacherOrAdmin ? [{ id: 'results', label: 'Results', icon: Trophy }] : []),
    ...(!isTeacherOrAdmin ? [{ id: 'practice', label: 'Practice Mode', icon: Dumbbell }] : []),
    ...(!isTeacherOrAdmin ? [{ id: 'profile', label: 'My Profile', icon: UserCircle2 }] : []),
  ];


  return (
    <aside className="w-64 bg-slate-900 text-slate-300 flex flex-col h-screen shrink-0 shadow-xl border-r border-slate-800">
      {/* Brand Header */}
      <div className="p-5 border-b border-slate-800 flex items-center gap-3">
        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500 to-amber-600 flex items-center justify-center shadow-md shadow-amber-500/20">
          <span className="text-slate-950 font-extrabold text-sm">BB</span>
        </div>
        <div>
          <h1 className="font-bold text-white tracking-wide text-sm"><span className="text-amber-400">Buzzy</span>Brains</h1>
          <span className="text-[10px] text-amber-400/80 font-semibold tracking-wider uppercase px-1.5 py-0.5 bg-amber-950/40 rounded border border-amber-800/30">
            {userRole} Portal
          </span>
        </div>
      </div>

      {/* Navigation items */}
      <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;
          return (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-lg font-medium text-sm transition-all duration-200 ${
                isActive 
                  ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/25 font-semibold' 
                  : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
              }`}
            >
              <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-slate-400'}`} />
              {item.label}
            </button>
          );
        })}
      </nav>

      {/* User Profile Footer */}
      <div className="p-4 border-t border-slate-800 bg-slate-950/40">
        <div className="flex items-center gap-3 mb-3 px-1">
          <UserCircle className="w-8 h-8 text-indigo-400 shrink-0" />
          <div className="min-w-0 flex-1">
            <p className="text-xs font-semibold text-slate-200 truncate">
              {userName || 'Demo User'}
            </p>
            <p className="text-[10px] text-slate-500 truncate capitalize">{userRole}</p>
          </div>
        </div>
        <button
          onClick={onLogout}
          className="w-full flex items-center justify-center gap-2 py-2 rounded-md bg-slate-800 hover:bg-red-600/20 hover:text-red-400 text-slate-400 text-xs font-medium transition-colors border border-slate-700 hover:border-red-500/30"
        >
          <LogOut className="w-3.5 h-3.5" />
          Sign Out
        </button>
      </div>
    </aside>
  );
}
