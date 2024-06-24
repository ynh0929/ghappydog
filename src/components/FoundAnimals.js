import React, { useState } from 'react';
import DogCard from './DogCard';
import Filter from './Filter';

const FoundAnimals = ({ foundAnimals }) => {
    const [locationFilter, setLocationFilter] = useState('');
    const [dateFilter, setDateFilter] = useState('');
    const [genderFilter, setGenderFilter] = useState('');

    const filteredAnimals = foundAnimals.filter(animal => {
        const dateFound = new Date(animal['발견 날짜'].replace(/\./g, '-'));
        const [filterYear, filterMonth, filterDay] = dateFilter.split('-').map(Number);

        const locationMatch = (
            animal['시, 군, 구']?.toLowerCase().includes(locationFilter.toLowerCase()) || 
            animal['동, 읍, 면']?.toLowerCase().includes(locationFilter.toLowerCase()) || 
            animal['세부 주소']?.toLowerCase().includes(locationFilter.toLowerCase()) || 
            locationFilter === ''
        );

        const dateMatch = !dateFilter || (
            (filterYear && dateFound.getFullYear() === filterYear) &&
            (!filterMonth || dateFound.getMonth() + 1 === filterMonth) &&
            (!filterDay || dateFound.getDate() === filterDay)
        );

        const genderMatch = (
            animal['성별'] === genderFilter || 
            genderFilter === ''
        );

        return locationMatch && dateMatch && genderMatch;
    });

    return (
        <div>
            <h1>지해피독 발견된 동물 리스트</h1>
            <p>지해피독에 오신 것을 환영합니다. 여기서 발견된 강아지 정보를 찾고 주인과 다시 만날 수 있도록 도와주세요.</p>
            <p>총 발견동물 수: {filteredAnimals.length}</p>
            <Filter 
                setLocationFilter={setLocationFilter} 
                setDateFilter={setDateFilter} 
                setGenderFilter={setGenderFilter}
            />
            <section id="dog-list">
                <div className="dog-list">
                    {filteredAnimals.length > 0 ? (
                        filteredAnimals.map(animal => (
                            <DogCard key={animal['이름']} dog={animal} />
                        ))
                    ) : (
                        <p>선택한 필터에 맞는 강아지가 없습니다.</p>
                    )}
                </div>
            </section>
        </div>
    );
};

export default FoundAnimals;
