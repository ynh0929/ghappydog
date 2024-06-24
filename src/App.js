import React, { useState } from 'react';
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import LostAnimals from './components/LostAnimals';
import FoundAnimals from './components/FoundAnimals';
import DogDetails from './components/DogDetails';
import LoadCSV from './components/LoadCSV';
import './styles/tailwind.css';

const App = () => {
    const [lostAnimals, setLostAnimals] = useState([]);
    const [foundAnimals, setFoundAnimals] = useState([]);

    return (
        <Router basename="/ghappydog">
            <LoadCSV setLostAnimals={setLostAnimals} setFoundAnimals={setFoundAnimals} />
            <div className="container mx-auto p-4">
                <header className="mb-4">
                    <nav className="flex justify-between items-center bg-blue-500 text-white p-4 rounded">
                        <ul className="flex space-x-4">
                            <li><Link to="/" className="hover:underline">유실 동물 리스트</Link></li>
                            <li><Link to="/found" className="hover:underline">발견된 동물 리스트</Link></li>
                        </ul>
                    </nav>
                </header>

                <Routes>
                    <Route path="/" element={<LostAnimals lostAnimals={lostAnimals} />} />
                    <Route path="/found" element={<FoundAnimals foundAnimals={foundAnimals} />} />
                    <Route path="/dog-details/:name" element={<DogDetails animals={lostAnimals} />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;