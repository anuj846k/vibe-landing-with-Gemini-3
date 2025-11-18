import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import { Sparkles, TrendingUp, Calendar, Zap, Grid, Layers, Activity } from 'lucide-react';

const data = [
  { name: 'Group A', value: 80 },
  { name: 'Group B', value: 20 },
];
const COLORS = ['#F0583F', '#FEE2E2'];

const HeroRight: React.FC = () => {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      
      {/* Main Shape Container */}
      <div className="relative w-[300px] md:w-[380px] lg:w-[420px] aspect-[4/5] mx-auto">
        
        {/* The Background Blob Shape */}
        <div className="absolute inset-0 bg-[#fdf3f1] rounded-[3rem] rounded-br-[5rem] rotate-[-2deg] scale-105 z-0"></div>
        
        {/* The Main Image Masked */}
        <div className="absolute inset-2 bg-white rounded-[2.5rem] overflow-hidden shadow-xl z-10">
            <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80" 
                alt="Marketer working" 
                className="w-full h-full object-cover opacity-90 hover:scale-105 transition-transform duration-700"
            />
            {/* Overlay Tooltip */}
            <div className="absolute top-[40%] left-1/2 -translate-x-1/2 bg-white/90 backdrop-blur-sm py-2 px-4 rounded-full shadow-lg flex items-center gap-2 border border-gray-100 floating-card">
                <Sparkles className="w-4 h-4 text-purple-500 fill-purple-100" />
                <span className="text-xs font-semibold text-gray-800 whitespace-nowrap">Creating Marketing Models...</span>
            </div>
        </div>

        {/* --- Floating Elements --- */}

        {/* 1. Blog Traffic Card (Left) */}
        <div className="absolute top-[30%] -left-12 md:-left-24 lg:-left-28 bg-white p-4 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] w-40 md:w-48 z-20 floating-card-delayed border border-gray-50">
            <div className="flex justify-between items-start mb-2">
                <span className="text-xs text-gray-500 font-medium">Blog Traffic</span>
                <div className="flex items-center text-green-500 text-[10px] font-bold bg-green-50 px-1.5 py-0.5 rounded-md">
                    <TrendingUp size={10} className="mr-1" /> +16.5%
                </div>
            </div>
            <div className="text-2xl md:text-3xl font-bold text-gray-900 mb-1">125,536</div>
            <div className="text-[10px] text-gray-400">Since last week</div>
        </div>

        {/* 2. SEO Analytics Donut (Bottom Center-Left) */}
        <div className="absolute -bottom-12 left-0 md:-left-8 bg-white p-4 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] w-40 h-44 z-30 floating-card border border-gray-50 flex flex-col items-center">
             <div className="w-full flex justify-between items-center mb-2">
                <span className="text-xs text-gray-500 font-medium">SEO Analytics</span>
                <span className="text-[10px] text-green-500 font-bold">+20%</span>
             </div>
             <div className="w-24 h-24 relative mt-1">
                <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                    <Pie
                        data={data}
                        innerRadius={30}
                        outerRadius={40}
                        paddingAngle={0}
                        dataKey="value"
                        startAngle={90}
                        endAngle={-270}
                        stroke="none"
                    >
                        {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                    </Pie>
                    </PieChart>
                </ResponsiveContainer>
                <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-lg font-bold text-gray-800">80%</span>
                </div>
             </div>
        </div>

        {/* 3. Sidebar Tool Strip (Right) */}
        <div className="absolute top-8 -right-8 md:-right-12 bg-white rounded-2xl shadow-xl p-3 flex flex-col gap-5 z-20 border border-gray-50">
            <div className="p-2 bg-orange-50 rounded-lg text-brand-orange"><Grid size={20} /></div>
            <div className="p-2 text-gray-400 hover:text-brand-orange transition-colors"><Activity size={20} /></div>
            <div className="p-2 text-gray-400 hover:text-brand-orange transition-colors"><Layers size={20} /></div>
            <div className="p-2 text-gray-400 hover:text-brand-orange transition-colors"><Zap size={20} /></div>
        </div>

        {/* 4. AI Integrated Badge (Right Middle) */}
        <div className="absolute top-[60%] -right-16 md:-right-20 bg-[#d66060] text-white py-2.5 px-4 rounded-xl shadow-lg z-40 flex items-center gap-2 rotate-[-4deg] transition-transform hover:rotate-0 cursor-pointer">
             <Sparkles size={14} className="text-yellow-200 fill-yellow-200" />
             <span className="text-xs font-bold tracking-wide">AI Integrated</span>
             {/* Cursor Graphic */}
             <svg className="absolute -bottom-5 -right-4 w-6 h-6 drop-shadow-md" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5.5 3.5L10.5 18.5L13.5 11.5L19.5 9.5L5.5 3.5Z" fill="#F0583F" stroke="white" strokeWidth="2"/>
             </svg>
        </div>

         {/* 5. Calendar Icon Circle (Bottom Right) */}
         <div className="absolute bottom-8 -right-6 md:-right-10 w-16 h-16 bg-white rounded-full shadow-lg flex items-center justify-center z-20 border-4 border-[#F0583F]/10">
            <div className="bg-[#F0583F] w-10 h-10 rounded-full flex items-center justify-center text-white">
                <Calendar size={20} />
            </div>
             <div className="absolute -top-1 -right-1 w-4 h-4 bg-white rounded-full flex items-center justify-center">
                <span className="text-[10px] font-bold text-brand-orange">+</span>
             </div>
         </div>
      </div>
    </div>
  );
};

export default HeroRight;