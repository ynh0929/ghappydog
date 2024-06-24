import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import DogCard from './components/DogCard'
import DogDetails from './components/DogDetails';
import Filter from './components/Filter';
import LoadCSV from './LoadCSV';
import LostAnimals from './components/LostAnimals';
import FoundAnimals from './components/FoundAnimals';
import './App.css';
import './index.css';

const App = () => {
    const [dogs, setDogs] = useState([]);
    const [foundDogs, setFoundDogs] = useState([]);
    const [locationFilter, setLocationFilter] = useState('');
    const [dateFilter, setDateFilter] = useState('');
    const [genderFilter, setGenderFilter] = useState('');
    const [typeFilter, setTypeFilter] = useState('');

    useEffect(() => {
        // Fetch the CSV data and set the state
    }, []);

    return (
        <Router basename="/ghappydog">
            <LoadCSV setLostAnimals={setDogs} setFoundAnimals={setFoundDogs} />
            <div className="container">
                <header>
                    <h1><Link to="/" onClick={() => window.location.reload()}>지해피독 유실 동물 리스트</Link></h1>
                    <p>지해피독에 오신 것을 환영합니다. 여기서 유실된 강아지 정보를 찾고 주인과 다시 만날 수 있도록 도와주세요.</p>
                    <nav className="nav-list">
                        <Link to="/lost">유실동물</Link>
                        <Link to="/found">발견 동물</Link>
                    </nav>
                </header>
                <Routes>
                    <Route path="/lost" element={<LostAnimals lostAnimals={dogs} />} />
                    <Route path="/found" element={<FoundAnimals foundAnimals={foundDogs} />} />
                    <Route path="/dog-details/:name" element={<DogDetails animals={dogs.concat(foundDogs)} />} />
                    <Route path="/" element={<LostAnimals lostAnimals={dogs} />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
