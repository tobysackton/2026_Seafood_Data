import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend, ReferenceLine, ComposedChart } from 'recharts';

const data = [
  { year: '2016-17', gulfPct: 40.4, differential: 0.11, nlPrice: 7.17, gulfPrice: 7.28 },
  { year: '2017-18', gulfPct: 55.4, differential: 0.10, nlPrice: 7.92, gulfPrice: 8.02 },
  { year: '2018-19', gulfPct: 43.4, differential: 0.06, nlPrice: 8.73, gulfPrice: 8.78 },
  { year: '2019-20', gulfPct: 53.7, differential: 0.10, nlPrice: 8.71, gulfPrice: 8.82 },
  { year: '2020-21', gulfPct: 51.6, differential: 0.09, nlPrice: 9.14, gulfPrice: 9.24 },
  { year: '2021-22', gulfPct: 38.7, differential: 0.09, nlPrice: 15.98, gulfPrice: 16.08 },
  { year: '2022-23', gulfPct: 39.0, differential: 0.10, nlPrice: 8.05, gulfPrice: 8.15 },
  { year: '2023-24', gulfPct: 39.0, differential: 0.27, nlPrice: 5.38, gulfPrice: 5.65 },
  { year: '2024-25', gulfPct: 30.5, differential: 0.36, nlPrice: 7.13, gulfPrice: 7.50 },
  { year: '2025-26', gulfPct: 22.1, differential: 0.70, nlPrice: 9.06, gulfPrice: 9.76 },
];

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-3 border border-gray-300 rounded shadow-lg">
        <p className="font-semibold text-gray-800 mb-1">{label}</p>
        <p className="text-blue-600 text-sm">Gulf Share: {payload[0]?.value?.toFixed(1)}%</p>
        <p className="text-red-600 text-sm">Differential: ${payload[1]?.value?.toFixed(2)}/lb</p>
      </div>
    );
  }
  return null;
};

export default function SupplyDifferentialChart() {
  return (
    <div className="w-full max-w-4xl mx-auto p-6 bg-white">
      <h2 className="text-xl font-bold text-gray-800 mb-1 text-center">
        Gulf Supply Share vs. Price Differential (2016-2025)
      </h2>
      <p className="text-sm text-gray-600 mb-6 text-center">
        As Gulf's share of Canadian production declined from 55% to 22%, the price premium expanded tenfold
      </p>

      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <ComposedChart data={data} margin={{ top: 20, right: 60, left: 20, bottom: 20 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
            <XAxis
              dataKey="year"
              tick={{ fontSize: 11 }}
              angle={-45}
              textAnchor="end"
              height={60}
            />
            <YAxis
              yAxisId="left"
              domain={[15, 60]}
              tick={{ fontSize: 12 }}
              tickFormatter={(value) => `${value}%`}
              label={{ value: 'Gulf Share (%)', angle: -90, position: 'insideLeft', style: { textAnchor: 'middle', fill: '#2563eb', fontSize: 12 } }}
            />
            <YAxis
              yAxisId="right"
              orientation="right"
              domain={[0, 0.8]}
              tick={{ fontSize: 12 }}
              tickFormatter={(value) => `$${value.toFixed(2)}`}
              label={{ value: 'Differential ($/lb)', angle: 90, position: 'insideRight', style: { textAnchor: 'middle', fill: '#dc2626', fontSize: 12 } }}
            />
            <Tooltip content={<CustomTooltip />} />
            <Legend verticalAlign="top" height={36} />

            <ReferenceLine
              yAxisId="left"
              y={30}
              stroke="#9ca3af"
              strokeDasharray="5 5"
              label={{ value: '30% threshold', position: 'insideBottomLeft', fill: '#6b7280', fontSize: 10 }}
            />

            <Line
              yAxisId="left"
              type="monotone"
              dataKey="gulfPct"
              stroke="#2563eb"
              strokeWidth={2.5}
              dot={{ fill: '#2563eb', strokeWidth: 2, r: 5 }}
              name="Gulf Share (%)"
            />
            <Line
              yAxisId="right"
              type="monotone"
              dataKey="differential"
              stroke="#dc2626"
              strokeWidth={2.5}
              dot={{ fill: '#dc2626', strokeWidth: 2, r: 5 }}
              name="Price Differential ($/lb)"
            />
          </ComposedChart>
        </ResponsiveContainer>
      </div>

      <div className="mt-6 grid grid-cols-3 gap-4 text-center">
        <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
          <p className="text-2xl font-bold text-blue-700">-33 pts</p>
          <p className="text-xs text-gray-600 mt-1">Gulf share decline<br/>(55% → 22%)</p>
        </div>
        <div className="bg-red-50 p-4 rounded-lg border border-red-100">
          <p className="text-2xl font-bold text-red-700">+$0.60</p>
          <p className="text-xs text-gray-600 mt-1">Differential increase<br/>($0.10 → $0.70)</p>
        </div>
        <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
          <p className="text-2xl font-bold text-gray-700">r = -0.80</p>
          <p className="text-xs text-gray-600 mt-1">Correlation<br/>(p = 0.006)</p>
        </div>
      </div>

      <p className="text-xs text-gray-500 mt-4 text-center italic">
        Source: DFO Quota Reports, Urner Barry wholesale quotations (5-8 oz sections)
      </p>
    </div>
  );
}