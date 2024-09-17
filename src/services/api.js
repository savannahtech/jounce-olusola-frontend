import axios from 'axios';
import qs from 'qs';

const API_BASE_URL = '/api'; 
//const API_BASE_URL = 'http://135.237.65.229:8080'

//const API_BASE_URL = '/api'

export const fetchToken = async () => {
    try {
      const response = await axios.post(`${API_BASE_URL}/token`, 
        qs.stringify({
          username: 'testuser1',
          password: 'testpassword1'
        }), 
        {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        }
      );
      console.log("response", response);
      return response.data.access_token;
    } catch (error) {
      console.error('Error fetching token:', error.response);
      return null;
    }
  };

export const fetchModels = async (token) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/models`, {
      headers: { Authorization: `Bearer ${token}` }
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching models:', error);
    return [];
  }
};

export const fetchMetrics = async (token) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/metrics`, {
      headers: { Authorization: `Bearer ${token}` }
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching metrics:', error);
    return [];
  }
};

export const fetchRankings = async (token, metric) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/ranking/${metric}`, {
      headers: { Authorization: `Bearer ${token}` }
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching rankings:', error);
    return [];
  }
};