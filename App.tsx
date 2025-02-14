import React from "react";
import Dashboard from "./components/Dashboard";
import AddClient from "./components/AddClient";

const App: React.FC = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold text-center">Client Dashboard</h1>
      <AddClient />
      <Dashboard />
    </div>
  );
};

export default App;
