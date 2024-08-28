import { AreaChart, Area, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const CalendarStats = ({ waterDailyStats }) => {
  const data = waterDailyStats;

  return (
    <ResponsiveContainer width="100%" height={320}>
      <AreaChart data={data}>
        <defs>
          <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#87D28D" stopOpacity={1} />
            <stop offset="100%" stopColor="#F0EFF4" stopOpacity={1} />
          </linearGradient>
        </defs>

        {/* Заповнена область під лінією з градієнтом */}
        <Area 
          type="monotone" 
          dataKey="amount" 
          stroke="#87D28D" 
          fill="url(#colorUv)" 
          strokeWidth={4} 
          dot={{ r: 1, fill: '#ffffff' }} 
          activeDot={{ r: 6, stroke: '#87D28D', strokeWidth: 4, fill: '#ffffff' }}
        />

        {/* Сітка */}
        <CartesianGrid stroke="#e0e0e0" strokeDasharray="1 1" />

        {/* Вісь X */}
        <XAxis 
          dataKey="day" 
          tick={{ fontSize: 16, fill: "#323F47" }} 
          tickLine={false} 
          axisLine={false} 
        />

        {/* Вісь Y */}
        <YAxis 
          tick={{ fontSize: 16, fill: "#323F47" }} 
          tickLine={false} 
          axisLine={false} 
        />

        {/* Підказка (tooltip) */}
        <Tooltip 
          contentStyle={{ backgroundColor: "#ffffff", border: "1px solid #cccccc", borderRadius: "10px" }} 
          itemStyle={{ color: "#323F47" }} 
          cursor={{ stroke: '#323F47', strokeWidth: 1, strokeDasharray: '3 3' }} 
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default CalendarStats;
