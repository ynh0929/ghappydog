import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import DogCard from './components/DogCard';
import DogDetails from './components/DogDetails';
import Filter from './components/Filter';
import LoadCSV from './components/LoadCSV';
import './App.css';

const App = () => {
    const [dogs, setDogs] = useState([]);
    const [locationFilter, setLocationFilter] = useState('');
    const [dateFilter, setDateFilter] = useState('');
    const [genderFilter, setGenderFilter] = useState('');

    console.log('Dogs State:', dogs); // Debug: Log dogs state

    const filteredDogs = dogs.filter(dog => {
        const dateLost = new Date(dog['유실 날짜'].replace(/\./g, '-'));
        const [filterYear, filterMonth, filterDay] = dateFilter.split('-').map(Number);

        const locationMatch = (
            dog['시, 군, 구']?.toLowerCase().includes(locationFilter.toLowerCase()) || 
            dog['동, 읍, 면']?.toLowerCase().includes(locationFilter.toLowerCase()) || 
            dog['세부 주소']?.toLowerCase().includes(locationFilter.toLowerCase()) || 
            locationFilter === ''
        );

        const dateMatch = !dateFilter || (
            (filterYear && dateLost.getFullYear() === filterYear) &&
            (!filterMonth || dateLost.getMonth() + 1 === filterMonth) &&
            (!filterDay || dateLost.getDate() === filterDay)
        );

        const genderMatch = (
            dog['성별'] === genderFilter || 
            genderFilter === ''
        );

        return locationMatch && dateMatch && genderMatch;
    });

    console.log('Filtered Dogs:', filteredDogs); // Debug: Log filtered dogs

    return (
        <Router basename={process.env.PUBLIC_URL}>
            <LoadCSV setDogs={setDogs} />
            <div className="container">
                <header>
                    <h1><Link to="/" onClick={() => window.location.reload()}>지해피독 유실 동물 리스트</Link></h1>
                    <p>지해피독에 오신 것을 환영합니다. 여기서 유실된 강아지 정보를 찾고 주인과 다시 만날 수 있도록 도와주세요.</p>
                    <p><strong>총 유실동물 수: {filteredDogs.length}</strong></p>
                    <Filter 
                        setLocationFilter={setLocationFilter} 
                        setDateFilter={setDateFilter} 
                        setGenderFilter={setGenderFilter}
                    />
                </header>

                <Routes>
                    <Route path="/" element={
                        <section id="dog-list">
                            <div className="dog-list">
                                {filteredDogs.length > 0 ? (
                                    filteredDogs.map(dog => (
                                        <DogCard key={dog['이름']} dog={dog} />
                                    ))
                                ) : (
                                    <p>선택한 필터에 해당하는 강아지를 찾을 수 없습니다.</p>
                                )}
                            </div>
                        </section>
                    } />
                    <Route path="/dog-details/:name" element={<DogDetails dogs={dogs} />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
