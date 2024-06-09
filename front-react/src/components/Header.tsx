import React from 'react';

export const Header: React.FC = () => {
  return (
    <header className="bg-green-600 p-4">
      <div className="container mx-auto">
        <nav>
          <ul className="flex space-x-4">
            <li>
              <a href="/eventos" className="text-white hover:text-gray-200">
                Eventos
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};