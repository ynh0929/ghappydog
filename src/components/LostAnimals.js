import React, { useState } from 'react';
import DogCard from './DogCard';
import Filter from './Filter';

const LostAnimals = ({ lostAnimals }) => {
    const [locationFilter, setLocationFilter] = useState('');
    const [dateFilter, setDateFilter] = useState('');
    const [genderFilter, setGenderFilter] = useState('');
    const [typeFilter, setTypeFilter] = useState('');
    const [sortOrder, setSortOrder] = useState('latest'); // New state for sorting

    const applyFilters = () => {
        // Filters are always applied through state changes
    };

    const resetFilters = () => {
        setLocationFilter('');
        setDateFilter('');
        setGenderFilter('');
        setTypeFilter('');
        setSortOrder('latest'); // Reset sort order
    };

    const sortAnimalsByDate = (animals) => {
        return animals.sort((a, b) => {
            const dateA = new Date(a['유실 날짜'].replace(/\./g, '-'));
            const dateB = new Date(b['유실 날짜'].replace(/\./g, '-'));
            return sortOrder === 'latest' ? dateB - dateA : dateA - dateB;
        });
    };

    const filteredAnimals = lostAnimals.filter(animal => {
        if (!animal || !animal['유실 날짜']) {
            return false;
        }
        const dateLost = new Date(animal['유실 날짜'].replace(/\./g, '-'));
        const [filterYear, filterMonth, filterDay] = dateFilter.split('-').map(Number);

        const locationMatch = (
            animal['도']?.toLowerCase().includes(locationFilter.toLowerCase()) || 
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

    const sortedAnimals = sortAnimalsByDate(filteredAnimals);

    return (
        <div className="container mx-auto px-4">
            <p className="text-center mb-4"><strong>총 유실동물 수: {filteredAnimals.length}</strong></p>
            <div className="filters mb-4">
                <Filter 
                    setLocationFilter={setLocationFilter} 
                    setDateFilter={setDateFilter} 
                    setGenderFilter={setGenderFilter}
                    setTypeFilter={setTypeFilter}
                    setSortOrder={setSortOrder}
                />
            </div>
            <section id="dog-list">
                <div className="dog-list grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
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
