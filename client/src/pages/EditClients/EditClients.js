import React, { useState, useEffect } from "react";
import { ComboBox } from "../../components/ComboBox/ComboBox";
import { ClientEditForm } from "../../components/ClientEditForm/ClientEditForm";
export const EditClients = () => {
  const [clients, setClients] = useState();
  useEffect(() => {
    getClients();
  }, []);

  const getClients = async () => {
    try {
      const response = await fetch("http://localhost:3001/api/clients");
      const clients = await response.json();
      setClients(clients);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="w-full flex flex-col lg:flex-row items-center justify-around">
      <div className="flex items-center">
        <ComboBox singleSelection={true} clients={clients} />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="w-8 h-8 ml-4 pt-2 hover:cursor-pointer"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 4.5v15m7.5-7.5h-15"
          />
        </svg>
      </div>
      <ClientEditForm />
    </div>
  );
};
