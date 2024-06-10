import React from 'react';

export const Header: React.FC = () => {
  return (
    <header className="bg-green-600 p-4">
      <div className="container mx-auto">
        <nav>
          <ul className="flex space-x-4">
            <li>
              <a href="/eventos" className="text-white hover:text-gray-200 mx-4">
                Eventos
              </a>
              <a href="/cadastrarEvento" className="text-white hover:text-gray-200 mx-4">
                Cadastrar Evento
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};