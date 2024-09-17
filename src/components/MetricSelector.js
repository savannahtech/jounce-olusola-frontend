/* eslint-disable react/prop-types */
import React from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';

// eslint-disable-next-line react/prop-types
const MetricSelector = ({ metrics, selectedMetric, onSelectMetric }) => {
  return (
    <div className="mb-4">
      <Select onValueChange={onSelectMetric} value={selectedMetric}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Select metric" />
        </SelectTrigger>
        <SelectContent>
          {metrics.map((metric) => (
            <SelectItem key={metric} value={metric}>
              {metric}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default MetricSelector;