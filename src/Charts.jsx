import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar, Line, Pie } from 'react-chartjs-2';
import { useChartData } from './ChartData';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

export function MostCommonBarChart() {
  const { topCommonWordsBarData, options } = useChartData();
  const chartOptions = {
    ...options,
    plugins: {
      ...options.plugins,
      title: {
        ...options.plugins.title,
        text: 'Top 10 Most Common Words'
      }
    }
  };
  return <Pie data={topCommonWordsBarData} options={chartOptions} />;
}

export function LeastCommonBarChart() {
  const { leastCommonWordsBarData, options } = useChartData();
  const chartOptions = {
    ...options,
    plugins: {
      ...options.plugins,
      title: {
        ...options.plugins.title,
        text: 'Top 10 Least Common Words'
      }
    }
  };
  return <Pie data={leastCommonWordsBarData} options={chartOptions} />;
}

export function EmojiBarChart() {
  const { emojiBarData, options } = useChartData();
  const chartOptions = {
    ...options,
    plugins: {
      ...options.plugins,
      title: {
        ...options.plugins.title,
        text: 'Emoji Usage'
      }
    }
  };
  return <Bar data={emojiBarData} options={chartOptions} />;
}

export function EmojiPieChart() {
  const { emojiBarData, options } = useChartData();
  const chartOptions = {
    ...options,
    plugins: {
      ...options.plugins,
      title: {
        ...options.plugins.title,
        text: 'Emoji Usage'
      }
    }
  };
  return <Pie data={emojiBarData} options={chartOptions} />;
}


export function MonthBarChart() {
  const { monthLineData, options } = useChartData();
  const chartOptions = {
    ...options,
    plugins: {
      ...options.plugins,
      title: {
        ...options.plugins.title,
        text: 'Words per Month'
      }
    }
  };
  return <Bar data={monthLineData} options={chartOptions} />;
}

export function MonthMessageLineChart() {
  const { monthMessageLineData, options } = useChartData();
  const chartOptions = {
    ...options,
    plugins: {
      ...options.plugins,
      title: {
        ...options.plugins.title,
        text: 'Words per Month'
      }
    }
  };
  return <Line data={monthMessageLineData} options={chartOptions} />;
}

export function MessagePie() {
  const { messagePieData, options } = useChartData();
  const chartOptions = {
    ...options,
    plugins: {
      ...options.plugins,
      title: {
        ...options.plugins.title,
        text: 'Message Percentage Distribution'
      }
    }
  };
  return <Pie data={messagePieData} options={chartOptions} />;
}