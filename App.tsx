
import React, { useState } from 'react';
import FortuneWheel from './components/FortuneWheel';

const App: React.FC = () => {
  const [firstName, setFirstName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');

  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-white p-4 overflow-x-hidden">
      <header className="mb-8 text-center">
        <h1 className="text-5xl md:text-6xl font-bold luckiest-guy text-amber-400 tracking-wider" style={{ textShadow: '2px 2px 0px #00000080' }}>
          Rueda de la Fortuna
        </h1>
        <p className="text-xl md:text-2xl mt-3 text-gray-200">
          ¿Voy a conseguir un contrato de trabajo?
        </p>
      </header>

      <section className="mb-8 p-6 bg-gray-800 bg-opacity-50 rounded-lg shadow-md w-full max-w-md">
        <div className="space-y-4">
          <div>
            <label htmlFor="firstName" className="block text-sm font-medium text-gray-300 mb-1">Dime tu nombre:</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              placeholder="Ej: Ana"
              className="w-full p-2.5 bg-gray-700 border border-gray-600 text-white rounded-md focus:ring-amber-500 focus:border-amber-500 placeholder-gray-400"
              aria-label="Dime tu nombre"
            />
          </div>
          <div>
            <label htmlFor="lastName" className="block text-sm font-medium text-gray-300 mb-1">Dime tu apellido:</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              placeholder="Ej: Pérez"
              className="w-full p-2.5 bg-gray-700 border border-gray-600 text-white rounded-md focus:ring-amber-500 focus:border-amber-500 placeholder-gray-400"
              aria-label="Dime tu apellido"
            />
          </div>
        </div>
      </section>

      <main>
        <FortuneWheel firstName={firstName} lastName={lastName} />
      </main>
      <footer className="mt-12 text-center text-gray-400 text-sm">
        <p>&copy; {new Date().getFullYear()} Tu Destino Laboral. ¡Mucha suerte!</p>
      </footer>
    </div>
  );
};

export default App;
