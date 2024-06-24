import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import LostAnimals from './components/LostAnimals';
import FoundAnimals from './components/FoundAnimals';
import LoadCSV from './components/LoadCSV';
import './App.css';

const App = () => {
    const [lostAnimals, setLostAnimals] = useState([]);
    const [foundAnimals, setFoundAnimals] = useState([]);

    return (
        <Router>
            <LoadCSV setLostAnimals={setLostAnimals} setFoundAnimals={setFoundAnimals} />
            <div className="container">
                <header>
                    <nav>
                        <ul className="nav-list">
                            <li><Link to="/">유실 동물 리스트</Link></li>
                            <li><Link to="/found">발견된 동물 리스트</Link></li>
                        </ul>
                    </nav>
                </header>

                <Routes>
                    <Route path="/" element={<LostAnimals lostAnimals={lostAnimals} />} />
                    <Route path="/found" element={<FoundAnimals foundAnimals={foundAnimals} />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
