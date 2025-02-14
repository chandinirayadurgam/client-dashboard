import React, { useEffect } from "react";
import { useClientStore } from "../store";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const Dashboard: React.FC = () => {
  const { clients, fetchClients } = useClientStore();

  useEffect(() => {
    fetchClients();
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">Client Revenue vs Expenses</h2>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={clients}>
          <XAxis dataKey="client_name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="revenue" fill="#4CAF50" />
          <Bar dataKey="expenses" fill="#F44336" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Dashboard;
