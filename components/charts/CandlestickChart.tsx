import React, { useMemo, useEffect, useState } from 'react';
import { ResponsiveContainer, ComposedChart, XAxis, YAxis, Tooltip, CartesianGrid, Bar } from 'recharts';

// Recharts doesn't have a native Candlestick, so we simulate it with a custom Bar shape.
// For a real app, 'lightweight-charts' would be better. This is a visual placeholder.

interface ChartData {
    time: number;
    open: number;
    high: number;
    low: number;
    close: number;
}

const generateMockData = (numPoints: number): ChartData[] => {
    let lastClose = 100;
    return Array.from({ length: numPoints }, (_, i) => {
        const open = lastClose + (Math.random() - 0.5) * 2;
        const close = open + (Math.random() - 0.5) * 5;
        const high = Math.max(open, close) + Math.random() * 2;
        const low = Math.min(open, close) - Math.random() * 2;
        lastClose = close;
        return { time: Date.now() / 1000 - (numPoints - i) * 60, open, high, low, close };
    });
};


const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
        const data = payload[0].payload;
        return (
            <div className="p-2 bg-dark-accent text-white rounded-md shadow-lg text-sm">
                <p>Time: {new Date(data.time * 1000).toLocaleTimeString()}</p>
                <p>Open: <span className="font-bold">${data.open.toFixed(2)}</span></p>
                <p>High: <span className="font-bold">${data.high.toFixed(2)}</span></p>
                <p>Low: <span className="font-bold">${data.low.toFixed(2)}</span></p>
                <p>Close: <span className="font-bold">${data.close.toFixed(2)}</span></p>
            </div>
        );
    }
    return null;
};

// This is a custom shape to render the candle body and wick
const CandleShape = (props: any) => {
    const { x, y, width, height, payload } = props;
    if (!payload || height <= 0) return null;

    const { open, high, low, close } = payload;
    
    const isRising = close >= open;
    const color = isRising ? '#22c55e' : '#ef4444';
    
    // y corresponds to high, y+height corresponds to low
    // handle case where high equals low to avoid division by zero
    const pixelPerValue = high - low === 0 ? 0 : height / (high - low);
    
    const bodyHeight = Math.abs(open - close) * pixelPerValue;
    
    let bodyY;
    if (isRising) {
        bodyY = y + ((high - close) * pixelPerValue);
    } else {
        bodyY = y + ((high - open) * pixelPerValue);
    }

    return (
        <g>
            <line x1={x + width / 2} y1={y} x2={x + width / 2} y2={y + height} stroke={color} strokeWidth={1} />
            <rect x={x} y={bodyY} width={width} height={bodyHeight} fill={color} />
        </g>
    );
};

const CandlestickChart: React.FC<{ asset: string; timeframe: string }> = ({ asset, timeframe }) => {
    const [data, setData] = useState<ChartData[]>([]);

    useEffect(() => {
        setData(generateMockData(50));
        const interval = setInterval(() => {
            setData(prevData => {
                const newData = [...prevData.slice(1)];
                const lastPoint = newData[newData.length - 1];
                const open = lastPoint.close;
                const close = open + (Math.random() - 0.5) * 5;
                const high = Math.max(open, close) + Math.random() * 2;
                const low = Math.min(open, close) - Math.random() * 2;
                newData.push({ time: Date.now() / 1000, open, high, low, close });
                return newData;
            });
        }, 2000); // Simulate WebSocket updates

        return () => clearInterval(interval);
    }, [asset, timeframe]);

    const domain = useMemo(() => {
        if (!data.length) return [0, 0];
        const lows = data.map(d => d.low);
        const highs = data.map(d => d.high);
        return [Math.min(...lows) * 0.99, Math.max(...highs) * 1.01];
    }, [data]);


    return (
        <ResponsiveContainer width="100%" height="100%">
            <ComposedChart data={data} margin={{ top: 5, right: 20, left: -20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                <XAxis
                    dataKey="time"
                    tickFormatter={(unixTime) => new Date(unixTime * 1000).toLocaleTimeString()}
                    stroke="#94a3b8"
                />
                <YAxis domain={domain} orientation="right" stroke="#94a3b8" />
                <Tooltip content={<CustomTooltip />} />
                <Bar dataKey={['low', 'high']} shape={<CandleShape />} isAnimationActive={false} />
            </ComposedChart>
        </ResponsiveContainer>
    );
};

export default CandlestickChart;