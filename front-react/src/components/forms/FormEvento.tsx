import React, { useState } from 'react';
import { addressAPI } from '../../../addressAPI';
import Alert from '../alert'; // Certifique-se de que o caminho está correto

export const FormEvento: React.FC = () => {

  interface StatusOption {
    value: number;
    label: string;
  }

  const statusOptions: StatusOption[] = [
    { value: 0, label: 'Não Iniciado' },
    { value: 1, label: 'Iniciado' },
    { value: 2, label: 'Em Andamento' },
    { value: 3, label: 'Encerrado' },
    { value: 4, label: 'Cancelado' }
  ];

  const [name, setName] = useState('');
  const [status, setStatus] = useState(statusOptions[0].value);
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const data = { name, status };

    try {
      const response = await fetch(addressAPI + 'createEvent', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        setAlertMessage(result.msg || 'Evento cadastrado com sucesso!');
      } else {
        setAlertMessage(result.msg || 'Erro ao cadastrar evento. Tente novamente.');
      }
    } catch (error) {
      setAlertMessage('Erro ao cadastrar evento. Tente novamente.');
    }

    setShowAlert(true);
  };

  const handleCloseAlert = () => {
    setShowAlert(false);
  };

  return (
    <div className="max-w-sm mx-auto">
      {showAlert && (
        <Alert
          message={alertMessage}
          onClose={handleCloseAlert}
        />
      )}
      <form onSubmit={handleSubmit}>
        <div>
          <label className="block mb-2">Nome</label>
          <input
            type="text"
            value={name}
            id="name"
            className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full h-12 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
            onChange={(e) => setName(e.target.value)}
          />

          <label className="block my-2">Status</label>
          <select
            name="status"
            value={status}
            id="status"
            className="w-full h-12 bg-gray-300 mb-4 rounded-lg"
            required
            onChange={(e) => setStatus(Number(e.target.value))}
          >
            {statusOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>

        <button
          type="submit"
          className="text-white bg-green-600 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-blue-800"
        >
          Cadastrar Evento
        </button>
      </form>
    </div>
  );
};
