import React from 'react';
import { ComposedChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Legend, ReferenceLine, Label, LabelList } from 'recharts';

const data = [
  { year: '2016-17', gulfPct: 40.4, differential: 0.11 },
  { year: '2017-18', gulfPct: 55.4, differential: 0.10, labelGulf: '55%' },
  { year: '2018-19', gulfPct: 43.4, differential: 0.06 },
  { year: '2019-20', gulfPct: 53.7, differential: 0.10 },
  { year: '2020-21', gulfPct: 51.6, differential: 0.09 },
  { year: '2021-22', gulfPct: 38.7, differential: 0.09 },
  { year: '2022-23', gulfPct: 39.0, differential: 0.10, labelDiff: '$0.10' },
  { year: '2023-24', gulfPct: 39.0, differential: 0.27 },
  { year: '2024-25', gulfPct: 30.5, differential: 0.36 },
  { year: '2025-26', gulfPct: 22.1, differential: 0.70, labelGulf: '22%', labelDiff: '$0.70' },
];

export default function SupplyDifferentialChartStatic() {
  return (
    <div className="w-full max-w-4xl mx-auto p-6 bg-white">
      <h2 className="text-xl font-bold text-gray-800 mb-1 text-center">
        Figure 1: Gulf Supply Share vs. Price Differential (2016-2025)
      </h2>
      <p className="text-sm text-gray-600 mb-4 text-center">
        As Gulf's share of Canadian production declined from 55% to 22%, the price premium expanded tenfold
      </p>

      <div className="h-72">
        <ResponsiveContainer width="100%" height="100%">
          <ComposedChart data={data} margin={{ top: 30, right: 60, left: 20, bottom: 20 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
            <XAxis
              dataKey="year"
              tick={{ fontSize: 10 }}
              angle={-45}
              textAnchor="end"
              height={55}
            />
            <YAxis
              yAxisId="left"
              domain={[15, 60]}
              tick={{ fontSize: 11 }}
              tickFormatter={(value) => `${value}%`}
            >
              <Label value="Gulf Share (%)" angle={-90} position="insideLeft" style={{ textAnchor: 'middle', fill: '#2563eb', fontSize: 11 }} />
            </YAxis>
            <YAxis
              yAxisId="right"
              orientation="right"
              domain={[0, 0.8]}
              tick={{ fontSize: 11 }}
              tickFormatter={(value) => `$${value.toFixed(2)}`}
            >
              <Label value="Differential ($/lb)" angle={90} position="insideRight" style={{ textAnchor: 'middle', fill: '#dc2626', fontSize: 11 }} />
            </YAxis>
            <Legend verticalAlign="top" height={30} />

            <ReferenceLine
              yAxisId="left"
              y={30}
              stroke="#9ca3af"
              strokeDasharray="5 5"
            />

            <Line
              yAxisId="left"
              type="monotone"
              dataKey="gulfPct"
              stroke="#2563eb"
              strokeWidth={2.5}
              dot={{ fill: '#2563eb', strokeWidth: 2, r: 4 }}
              name="Gulf Share (%)"
            >
              <LabelList
                dataKey="labelGulf"
                position="top"
                style={{ fill: '#2563eb', fontSize: 11, fontWeight: 'bold' }}
                offset={8}
              />
            </Line>
            <Line
              yAxisId="right"
              type="monotone"
              dataKey="differential"
              stroke="#dc2626"
              strokeWidth={2.5}
              dot={{ fill: '#dc2626', strokeWidth: 2, r: 4 }}
              name="Price Differential ($/lb)"
            >
              <LabelList
                dataKey="labelDiff"
                position="top"
                style={{ fill: '#dc2626', fontSize: 11, fontWeight: 'bold' }}
                offset={8}
              />
            </Line>
          </ComposedChart>
        </ResponsiveContainer>
      </div>

      {/* Data Table */}
      <div className="mt-4 overflow-x-auto">
        <table className="w-full text-xs border-collapse">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-300 px-2 py-1 text-left">Pack Year</th>
              <th className="border border-gray-300 px-2 py-1 text-right">Gulf Quota (t)</th>
              <th className="border border-gray-300 px-2 py-1 text-right">NL Quota (t)</th>
              <th className="border border-gray-300 px-2 py-1 text-right text-blue-700">Gulf Share</th>
              <th className="border border-gray-300 px-2 py-1 text-right text-red-700">Differential</th>
            </tr>
          </thead>
          <tbody>
            <tr><td className="border border-gray-300 px-2 py-1">2016-17</td><td className="border border-gray-300 px-2 py-1 text-right">30,894</td><td className="border border-gray-300 px-2 py-1 text-right">45,655</td><td className="border border-gray-300 px-2 py-1 text-right text-blue-700">40.4%</td><td className="border border-gray-300 px-2 py-1 text-right text-red-700">$0.11</td></tr>
            <tr className="bg-gray-50"><td className="border border-gray-300 px-2 py-1">2017-18</td><td className="border border-gray-300 px-2 py-1 text-right">43,475</td><td className="border border-gray-300 px-2 py-1 text-right">35,000</td><td className="border border-gray-300 px-2 py-1 text-right text-blue-700 font-semibold">55.4%</td><td className="border border-gray-300 px-2 py-1 text-right text-red-700">$0.10</td></tr>
            <tr><td className="border border-gray-300 px-2 py-1">2018-19</td><td className="border border-gray-300 px-2 py-1 text-right">22,127</td><td className="border border-gray-300 px-2 py-1 text-right">28,880</td><td className="border border-gray-300 px-2 py-1 text-right text-blue-700">43.4%</td><td className="border border-gray-300 px-2 py-1 text-right text-red-700">$0.06</td></tr>
            <tr className="bg-gray-50"><td className="border border-gray-300 px-2 py-1">2019-20</td><td className="border border-gray-300 px-2 py-1 text-right">30,803</td><td className="border border-gray-300 px-2 py-1 text-right">26,531</td><td className="border border-gray-300 px-2 py-1 text-right text-blue-700">53.7%</td><td className="border border-gray-300 px-2 py-1 text-right text-red-700">$0.10</td></tr>
            <tr><td className="border border-gray-300 px-2 py-1">2020-21</td><td className="border border-gray-300 px-2 py-1 text-right">31,152</td><td className="border border-gray-300 px-2 py-1 text-right">29,185</td><td className="border border-gray-300 px-2 py-1 text-right text-blue-700">51.6%</td><td className="border border-gray-300 px-2 py-1 text-right text-red-700">$0.09</td></tr>
            <tr className="bg-gray-50"><td className="border border-gray-300 px-2 py-1">2021-22</td><td className="border border-gray-300 px-2 py-1 text-right">23,837</td><td className="border border-gray-300 px-2 py-1 text-right">37,790</td><td className="border border-gray-300 px-2 py-1 text-right text-blue-700">38.7%</td><td className="border border-gray-300 px-2 py-1 text-right text-red-700">$0.09</td></tr>
            <tr><td className="border border-gray-300 px-2 py-1">2022-23</td><td className="border border-gray-300 px-2 py-1 text-right">31,939</td><td className="border border-gray-300 px-2 py-1 text-right">50,014</td><td className="border border-gray-300 px-2 py-1 text-right text-blue-700">39.0%</td><td className="border border-gray-300 px-2 py-1 text-right text-red-700">$0.10</td></tr>
            <tr className="bg-gray-50"><td className="border border-gray-300 px-2 py-1">2023-24</td><td className="border border-gray-300 px-2 py-1 text-right">34,769</td><td className="border border-gray-300 px-2 py-1 text-right">54,305</td><td className="border border-gray-300 px-2 py-1 text-right text-blue-700">39.0%</td><td className="border border-gray-300 px-2 py-1 text-right text-red-700">$0.27</td></tr>
            <tr><td className="border border-gray-300 px-2 py-1">2024-25</td><td className="border border-gray-300 px-2 py-1 text-right">25,124</td><td className="border border-gray-300 px-2 py-1 text-right">57,144</td><td className="border border-gray-300 px-2 py-1 text-right text-blue-700">30.5%</td><td className="border border-gray-300 px-2 py-1 text-right text-red-700">$0.36</td></tr>
            <tr className="bg-yellow-50"><td className="border border-gray-300 px-2 py-1 font-semibold">2025-26</td><td className="border border-gray-300 px-2 py-1 text-right">17,704</td><td className="border border-gray-300 px-2 py-1 text-right">62,463</td><td className="border border-gray-300 px-2 py-1 text-right text-blue-700 font-semibold">22.1%</td><td className="border border-gray-300 px-2 py-1 text-right text-red-700 font-semibold">$0.70</td></tr>
          </tbody>
        </table>
      </div>

      <div className="mt-4 p-3 bg-gray-50 rounded text-xs text-gray-700">
        <p><strong>Key finding:</strong> Correlation r = -0.80 (p = 0.006). Each 1 percentage point decline in Gulf share increases the differential by ~$0.015/lb. The relationship is non-linear—premiums accelerate below 30% Gulf share.</p>
      </div>

      <p className="text-xs text-gray-500 mt-3 italic">
        Source: DFO Quota Reports, Urner Barry wholesale quotations (5-8 oz sections)
      </p>
    </div>
  );
}