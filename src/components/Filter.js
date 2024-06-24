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
        <div className="filter-container">
            <div className="filter">
                <label>
                    위치 필터:
                    <input type="text" value={location} onChange={handleLocationChange} />
                </label>
                <label>
                    유실 날짜 필터:
                    <input type="text" placeholder="yyyy, yyyy-mm, yyyy-mm-dd" value={date} onChange={handleDateChange} />
                </label>
                <label>
                    성별 필터:
                    <select value={gender} onChange={handleGenderChange}>
                        <option value="">All</option>
                        <option value="암">암</option>
                        <option value="수">수</option>
                    </select>
                </label>
                <label>
                    종류 필터:
                    <select value={type} onChange={handleTypeChange}>
                        <option value="">All</option>
                        <option value="개">개</option>
                        <option value="고양이">고양이</option>
                    </select>
                </label>
            </div>
            <div className="filter-buttons">
                <button onClick={resetFilters}>필터 초기화</button>
                <button>필터 적용</button>
            </div>
        </div>
    );
};

export default Filter;
