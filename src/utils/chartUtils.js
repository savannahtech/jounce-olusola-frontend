// src/utils/chartUtils.js

/**
 * Generates an array of colors for use in charts
 * @param {number} count - The number of colors to generate
 * @returns {string[]} An array of hex color codes
 */
export const generateColors = (count) => {
    const colors = [];
    for (let i = 0; i < count; i++) {
      const hue = (i * 137.5) % 360; // Use golden angle approximation
      colors.push(`hsl(${hue}, 70%, 50%)`);
    }
    return colors;
  };
  
  /**
   * Formats a number to a specified number of decimal places
   * @param {number} value - The number to format
   * @param {number} decimalPlaces - The number of decimal places to round to
   * @returns {string} The formatted number as a string
   */
  export const formatNumber = (value, decimalPlaces = 2) => {
    return Number(value).toFixed(decimalPlaces);
  };
  
  /**
   * Calculates the domain for a chart axis based on the data
   * @param {Object[]} data - The chart data
   * @param {string} key - The key to use for calculation
   * @returns {[number, number]} An array with the min and max values
   */
  export const calculateDomain = (data, key) => {
    const values = data.map(item => item[key]);
    const min = Math.min(...values);
    const max = Math.max(...values);
    const padding = (max - min) * 0.1; // Add 10% padding
    return [min - padding, max + padding];
  };
  
  /**
   * Truncates long text for better display in charts
   * @param {string} text - The text to truncate
   * @param {number} maxLength - The maximum length before truncation
   * @returns {string} The truncated text
   */
  export const truncateText = (text, maxLength = 20) => {
    if (text.length <= maxLength) return text;
    return text.slice(0, maxLength - 3) + '...';
  };
  
  /**
   * Sorts data for consistent chart rendering
   * @param {Object[]} data - The data to sort
   * @param {string} key - The key to sort by
   * @param {boolean} ascending - Whether to sort in ascending order
   * @returns {Object[]} The sorted data
   */
  export const sortData = (data, key, ascending = true) => {
    return [...data].sort((a, b) => {
      if (ascending) {
        return a[key] - b[key];
      } else {
        return b[key] - a[key];
      }
    });
  };
  
  /**
   * Formats a value for tooltip display
   * @param {number} value - The value to format
   * @param {string} metric - The metric name
   * @returns {string} The formatted tooltip text
   */
  export const formatTooltip = (value, metric) => {
    let formattedValue = formatNumber(value);
    switch (metric.toLowerCase()) {
      case 'tps':
      case 'rps':
        return `${formattedValue} per second`;
      case 'ttft':
      case 'e2e_latency':
        return `${formattedValue} ms`;
      default:
        return formattedValue;
    }
  };