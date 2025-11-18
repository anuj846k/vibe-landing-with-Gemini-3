import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, LineChart, Line } from 'recharts';
import { Sparkles, TrendingUp, Calendar, Zap, Grid, Layers, Activity, Plus } from 'lucide-react';

const pieData = [
  { name: 'Group A', value: 80 },
  { name: 'Group B', value: 20 },
];
const PIE_COLORS = ['#F0583F', '#FFE4E1'];

const lineData = [
  { name: 'Mon', value: 400 },
  { name: 'Tue', value: 300 },
  { name: 'Wed', value: 500 },
  { name: 'Thu', value: 450 },
  { name: 'Fri', value: 600 },
  { name: 'Sat', value: 550 },
  { name: 'Sun', value: 700 },
];

const HeroRight: React.FC = () => {
  return (
    <div className="relative w-full h-full flex items-center justify-center lg:justify-end perspective-1000">
      
      {/* Main Image Container */}
      <div className="relative w-[320px] md:w-[400px] lg:w-[450px] aspect-[0.85] animate-fade-in-up opacity-0 delay-200">
        
        {/* Background Organic Shape */}
        <div className="absolute -inset-4 bg-orange-50/50 rounded-[40px] rotate-[-3deg] scale-105 z-0 backdrop-blur-3xl"></div>
        
        {/* Main Image */}
        <div className="absolute inset-0 bg-white rounded-[32px] overflow-hidden shadow-2xl shadow-gray-200/50 z-10 ring-1 ring-black/5">
            <img 
                src="https://images.unsplash.com/photo-1531538606174-0f90ff5dce83?auto=format&fit=crop&w=900&q=80" 
                alt="Team collaborating" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000"
            />
            
            {/* Gradient Overlay at bottom for text readability if needed */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent pointer-events-none"></div>
        </div>

        {/* --- Floating UI Elements --- */}

        {/* 1. Blog Traffic Card (Top Left) */}
        <div className="absolute top-16 -left-12 md:-left-20 bg-white/95 backdrop-blur-md p-4 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] w-44 z-20 animate-float border border-white/20 ring-1 ring-black/5">
            <div className="flex justify-between items-center mb-2">
                <span className="text-[11px] text-gray-500 font-semibold uppercase tracking-wide">Blog Traffic</span>
                <div className="flex items-center text-emerald-500 text-[10px] font-bold bg-emerald-50 px-1.5 py-0.5 rounded-full">
                    <TrendingUp size={10} className="mr-1" /> +16.5%
                </div>
            </div>
            <div className="text-2xl font-bold text-gray-900 mb-2">125,536</div>
            
            {/* Mini Sparkline */}
            <div className="h-8 w-full">
               <ResponsiveContainer width="100%" height="100%">
                 <LineChart data={lineData}>
                   <Line type="monotone" dataKey="value" stroke="#10B981" strokeWidth={2} dot={false} />
                 </LineChart>
               </ResponsiveContainer>
            </div>
            <div className="mt-2 text-[10px] text-gray-400 font-medium">Since last week</div>
        </div>

        {/* 2. Creating Marketing Models (Center Overlay) */}
        <div className="absolute top-[45%] -right-8 md:-right-12 bg-white/90 backdrop-blur-md py-2.5 px-5 rounded-full shadow-xl z-30 animate-scale-in opacity-0 delay-500 flex items-center gap-3 border border-white/40 ring-1 ring-black/5">
            <div className="w-8 h-8 rounded-full bg-purple-50 flex items-center justify-center">
                <Sparkles className="w-4 h-4 text-purple-500" />
            </div>
            <div className="flex flex-col">
                <span className="text-xs font-bold text-gray-800">Creating Models...</span>
                <div className="w-24 h-1 bg-gray-100 rounded-full mt-1 overflow-hidden">
                    <div className="h-full bg-purple-500 w-2/3 rounded-full animate-pulse"></div>
                </div>
            </div>
        </div>

        {/* 3. SEO Analytics Donut (Bottom Left) */}
        <div className="absolute -bottom-10 -left-4 md:-left-12 bg-white p-5 rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.12)] w-44 h-48 z-30 animate-float-delayed border border-gray-50 ring-1 ring-black/5">
             <div className="w-full flex justify-between items-center mb-4">
                <span className="text-xs text-gray-500 font-semibold">SEO Analytics</span>
                <span className="text-[10px] text-emerald-500 font-bold bg-emerald-50 px-2 py-1 rounded-full">+20%</span>
             </div>
             <div className="w-28 h-28 mx-auto relative">
                <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                        <Pie
                            data={pieData}
                            innerRadius={38}
                            outerRadius={48}
                            paddingAngle={0}
                            dataKey="value"
                            startAngle={90}
                            endAngle={-270}
                            stroke="none"
                            cornerRadius={10}
                        >
                            {pieData.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={PIE_COLORS[index % PIE_COLORS.length]} />
                            ))}
                        </Pie>
                    </PieChart>
                </ResponsiveContainer>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-2xl font-bold text-brand-dark">80%</span>
                </div>
             </div>
        </div>

        {/* 4. Sidebar Tool Strip (Right) */}
        <div className="absolute top-12 -right-6 md:-right-16 bg-white rounded-2xl shadow-xl py-4 px-2.5 flex flex-col gap-6 z-20 border border-gray-50 ring-1 ring-black/5 animate-fade-in-up opacity-0 delay-700">
            <div className="p-2 bg-brand-orange rounded-xl text-white shadow-lg shadow-brand-orange/30 hover:scale-110 transition-transform cursor-pointer"><Grid size={18} /></div>
            <div className="p-2 text-gray-400 hover:text-brand-orange hover:bg-orange-50 rounded-xl transition-all cursor-pointer"><Activity size={18} /></div>
            <div className="p-2 text-gray-400 hover:text-brand-orange hover:bg-orange-50 rounded-xl transition-all cursor-pointer"><Layers size={18} /></div>
            <div className="p-2 text-gray-400 hover:text-brand-orange hover:bg-orange-50 rounded-xl transition-all cursor-pointer"><Zap size={18} /></div>
        </div>

        {/* 5. AI Integrated Badge (Bottom Right) */}
        <div className="absolute bottom-20 -right-8 md:-right-20 bg-brand-orange text-white py-3 px-5 rounded-xl shadow-xl shadow-brand-orange/20 z-40 flex items-center gap-3 rotate-[-6deg] hover:rotate-0 transition-transform duration-300 cursor-pointer animate-scale-in opacity-0 delay-1000">
             <div className="bg-white/20 p-1 rounded-full">
                <Sparkles size={12} className="text-white fill-white" />
             </div>
             <span className="text-xs font-bold tracking-wide">AI Integrated</span>
        </div>

         {/* 6. Calendar FAB (Bottom Right Corner) */}
         <div className="absolute -bottom-4 -right-2 md:-right-6 w-14 h-14 bg-white rounded-2xl shadow-lg flex items-center justify-center z-30 border border-gray-50 ring-1 ring-black/5 hover:scale-110 transition-transform duration-300 cursor-pointer">
             <div className="relative">
                <Calendar size={24} className="text-brand-orange" />
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-brand-orange rounded-full border-2 border-white"></div>
             </div>
         </div>

      </div>
    </div>
  );
};

export default HeroRight;