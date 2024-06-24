import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import DogCard from './components/DogCard';
import DogDetails from './components/DogDetails';
import Filter from './components/Filter';
import LoadCSV from './components/LoadCSV';
import LostAnimals from './components/LostAnimals';
import FoundAnimals from './components/FoundAnimals';
import './App.css';

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
            <LoadCSV setDogs={setDogs} />
            <LoadCSV setDogs={setFoundDogs} filePath="/지해피독_찾음.csv" />
            <div className="container">
                <header className="text-center">
                    <h1><Link to="/" onClick={() => window.location.reload()}>지해피독 유실 동물 리스트</Link></h1>
                    <nav className="flex justify-center gap-4 my-4">
                        <Link to="/" className="bg-blue-500 text-white py-2 px-4 rounded">유실 동물</Link>
                        <Link to="/found" className="bg-green-500 text-white py-2 px-4 rounded">발견 동물</Link>
                    </nav>
                </header>
                <Routes>
                    <Route path="/" element={<LostAnimals 
                        lostAnimals={dogs} 
                        setLocationFilter={setLocationFilter} 
                        setDateFilter={setDateFilter} 
                        setGenderFilter={setGenderFilter}
                        setTypeFilter={setTypeFilter}
                    />} />
                    <Route path="/found" element={<FoundAnimals 
                        foundAnimals={foundDogs} 
                        setLocationFilter={setLocationFilter} 
                        setDateFilter={setDateFilter} 
                        setGenderFilter={setGenderFilter}
                        setTypeFilter={setTypeFilter}
                    />} />
                    <Route path="/dog-details/:name" element={<DogDetails animals={dogs.concat(foundDogs)} />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
