import React, { useState } from 'react';
import DogCard from './DogCard';
import Filter from './Filter';

const LostAnimals = ({ lostAnimals }) => {
    const [locationFilter, setLocationFilter] = useState('');
    const [dateFilter, setDateFilter] = useState('');
    const [genderFilter, setGenderFilter] = useState('');
    const [typeFilter, setTypeFilter] = useState('');

    const applyFilters = () => {
        // We don't need to set filtersApplied because the filters are always applied
    };

    const resetFilters = () => {
        setLocationFilter('');
        setDateFilter('');
        setGenderFilter('');
        setTypeFilter('');
    };

    const filteredAnimals = lostAnimals.filter(animal => {
        const dateLost = new Date(animal['유실 날짜'].replace(/\./g, '-'));
        const [filterYear, filterMonth, filterDay] = dateFilter.split('-').map(Number);

        const locationMatch = (
            animal['시, 군, 구']?.toLowerCase().includes(locationFilter.toLowerCase()) || 
            animal['동, 읍, 면']?.toLowerCase().includes(locationFilter.toLowerCase()) || 
            animal['세부 주소']?.toLowerCase().includes(locationFilter.toLowerCase()) || 
            locationFilter === ''
        );

        const dateMatch = !dateFilter || (
            (filterYear && dateLost.getFullYear() === filterYear) &&
            (!filterMonth || dateLost.getMonth() + 1 === filterMonth) &&
            (!filterDay || dateLost.getDate() === filterDay)
        );

        const genderMatch = (
            animal['성별'] === genderFilter || 
            genderFilter === ''
        );

        const typeMatch = (
            animal['종류'] === typeFilter || 
            typeFilter === ''
        );

        return locationMatch && dateMatch && genderMatch && typeMatch;
    });

    return (
        <div>
            <h1 className="text-center text-2xl font-bold mb-4">지해피독 유실 동물 리스트</h1>
            <p className="text-center mb-4">지해피독에 오신 것을 환영합니다. 여기서 유실된 강아지 정보를 찾고 주인과 다시 만날 수 있도록 도와주세요.</p>
            <p className="text-center mb-4"><strong>총 유실동물 수: {filteredAnimals.length}</strong></p>
            <div className="filters mb-4">
                <Filter 
                    setLocationFilter={setLocationFilter} 
                    setDateFilter={setDateFilter} 
                    setGenderFilter={setGenderFilter}
                    setTypeFilter={setTypeFilter}
                />
                {/* <div className="my-4 flex justify-center gap-4">
                    <button onClick={applyFilters} className="bg-blue-500 text-white py-2 px-4 rounded">필터 적용</button>
                    <button onClick={resetFilters} className="bg-gray-500 text-white py-2 px-4 rounded">필터 초기화</button>
                </div> */}
            </div>
            <section id="dog-list">
                <div className="dog-list grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {filteredAnimals.length > 0 ? (
                        filteredAnimals.map(animal => (
                            <DogCard key={animal['이름']} dog={animal} />
                        ))
                    ) : (
                        <p className="text-center">선택한 필터에 맞는 강아지가 없습니다.</p>
                    )}
                </div>
            </section>
        </div>
    );
};

export default LostAnimals;
