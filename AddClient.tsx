import React, { useState } from "react";
import axios from "axios";

const AddClient: React.FC = () => {
  const [client, setClient] = useState({
    client_name: "",
    revenue: "",
    expenses: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setClient({ ...client, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await axios.post("http://localhost:8000/clients", client);
    alert("Client added!");
  };

  return (
    <form onSubmit={handleSubmit} className="p-6 border rounded-lg shadow-md">
      <input name="client_name" placeholder="Client Name" onChange={handleChange} className="border p-2 w-full mb-2" />
      <input name="revenue" placeholder="Revenue" onChange={handleChange} className="border p-2 w-full mb-2" />
      <input name="expenses" placeholder="Expenses" onChange={handleChange} className="border p-2 w-full mb-2" />
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md">Add Client</button>
    </form>
  );
};

export default AddClient;
