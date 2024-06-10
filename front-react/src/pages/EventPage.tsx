// src/pages/Eventos.tsx
import React from 'react';
import { TabelaEvento } from '../components/EventTable';
import { useNavigate } from 'react-router-dom';

export const EventPage: React.FC = () => {
  const navigate = useNavigate();

  const createEvent = () => {
    navigate('/cadastrarEvento');
  }

  return (
    <div>
        <h1 className="text-2xl bg-green-200 my-4 px-4 py-2 rounded-lg ">Eventos</h1>
        <TabelaEvento />
        <button className='py-4 my-8 bg-green-600 text-white px-4 rounded-xl' onClick={() => createEvent()}>Cadastrar Novo Evento</button>
    </div>
  );
};