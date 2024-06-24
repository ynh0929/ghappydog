import React, { useState } from 'react';

const Filter = ({ setLocationFilter, setDateFilter, setGenderFilter, setTypeFilter }) => {
    const [location, setLocation] = useState('');
    const [date, setDate] = useState('');
    const [gender, setGender] = useState('');
    const [type, setType] = useState('');

    const handleLocationChange = (e) => {
        setLocation(e.target.value);
        setLocationFilter(e.target.value);
    };

    const handleDateChange = (e) => {
        setDate(e.target.value);
        setDateFilter(e.target.value);
    };

    const handleGenderChange = (e) => {
        setGender(e.target.value);
        setGenderFilter(e.target.value);
    };

    const handleTypeChange = (e) => {
        setType(e.target.value);
        setTypeFilter(e.target.value);
    };

    const resetFilters = () => {
        setLocation('');
        setDate('');
        setGender('');
        setType('');
        setLocationFilter('');
        setDateFilter('');
        setGenderFilter('');
        setTypeFilter('');
    };

    return (
        <div className="filters flex justify-center gap-4 mb-4">
            <label>
                위치 필터:
                <input 
                    type="text" 
                    value={location}
                    onChange={handleLocationChange} 
                    className="p-2 border border-gray-300 rounded" 
                />
            </label>
            <label>
                유실 날짜 필터:
                <input 
                    type="text" 
                    placeholder="yyyy, yyyy-mm, yyyy-mm-dd" 
                    value={date}
                    onChange={handleDateChange} 
                    className="p-2 border border-gray-300 rounded" 
                />
            </label>
            <label>
                성별 필터:
                <select 
                    value={gender}
                    onChange={handleGenderChange} 
                    className="p-2 border border-gray-300 rounded"
                >
                    <option value="">All</option>
                    <option value="암">암</option>
                    <option value="수">수</option>
                </select>
            </label>
            <label>
                종류 필터:
                <select 
                    value={type}
                    onChange={handleTypeChange} 
                    className="p-2 border border-gray-300 rounded"
                >
                    <option value="">All</option>
                    <option value="개">Dog</option>
                    <option value="고양이">Cat</option>
                </select>
            </label>
            <button onClick={applyFilters} className="bg-blue-500 text-white py-2 px-4 rounded">필터 적용</button>
            <button onClick={resetFilters} className="bg-gray-500 text-white py-2 px-4 rounded">필터 초기화</button>
        </div>
    );
};

export default Filter;