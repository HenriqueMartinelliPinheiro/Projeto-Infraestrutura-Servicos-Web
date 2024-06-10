import React from 'react';
import { useNavigate } from 'react-router-dom';

export const TabelaEvento: React.FC = () => {
    const navigate = useNavigate();

    const handleEdit = (id: string) => {
        navigate(`/editar/${id}`);
    };

    const handleDelete = (id: string) => {
        if (window.confirm('Tem certeza que deseja excluir este evento?')) {
            // Aqui você pode adicionar a lógica para excluir o evento
            console.log(`Evento ${id} excluído`);
        }
    };

    return (
        <>
            <div className="overflow-x-auto">
                <table className="min-w-full text-sm text-left text-gray-500 dark:text-gray-400 text-center">
                    <thead className="text-xs text-white uppercase bg-green-600 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th className="px-6 py-3">ID</th>
                            <th className="px-6 py-3">Nome</th>
                            <th className="px-6 py-3">Status</th>
                            <th className="px-6 py-3">Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <td className="px-6 py-4">Evento 1</td>
                            <td className="px-6 py-4">Local 1</td>
                            <td className="px-6 py-4">01/01/2021</td>
                            <td className="px-6 py-4 text-center    ">
                                <button 
                                    className="text-white button bg-blue-500 rounded pl-8 pr-8 pt-2 pb-2 hover:bg-blue-700 mx-4" 
                                    onClick={() => handleEdit('1')}
                                >
                                    Editar
                                </button>
                                <button 
                                    className="text-white button bg-red-500 rounded pl-8 pr-8 pt-2 pb-2 hover:bg-red-700 mx-4"
                                    onClick={() => handleDelete('1')}
                                >
                                    Excluir
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
};
