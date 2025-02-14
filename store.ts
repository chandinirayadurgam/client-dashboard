import { create } from "zustand";
import axios from "axios";

interface Client {
  id: number;
  client_name: string;
  revenue: number;
  expenses: number;
}

interface ClientStore {
  clients: Client[];
  fetchClients: () => Promise<void>;
}

export const useClientStore = create<ClientStore>((set) => ({
  clients: [],
  fetchClients: async () => {
    const { data } = await axios.get("http://localhost:8000/clients");
    set({ clients: data });
  },
}));
