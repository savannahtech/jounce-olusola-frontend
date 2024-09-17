import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { truncateText, formatTooltip, calculateDomain, generateColors } from '../utils/chartUtils';

// eslint-disable-next-line react/prop-types
const HistogramChart = ({ data, selectedMetric }) => {
  const colors = generateColors(2);
  const yDomain = calculateDomain(data, 'avg_value');

  return (
    <ResponsiveContainer width="100%" height={400}>
      <BarChart data={data}>
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
        <Bar dataKey="avg_value" fill={colors[0]} name="Average Value" />
        <Bar dataKey="std_dev" fill={colors[1]} name="Standard Deviation" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default HistogramChart;