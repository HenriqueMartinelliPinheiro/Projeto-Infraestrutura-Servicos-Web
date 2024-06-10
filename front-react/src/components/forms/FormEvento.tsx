import React from 'react';

export const FormEvento: React.FC = () => {
  return (
    <form className="max-w-sm mx-auto">
      <div>

        <label className="block mb-2">Nome</label>
        <input type="text" id="eventName" className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full h-12 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />

        <label className="block my-2">Status</label>
        <select name="eventStatus" id="eventStatus" className='w-full h-12 bg-gray-300 mb-4 rounded-lg' required>
          <option value="notStarted">Não Iniciado</option>
          <option value="started">Iniciado</option>
          <option value="inProgress">Em Andamento</option>
          <option value="closed">Encerrado</option>
          <option value="canceled">Cancelado</option>
          op  
        </select>
      </div>
      
     <button type="submit" className="text-white bg-green-600 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-blue-800">Cadastrar Evento</button>
  </form>
  );
};