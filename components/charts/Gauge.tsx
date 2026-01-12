
import React from 'react';
import { RadialBarChart, RadialBar, ResponsiveContainer, PolarAngleAxis } from 'recharts';

interface GaugeProps {
    percentage: number;
}

const Gauge: React.FC<GaugeProps> = ({ percentage }) => {
    const color = percentage > 50 ? '#22c55e' : '#ef4444';
    const data = [{ name: 'Signal', value: percentage }];

    return (
        <div style={{ width: '100%', height: 200, position: 'relative' }}>
            <ResponsiveContainer>
                <RadialBarChart
                    innerRadius="70%"
                    outerRadius="90%"
                    data={data}
                    startAngle={180}
                    endAngle={0}
                    barSize={20}
                >
                    <PolarAngleAxis
                        type="number"
                        domain={[0, 100]}
                        angleAxisId={0}
                        tick={false}
                    />
                    <RadialBar
                        background={{ fill: '#334155' }}
                        dataKey="value"
                        cornerRadius={10}
                        fill={color}
                    />
                </RadialBarChart>
            </ResponsiveContainer>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
                <p className={`text-4xl font-bold ${percentage > 50 ? 'text-brand-green' : 'text-brand-red'}`}>
                    {percentage}%
                </p>
                <p className="text-sm text-gray-400">{percentage > 50 ? 'CALL' : 'PUT'} Signal</p>
            </div>
        </div>
    );
};

export default Gauge;
