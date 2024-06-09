// src/pages/Eventos.tsx
import React from 'react';
import { TabelaEvento } from '../components/TabelaEvento';

export const EventoPage: React.FC = () => {
  return (
    <div>
        <h1 className="text-2xl">Eventos</h1>
        <TabelaEvento />
    </div>
  );
};