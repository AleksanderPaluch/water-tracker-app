import { useState } from 'react';
import { AreaChart, Area, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import css from "./CalendarStats.module.css"

const CalendarStats = ({ waterDailyStats, date }) => {
  const monthData = waterDailyStats;
  const chosenDay = date.day;

  const [isWeeek, setIsWeeek] = useState(true);

  // Функція для отримання тижневих даних на основі вибраного дня
  const getWeekData = (data, selectedDay) => {
    const selectedDayIndex = data.findIndex(item => item.day === selectedDay);
    if (selectedDayIndex === -1) return [];
    
    const start = Math.max(0, selectedDayIndex - 6);
    const weekData = data.slice(start, selectedDayIndex + 1);

    return weekData;
  };

  const weekData = getWeekData(monthData, chosenDay);

  const toggleTime = () => {
    setIsWeeek(!isWeeek);
  };

  return (
 
    <div className={css.statBox}>
    <button className={css.toggleBtn} onClick={toggleTime}> 
        {isWeeek ? 'Show month' : 'Show week'}
      </button>

      <ResponsiveContainer width="100%" height={320}>
        <AreaChart data={isWeeek ? weekData : monthData}>
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
    </div>
      
  
  );
};

export default CalendarStats;
