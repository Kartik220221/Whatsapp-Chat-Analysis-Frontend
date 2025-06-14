import React from 'react';
import { useDataStore } from './DataStore';

export const useChartData = () => {
  const messagePercentage = useDataStore((state) => state.messagePercentage || {});
  const topWordsData = useDataStore((state) => state.topWordsData || {}); // This is the object containing least_common and most_common
  const monthData = useDataStore((state) => state.monthData || {});
  const emojiData = useDataStore((state) => state.emojiData || {});
  const monthMessageData = useDataStore((state) => state.monthMessageData || {});

  const topCommonWordsBarData = React.useMemo(() => {
    // Corrected destructuring: most_common is a direct property of topWordsData
    const { most_common } = topWordsData || {};
    const { most_common_word: labels = [], most_common_count: data = [] } = most_common || {};
    const colors = [
      '#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF', '#FF9F40', '#E7E9ED', '#8C564B', '#D62728', '#1F77B4',
      '#2CA02C', '#FF7F0E', '#9467BD', '#8C8C8C', '#BCBD22', '#17BECF', '#AEC7E8', '#FFBB78', '#98DF8A', '#C5B0D5'
    ];

    return {
      labels: labels,
      datasets: [{
        label: 'Most Common Words',
        data: data,
        backgroundColor: colors,
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 0,
      }]
    };
  }, [topWordsData]);

  const leastCommonWordsBarData = React.useMemo(() => {
    // Corrected destructuring: least_common is a direct property of topWordsData
    const { least_common } = topWordsData || {};
    const { least_common_word: labels = [], least_common_count: data = [] } = least_common || {};
    const colors = [
      '#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF', '#FF9F40', '#E7E9ED', '#8C564B', '#D62728', '#1F77B4',
      '#2CA02C', '#FF7F0E', '#9467BD', '#8C8C8C', '#BCBD22', '#17BECF', '#AEC7E8', '#FFBB78', '#98DF8A', '#C5B0D5'
    ];

    return {
      labels: labels,
      datasets: [{
        label: 'Least Common Words',
        data: data,
        backgroundColor: colors,
        
        borderWidth: 0,
      }]
    };
  }, [topWordsData]);

  const emojiBarData = React.useMemo(() => {
    const { emoji_counts } = emojiData || {}; // Assuming emojiData could be { emoji_counts: { ... } }
    const labels = Object.keys(emoji_counts || {});
    const data = Object.values(emoji_counts || {});

    const colors = [
      '#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF', '#FF9F40', '#E7E9ED', '#8C564B', '#D62728', '#1F77B4',
      '#2CA02C', '#FF7F0E', '#9467BD', '#8C8C8C', '#BCBD22', '#17BECF', '#AEC7E8', '#FFBB78', '#98DF8A', '#C5B0D5'
    ];

    return {
      labels: labels,
      datasets: [{
        label: 'Emoji Counts',
        data: data,
        backgroundColor: colors,
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1
      }]
    };
  }, [emojiData]);

  const monthLineData = React.useMemo(() => {
    const labels = Object.keys(monthData || {});
    const data = Object.values(monthData || {});
    const colors= [
      '#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF', '#FF9F40', '#E7E9ED', '#8C564B', '#D62728', '#1F77B4',
      '#2CA02C', '#FF7F0E', '#9467BD', '#8C8C8C', '#BCBD22', '#17BECF', '#AEC7E8', '#FFBB78', '#98DF8A', '#C5B0D5'
    ];
    return {
      labels: labels,
      datasets: [{
        label: 'Words per Month',
        data: data,
        backgroundColor:colors,
        
        borderWidth:0
      }]
    };
  }, [monthData]);

const monthMessageLineData = React.useMemo(() => {
    const labels = Object.keys(monthMessageData || {});
    const data = Object.values(monthMessageData || {});
    const colors= [
      '#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF', '#FF9F40', '#E7E9ED', '#8C564B', '#D62728', '#1F77B4',
      '#2CA02C', '#FF7F0E', '#9467BD', '#8C8C8C', '#BCBD22', '#17BECF', '#AEC7E8', '#FFBB78', '#98DF8A', '#C5B0D5'
    ];
    return {
      labels: labels,
      datasets: [{
        label: 'Message per Month',
        backgroundColor:colors,
        data: data,
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1
      }]
    };
  }, [monthMessageData]);

  const messagePieData = React.useMemo(() => {
    const labels = Object.keys(messagePercentage || {});
    const data = Object.values(messagePercentage || {});

    const colors = [
      '#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF', '#FF9F40', '#E7E9ED', '#8C564B', '#D62728', '#1F77B4',
      '#2CA02C', '#FF7F0E', '#9467BD', '#8C8C8C', '#BCBD22', '#17BECF', '#AEC7E8', '#FFBB78', '#98DF8A', '#C5B0D5'
    ];

    return {
      labels: labels,
      datasets: [{
        data: data,
        backgroundColor: colors
      }]
    };
  }, [messagePercentage]);

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top'
      },
      title: {
        display: true,
        text: ''
      }
    }
  };

  return {
    topCommonWordsBarData,
    leastCommonWordsBarData,
    emojiBarData,
    monthLineData,
    messagePieData,
    options,
    monthMessageLineData
  };
};