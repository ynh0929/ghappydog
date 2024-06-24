import React, { useState } from 'react';
import DogCard from './DogCard';
import Filter from './Filter';

const LostAnimals = ({ lostAnimals }) => {
    const [locationFilter, setLocationFilter] = useState('');
    const [dateFilter, setDateFilter] = useState('');
    const [genderFilter, setGenderFilter] = useState('');
    const [typeFilter, setTypeFilter] = useState('');

    const filteredDogs = lostAnimals.filter(dog => {
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

        const typeMatch = (
            dog['종류'] === typeFilter || 
            typeFilter === ''
        );

        return locationMatch && dateMatch && genderMatch && typeMatch;
    });

    return (
        <div>
            <h1>지해피독 유실 동물 리스트</h1>
            <p>지해피독에 오신 것을 환영합니다. 여기서 유실된 강아지 정보를 찾고 주인과 다시 만날 수 있도록 도와주세요.</p>
            <p>총 유실동물 수: {filteredDogs.length}</p>
            <Filter 
                setLocationFilter={setLocationFilter} 
                setDateFilter={setDateFilter} 
                setGenderFilter={setGenderFilter} 
                setTypeFilter={setTypeFilter} 
            />
            <section id="dog-list">
                <div className="dog-list">
                    {filteredDogs.length > 0 ? (
                        filteredDogs.map(dog => (
                            <DogCard key={dog['이름']} dog={dog} />
                        ))
                    ) : (
                        <p>선택한 필터에 맞는 강아지가 없습니다.</p>
                    )}
                </div>
            </section>
        </div>
    );
};

export default LostAnimals;
