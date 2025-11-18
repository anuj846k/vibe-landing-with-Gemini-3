
import React from 'react';
import { AreaChart, Area, ResponsiveContainer, BarChart, Bar, Tooltip, XAxis, YAxis, CartesianGrid } from 'recharts';
import { Bell, Search, Home, PieChart, Users, Settings, ArrowUpRight, MoreHorizontal, Activity, MousePointerClick } from 'lucide-react';

const areaData = [
  { name: 'Day 1', value: 1000 },
  { name: 'Day 2', value: 2400 },
  { name: 'Day 3', value: 1800 },
  { name: 'Day 4', value: 3200 },
  { name: 'Day 5', value: 2900 },
  { name: 'Day 6', value: 4500 },
  { name: 'Day 7', value: 5800 },
];

const barData = [
  { name: 'M', value: 40 },
  { name: 'T', value: 70 },
  { name: 'W', value: 50 },
  { name: 'T', value: 90 },
  { name: 'F', value: 60 },
  { name: 'S', value: 80 },
  { name: 'S', value: 45 },
];

const HeroRight: React.FC = () => {
  return (
    <div className="relative w-full h-full flex items-center justify-center lg:justify-end perspective-1000 py-12 lg:py-0 px-4 lg:pl-12">
      
      {/* Abstract Background Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] bg-gradient-to-tr from-brand-orange/10 via-purple-500/5 to-blue-500/5 blur-3xl rounded-full pointer-events-none"></div>

      {/* Main Dashboard Card */}
      <div className="relative w-full max-w-xl bg-white rounded-2xl shadow-[0_30px_60px_-15px_rgba(0,0,0,0.12)] border border-gray-100 overflow-hidden z-10 animate-fade-in-up transform transition-all duration-500 hover:shadow-[0_40px_70px_-15px_rgba(0,0,0,0.15)] hover:translate-y-[-2px]">
        
        {/* Dashboard Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-50 bg-white/80 backdrop-blur-sm sticky top-0 z-20">
          <div className="flex items-center gap-2">
            <div className="w-2.5 h-2.5 rounded-full bg-red-400/80"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/80"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-green-400/80"></div>
          </div>
          <div className="flex-1 mx-6 md:mx-10">
             <div className="h-9 bg-gray-50/80 rounded-lg flex items-center px-3 border border-transparent hover:border-gray-200 w-full max-w-[240px] mx-auto transition-all focus-within:border-brand-orange/30 focus-within:bg-white focus-within:ring-2 focus-within:ring-brand-orange/5 group">
                <Search size={14} className="text-gray-400 group-focus-within:text-brand-orange mr-2 transition-colors" />
                <span className="text-xs text-gray-400 group-focus-within:text-gray-600">Search analytics...</span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="relative group">
                <Bell size={18} className="text-gray-400 group-hover:text-brand-dark cursor-pointer transition-colors" />
                <span className="absolute top-0 right-0 w-2 h-2 bg-brand-orange rounded-full border-2 border-white"></span>
            </div>
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-brand-orange to-pink-500 p-[1.5px] cursor-pointer shadow-sm hover:shadow-md transition-shadow">
                 <div className="w-full h-full rounded-full bg-white p-[1.5px]">
                    <img src="https://i.pravatar.cc/150?u=a042581f4e29026704d" alt="User" className="rounded-full w-full h-full object-cover" />
                 </div>
            </div>
          </div>
        </div>

        <div className="flex min-h-[380px]">
            {/* Sidebar Navigation */}
            <div className="w-16 border-r border-gray-50 flex flex-col items-center py-6 gap-6 bg-gray-50/30">
                <div className="p-2.5 bg-brand-orange/10 rounded-xl text-brand-orange cursor-pointer shadow-sm"><Home size={20} strokeWidth={2.5} /></div>
                <div className="p-2.5 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-xl transition-all cursor-pointer"><PieChart size={20} /></div>
                <div className="p-2.5 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-xl transition-all cursor-pointer"><Users size={20} /></div>
                <div className="p-2.5 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-xl transition-all cursor-pointer"><Settings size={20} /></div>
            </div>

            {/* Main Panel Content */}
            <div className="flex-1 p-8 bg-white relative overflow-hidden">
                {/* Grid Background for Chart */}
                <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:20px_20px] opacity-40 pointer-events-none"></div>

                <div className="relative z-10">
                    <div className="flex justify-between items-start mb-8">
                        <div>
                            <p className="text-[11px] text-gray-400 font-bold uppercase tracking-widest mb-1">Weekly Performance</p>
                            <h3 className="text-3xl font-bold text-gray-900 tracking-tight">5,842 <span className="text-lg text-gray-400 font-medium ml-1">Leads</span></h3>
                        </div>
                        <div className="flex items-center gap-1 text-emerald-600 bg-emerald-50/80 backdrop-blur-sm px-2.5 py-1.5 rounded-lg border border-emerald-100/50 shadow-sm">
                            <ArrowUpRight size={16} strokeWidth={2.5} /> 
                            <span className="text-xs font-bold">+24.5%</span>
                        </div>
                    </div>

                    {/* Main Area Chart */}
                    <div className="h-56 w-full -ml-4">
                        <ResponsiveContainer width="105%" height="100%">
                            <AreaChart data={areaData}>
                                <defs>
                                    <linearGradient id="colorGrowth" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="#F0583F" stopOpacity={0.25}/>
                                        <stop offset="95%" stopColor="#F0583F" stopOpacity={0}/>
                                    </linearGradient>
                                </defs>
                                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f3f4f6" />
                                <XAxis dataKey="name" hide />
                                <YAxis hide />
                                <Tooltip 
                                    contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 30px -5px rgba(0,0,0,0.1)', padding: '10px 14px' }}
                                    itemStyle={{ color: '#111827', fontWeight: 'bold', fontSize: '13px' }}
                                    cursor={{ stroke: '#F0583F', strokeWidth: 2, strokeDasharray: '4 4' }}
                                />
                                <Area 
                                    type="monotone" 
                                    dataKey="value" 
                                    stroke="#F0583F" 
                                    strokeWidth={3} 
                                    fillOpacity={1} 
                                    fill="url(#colorGrowth)" 
                                    animationDuration={2000}
                                />
                            </AreaChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </div>
        </div>
      </div>

      {/* --- Floating Elements --- */}

      {/* 1. Active Users (Bottom Left) */}
      <div className="absolute -bottom-6 -left-2 md:-left-12 bg-white p-4 rounded-2xl shadow-[0_15px_35px_-5px_rgba(0,0,0,0.1)] border border-gray-100 z-20 w-52 animate-float-delayed hidden sm:block backdrop-blur-xl bg-white/95">
         <div className="flex items-center justify-between mb-3">
            <span className="text-[11px] font-bold text-gray-400 uppercase tracking-wider">Active Now</span>
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
         </div>
         <div className="flex items-center justify-between">
            <div className="flex -space-x-3">
                {[1,2,3].map((i) => (
                    <div key={i} className="w-9 h-9 rounded-full border-[2.5px] border-white overflow-hidden shadow-sm">
                        <img src={`https://i.pravatar.cc/150?img=${20 + i}`} alt="User" className="w-full h-full object-cover" />
                    </div>
                ))}
                <div className="w-9 h-9 rounded-full border-[2.5px] border-white bg-gray-50 flex items-center justify-center text-[10px] font-bold text-gray-600 shadow-sm">
                    +12k
                </div>
            </div>
         </div>
      </div>

      {/* 2. Engagement Rate (Top Right) */}
      <div className="absolute top-8 -right-4 md:-right-16 bg-white/95 backdrop-blur-xl p-5 rounded-2xl shadow-[0_15px_35px_-5px_rgba(0,0,0,0.1)] border border-gray-100 z-20 w-48 animate-float hidden sm:block">
          <div className="flex justify-between items-center mb-4">
             <div className="p-2 bg-purple-50 rounded-xl">
                <MousePointerClick size={18} className="text-purple-500" />
             </div>
             <span className="text-[11px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">+12%</span>
          </div>
          <div className="mb-1">
             <span className="text-2xl font-bold text-gray-900 tracking-tight">24.8%</span>
          </div>
          <p className="text-xs text-gray-400 font-semibold">Engagement Rate</p>
          <div className="w-full bg-gray-100 h-1.5 rounded-full mt-4 overflow-hidden">
              <div className="h-full bg-purple-500 w-[65%] rounded-full animate-[width_1s_ease-out]"></div>
          </div>
      </div>

      {/* 3. Traffic Sources (Right Center) */}
      <div className="absolute bottom-28 -right-8 md:-right-20 bg-[#111827] text-white p-5 rounded-2xl shadow-2xl z-30 flex flex-col gap-3 animate-scale-in delay-300 w-40 rotate-[-3deg] hover:rotate-0 transition-all duration-300 ring-1 ring-white/10">
        <div className="flex items-center justify-between">
            <Activity size={18} className="text-brand-orange" />
            <MoreHorizontal size={16} className="text-gray-500" />
        </div>
        <div>
            <div className="flex items-end gap-1">
                <span className="text-2xl font-bold tracking-tight">85%</span>
                <span className="text-xs text-gray-400 mb-1 font-medium">Mobile</span>
            </div>
            <div className="h-10 w-full mt-2 opacity-80">
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={barData}>
                        <Bar dataKey="value" fill="#F0583F" radius={[2, 2, 0, 0]} />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
      </div>

    </div>
  );
};

export default HeroRight;
