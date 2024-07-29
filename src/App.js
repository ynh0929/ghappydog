import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import DogCard from './components/DogCard';
import DogDetails from './components/DogDetails';
import Filter from './components/Filter';
import LoadCSV from './components/LoadCSV';
import LostAnimals from './components/LostAnimals';
import FoundAnimals from './components/FoundAnimals';
import './App.css'; // Ensure this import is present if you have App-specific styles
import './index.css'; // Ensure this import is present

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
                    <Link to="/" onClick={() => window.location.reload()}>
                        <img src={`${process.env.PUBLIC_URL}/logo.png`} alt="Logo" className="logo" />
                    </Link>
                    <div className="header-text">
                        <p className="highlight">"아이들이 집으로 갈 수 있도록 도와주세요"</p>
                        <p><strong>지해피독은 유실견 구조를 위한 봉사 모임입니다.</strong></p>
                        <p><strong>많은 아이들이 집을 찾지 못해 길 위를 떠돌고 있습니다.</strong><br />
                        작은 관심들이 모여 아이들이 따뜻한 가정으로 돌아갈 수 있게 도와주세요.
                        </p>
                        <p className="highlight">우리가 포기하지 않고 찾는다면 반드시 집으로 돌아갈 수 있습니다.</p>
                    </div>
                    <nav className="nav-list">
                        <Link to="/lost">유실 동물</Link>
                        <Link to="/found">완료 동물</Link>
                    </nav>
                </header>
                <Routes>
                    <Route path="/lost" element={<LostAnimals lostAnimals={dogs} />} />
                    <Route path="/found" element={<FoundAnimals foundAnimals={foundDogs} />} />
                    <Route path="/dog-details/:name" element={<DogDetails animals={dogs.concat(foundDogs)} />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
