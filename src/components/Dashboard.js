import React, { useState, useEffect } from 'react';
import { Card, CardHeader, CardContent } from './ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import MetricSelector from './MetricSelector';
import HistogramChart from './HistogramChart';
import LineChart from './LineChart';
import { fetchToken, fetchModels, fetchMetrics, fetchRankings } from '../services/api';
import { sortData } from '../utils/chartUtils';


const Dashboard = () => {
    const [token, setToken] = useState('');
    // eslint-disable-next-line no-unused-vars
    const [models, setModels] = useState([]); // Add this line
    const [metrics, setMetrics] = useState([]);
    const [selectedMetric, setSelectedMetric] = useState('');
    const [rankings, setRankings] = useState([]);
  
    useEffect(() => {
      const initializeData = async () => {
        const authToken = await fetchToken();
        setToken(authToken);
  
        if (authToken) {
          const [fetchedModels, fetchedMetrics] = await Promise.all([
            fetchModels(authToken),
            fetchMetrics(authToken)
          ]);
  
          setModels(fetchedModels); // Use setModels here
          setMetrics(fetchedMetrics);
          if (fetchedMetrics.length > 0) {
            setSelectedMetric(fetchedMetrics[0]);
          }
        }
      };
  
      initializeData();
    }, []);
  
    useEffect(() => {
      const getRankings = async () => {
        if (token && selectedMetric) {
          const fetchedRankings = await fetchRankings(token, selectedMetric);
          const sortedRankings = sortData(fetchedRankings, 'avg_value', false);
          setRankings(sortedRankings);
        }
      };
  
      getRankings();
    }, [token, selectedMetric]);
  
    return (
      <div className="p-4">
        <h1 className="text-2xl font-bold mb-4">LLM Metrics Dashboard</h1>
        
        <MetricSelector
          metrics={metrics}
          selectedMetric={selectedMetric}
          onSelectMetric={setSelectedMetric}
        />
  
        <Tabs defaultValue="histogram">
          <TabsList>
            <TabsTrigger value="histogram">Histogram</TabsTrigger>
            <TabsTrigger value="linechart">Line Chart</TabsTrigger>
          </TabsList>
  
          <TabsContent value="histogram">
            <Card>
              <CardHeader>{selectedMetric} Rankings - Histogram</CardHeader>
              <CardContent>
                <HistogramChart data={rankings} selectedMetric={selectedMetric} />
              </CardContent>
            </Card>
          </TabsContent>
  
          <TabsContent value="linechart">
            <Card>
              <CardHeader>{selectedMetric} Rankings - Line Chart</CardHeader>
              <CardContent>
                <LineChart data={rankings} selectedMetric={selectedMetric} />
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    );
  };

export default Dashboard;