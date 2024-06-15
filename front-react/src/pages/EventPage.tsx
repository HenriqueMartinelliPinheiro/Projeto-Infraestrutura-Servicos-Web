// src/pages/Eventos.tsx
import React, { useEffect, useState } from 'react';
import { EventTable } from '../components/table/eventTable';
import { useNavigate } from 'react-router-dom';
import { addressAPI } from '../../addressAPI';

export const EventPage: React.FC = () => {
  const navigate = useNavigate();
  const createEvent = () => {
    navigate('/cadastrarEvento');
  }
  
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Função para buscar dados da API
    const fetchData = async () => {

      try {
        const response = await fetch(addressAPI+'getAllEvents');

        if (!response.ok) {
          console.error("Resposta não OK:", response);
          throw new Error('Erro ao buscar dados');
        }

        const data = JSON.parse(await response.json());
        
        if (data.success==true) {
          setEvents(data.events);
        } else {
          throw new Error('Erro ao buscar Dados');
        }
      } catch (err) {
        console.error("Erro ao buscar dados:", err);

        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError('Erro desconhecido');
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <p>Carregando...</p>;
  }

  if (error) {
    return <p>Erro: {error}</p>;
  }

  return (
    <div>
        <h1 className="text-2xl bg-green-200 my-4 px-4 py-2 rounded-lg ">Eventos</h1>
        <EventTable eventList={events} />
        <button className='py-4 my-8 bg-green-600 text-white px-4 rounded-xl' onClick={createEvent}>
          Cadastrar Novo Evento
        </button>
    </div>
  );
};
