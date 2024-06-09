import React from 'react';

export const TabelaEvento: React.FC = () => {
    return (
        <div className="overflow-x-auto">
            <table className="min-w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-white uppercase bg-green-600 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th className="px-6 py-3">ID</th>
                        <th className="px-6 py-3">Nome</th>
                        <th className="px-6 py-3">Status</th>
                        <th className="px-6 py-3">Horário</th>
                        <th className="px-6 py-3">Descrição</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <td className="px-6 py-4">Evento 1</td>
                        <td className="px-6 py-4">Local 1</td>
                        <td className="px-6 py-4">01/01/2021</td>
                        <td className="px-6 py-4">19:00</td>
                        <td className="px-6 py-4">Descrição 1</td>
                    </tr>
                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <td className="px-6 py-4">Evento 2</td>
                        <td className="px-6 py-4">Local 2</td>
                        <td className="px-6 py-4">02/02/2021</td>
                        <td className="px-6 py-4">20:00</td>
                        <td className="px-6 py-4">Descrição 2</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};
