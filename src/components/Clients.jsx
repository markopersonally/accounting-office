import React, { useState } from "react";
import { FiPlus, FiEdit2, FiTrash2, FiSave } from "react-icons/fi";

export default function Clients() {
  const [clients, setClients] = useState([
    {
      id: 1,
      name: "John Doe",
      email: "john@example.com",
      phone: "123-456-7890",
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane@example.com",
      phone: "098-765-4321",
    },
  ]);
  const [editingId, setEditingId] = useState(null);
  const [newClient, setNewClient] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const handleEdit = (id) => {
    setEditingId(id);
  };

  const handleSave = (id) => {
    setEditingId(null);
  };

  const handleDelete = (id) => {
    setClients(clients.filter((client) => client.id !== id));
  };

  const handleAdd = () => {
    if (newClient.name && newClient.email && newClient.phone) {
      setClients([...clients, { ...newClient, id: clients.length + 1 }]);
      setNewClient({ name: "", email: "", phone: "" });
    }
  };

  return (
    <div className="container mx-auto p-4 bg-gray-100 min-h-screen">
      <div className="mt-6 bg-white shadow-md rounded-lg p-4">
        <h2 className="text-xl font-semibold mb-4 text-gray-800">
          Add New Client
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <input
            type="text"
            placeholder="Name"
            value={newClient.name}
            onChange={(e) =>
              setNewClient({ ...newClient, name: e.target.value })
            }
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          />
          <input
            type="email"
            placeholder="Email"
            value={newClient.email}
            onChange={(e) =>
              setNewClient({ ...newClient, email: e.target.value })
            }
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          />
          <input
            type="tel"
            placeholder="Phone"
            value={newClient.phone}
            onChange={(e) =>
              setNewClient({ ...newClient, phone: e.target.value })
            }
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          />
        </div>
        <button
          onClick={handleAdd}
          className="mt-4 flex items-center justify-center w-full bg-gray-800 text-white py-2 px-4 rounded-lg hover:bg-gray-700 transition duration-300"
        >
          <FiPlus className="mr-2" /> Add Client
        </button>
      </div>
      <div className="overflow-x-auto bg-white shadow-md rounded-lg">
        <table className="w-full table-auto">
          <thead>
            <tr className="bg-gray-200 text-gray-700 uppercase text-sm leading-normal">
              <th className="py-3 px-6 text-left">Name</th>
              <th className="py-3 px-6 text-left">Email</th>
              <th className="py-3 px-6 text-left">Phone</th>
              <th className="py-3 px-6 text-center">Actions</th>
            </tr>
          </thead>
          <tbody className="text-gray-600 text-sm font-light">
            {clients.map((client) => (
              <tr
                key={client.id}
                className="border-b border-gray-200 hover:bg-gray-100 transition duration-300"
              >
                <td className="py-3 px-6 text-left whitespace-nowrap">
                  {editingId === client.id ? (
                    <input
                      type="text"
                      value={client.name}
                      onChange={(e) =>
                        setClients(
                          clients.map((c) =>
                            c.id === client.id
                              ? { ...c, name: e.target.value }
                              : c
                          )
                        )
                      }
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    />
                  ) : (
                    client.name
                  )}
                </td>
                <td className="py-3 px-6 text-left">
                  {editingId === client.id ? (
                    <input
                      type="email"
                      value={client.email}
                      onChange={(e) =>
                        setClients(
                          clients.map((c) =>
                            c.id === client.id
                              ? { ...c, email: e.target.value }
                              : c
                          )
                        )
                      }
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    />
                  ) : (
                    client.email
                  )}
                </td>
                <td className="py-3 px-6 text-left">
                  {editingId === client.id ? (
                    <input
                      type="tel"
                      value={client.phone}
                      onChange={(e) =>
                        setClients(
                          clients.map((c) =>
                            c.id === client.id
                              ? { ...c, phone: e.target.value }
                              : c
                          )
                        )
                      }
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    />
                  ) : (
                    client.phone
                  )}
                </td>
                <td className="py-3 px-6 text-center">
                  <div className="flex item-center justify-center">
                    {editingId === client.id ? (
                      <button
                        onClick={() => handleSave(client.id)}
                        className="transform hover:scale-110 transition duration-300 hover:text-green-500"
                      >
                        <FiSave className="w-5 h-5" />
                      </button>
                    ) : (
                      <button
                        onClick={() => handleEdit(client.id)}
                        className="transform hover:scale-110 transition duration-300 hover:text-blue-500"
                      >
                        <FiEdit2 className="w-5 h-5" />
                      </button>
                    )}
                    <button
                      onClick={() => handleDelete(client.id)}
                      className="ml-2 transform hover:scale-110 transition duration-300 hover:text-red-500"
                    >
                      <FiTrash2 className="w-5 h-5" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
