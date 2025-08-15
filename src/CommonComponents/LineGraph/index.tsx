import { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const LearningProgressChart = ({ currentScore, predictedScore }: any) => {
  const chartRef = useRef<HTMLCanvasElement>(null);
  const chartInstance = useRef<Chart | null>(null);
  
  const targetScore = 100;
  
  useEffect(() => {
    const canvas = chartRef.current;
    if (canvas) {
      const ctx = canvas.getContext('2d');
      
      if (!ctx) return;
      
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
      
      chartInstance.current = new Chart(ctx, {
        type: 'line',
        data: {
          labels: ['Start', 'Current Score', 'Predicted', 'Target'],
          datasets: [{
            label: 'Learning Progress',
            data: [0, currentScore, predictedScore, targetScore],
            borderColor: 'rgb(59, 130, 246)',
            backgroundColor: 'rgba(59, 130, 246, 0.1)',
            tension: 0.4,
            pointBackgroundColor: ['#6B7280', '#EF4444', '#F59E0B', '#10B981'],
            pointBorderColor: ['#6B7280', '#EF4444', '#F59E0B', '#10B981'],
            pointRadius: 6,
            pointHoverRadius: 8,
            fill: true
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              display: false
            },
            tooltip: {
              callbacks: {
                label: function(context) {
                  return `Score: ${context.parsed.y}`;
                }
              }
            }
          },
          scales: {
            y: {
              beginAtZero: true,
              max: Math.max(targetScore, predictedScore, currentScore) + 10,
              ticks: {
                stepSize: 10,
                color: '#6B7280'
              },
              grid: {
                color: 'rgba(107, 114, 128, 0.2)'
              }
            },
            x: {
              ticks: {
                color: '#6B7280',
                font: {
                  size: 10
                }
              },
              grid: {
                display: false
              }
            }
          },
          elements: {
            line: {
              borderWidth: 3
            }
          }
        }
      });
    }
    
    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, [currentScore, predictedScore]);


  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="text-center mb-6">
        <h3 className="font-semibold text-gray-800 mb-2">Student Personalised Learning Pathway</h3>
      </div>
      
      <div className="relative">
        <div className="bg-gray-50 rounded-lg p-4 mb-4" style={{height: '300px'}}>
          <canvas ref={chartRef} id="learningChart"></canvas>
        </div>
        
        <div className="flex justify-between items-center mb-4 px-4">
          <div className="text-center">
            <div className="text-sm text-gray-600">Target</div>
            <div className="text-xl font-bold text-green-600">{targetScore}</div>
          </div>
          <div className="text-center">
            <div className="text-sm text-gray-600">Predicted</div>
            <div className="text-xl font-bold text-yellow-600">{predictedScore}</div>
          </div>
          <div className="text-center">
            <div className="text-sm text-gray-600">Current</div>
            <div className="text-xl font-bold text-red-500">{currentScore}</div>
          </div>
        </div>
        
        <div className="text-center">
          <button className="bg-blue-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-600 transition-colors w-full">
            How to get this level
          </button>
        </div>
      </div>
    </div>
  );
};
export default LearningProgressChart