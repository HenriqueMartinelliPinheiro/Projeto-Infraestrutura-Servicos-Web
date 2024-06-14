import React from 'react';
import { useNavigate } from 'react-router-dom';
import { EventTd } from './eventTd';

interface Event {
    id: number;
    name: string;
    status: number;
}

interface EventTableProps {
    eventList: Event[];
}

export const EventTable: React.FC<EventTableProps> = ({ eventList }) => {
    const navigate = useNavigate();

    const handleEdit = (id: number) => {
        navigate(`/editar/${id}`);
    };

    const handleDelete = (id: number) => {
        if (window.confirm('Tem certeza que deseja excluir este evento?')) {
            // Aqui você pode adicionar a lógica para excluir o evento
            console.log(`Evento ${id} excluído`);
        }
    };

    return (
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
                    {eventList.map((event) => (
                        <tr key={event.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <td>Teste</td>
                            <EventTd value={event.id} />
                            <EventTd value={event.name} />
                            <EventTd value={event.status} />
                            <td className="px-6 py-4 text-center">
                                <button
                                    className="text-white button bg-blue-500 rounded pl-8 pr-8 pt-2 pb-2 hover:bg-blue-700 mx-4"
                                    onClick={() => handleEdit(event.id)}
                                >
                                    Editar
                                </button>
                                <button
                                    className="text-white button bg-red-500 rounded pl-8 pr-8 pt-2 pb-2 hover:bg-red-700 mx-4"
                                    onClick={() => handleDelete(event.id)}
                                >
                                    Excluir
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};