import React, { useEffect, useState } from 'react';
import { Area, AreaChart, Bar, BarChart, CartesianGrid, ComposedChart, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';
import './Dashboard.css';

const Dashboard = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch('chartData.json')
            .then(res => res.json())
            .then(json => setData(json));
    }, []);
    return (
        <div className='md:mx-10 grid md:grid-cols-1 lg:grid-cols-2 md:gap-x-4 gap-y-7'>
            <div className='bar-chart'>
                <BarChart width={700} height={250} data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="investment" fill="#8884d8" />
                    <Bar dataKey="sell" fill="#fbc531" />
                    <Bar dataKey="revenue" fill="#82ca9d" />
                </BarChart>
            </div>
            <div className='composed-chart'>
                <ComposedChart width={700} height={250} data={data}>
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <CartesianGrid stroke="#f5f5f5" />
                    <Area type="monotone" dataKey="investment" fill="#8884d8" stroke="#8884d8" />
                    <Bar dataKey="sell" barSize={20} fill="#fbc531" />
                    <Line type="monotone" dataKey="revenue" stroke="#82ca9d" />
                </ComposedChart>
            </div>
            <div className='area-chart'>
                <AreaChart width={700} height={250} data={data}
                    margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                    <defs>
                        <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                            <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                        </linearGradient>
                        <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
                            <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
                        </linearGradient>
                    </defs>
                    <XAxis dataKey="month" />
                    <YAxis />
                    <CartesianGrid strokeDasharray="3 3" />
                    <Tooltip />
                    <Area type="monotone" dataKey="investment" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
                    <Area type="monotone" dataKey="sell" stroke="#fbc531" fillOpacity={1} fill="url(#colorPv)" />
                    <Area type="monotone" dataKey="revenue" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" />
                </AreaChart>
            </div>
            <div className='line-chart'>
                <LineChart width={700} height={250} data={data}
                    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="investment" stroke="#8884d8" />
                    <Line type="monotone" dataKey="sell" stroke="#fbc531" />
                    <Line type="monotone" dataKey="revenue" stroke="#82ca9d" />
                </LineChart>
            </div>
        </div>
    );
};

export default Dashboard;