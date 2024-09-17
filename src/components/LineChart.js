import React from 'react';
import { LineChart as RechartsLineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { truncateText, formatTooltip, calculateDomain, generateColors } from '../utils/chartUtils';

// eslint-disable-next-line react/prop-types
const LineChart = ({ data, selectedMetric }) => {
  const colors = generateColors(2);
  const yDomain = calculateDomain(data, 'avg_value');

  return (
    <ResponsiveContainer width="100%" height={400}>
      <RechartsLineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis 
          dataKey="llm_model" 
          angle={-45} 
          textAnchor="end" 
          interval={0} 
          height={100}
          tickFormatter={(value) => truncateText(value, 15)}
        />
        <YAxis domain={yDomain} />
        <Tooltip 
          formatter={(value, name) => [formatTooltip(value, selectedMetric), name]}
        />
        <Legend />
        <Line type="monotone" dataKey="avg_value" stroke={colors[0]} name="Average Value" />
        <Line type="monotone" dataKey="std_dev" stroke={colors[1]} name="Standard Deviation" />
      </RechartsLineChart>
    </ResponsiveContainer>
  );
};

export default LineChart;