import React, { useState } from 'react';

const Filter = ({ setLocationFilter, setDateFilter, setGenderFilter, setTypeFilter }) => {
    const [location, setLocation] = useState('');
    const [date, setDate] = useState('');
    const [gender, setGender] = useState('');
    const [type, setType] = useState('');

    const handleFilter = () => {
        setLocationFilter(location);
        setDateFilter(date);
        setGenderFilter(gender);
        setTypeFilter(type);
    };

    return (
        <div className="filter mb-4">
            <label className="block mb-2">
                위치 필터:
                <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} className="border rounded p-2 w-full" />
            </label>
            <label className="block mb-2">
                유실 날짜 필터:
                <input type="text" value={date} onChange={(e) => setDate(e.target.value)} placeholder="yyyy, yyyy-mm, yyyy-mm-dd" className="border rounded p-2 w-full" />
            </label>
            <label className="block mb-2">
                성별 필터:
                <select value={gender} onChange={(e) => setGender(e.target.value)} className="border rounded p-2 w-full">
                    <option value="">All</option>
                    <option value="암">암</option>
                    <option value="수">수</option>
                </select>
            </label>
            <label className="block mb-2">
                종류 필터:
                <select value={type} onChange={(e) => setType(e.target.value)} className="border rounded p-2 w-full">
                    <option value="">All</option>
                    <option value="개">개</option>
                    <option value="고양이">고양이</option>
                </select>
            </label>
            <button onClick={handleFilter} className="bg-blue-500 text-white px-4 py-2 rounded">필터 적용</button>
        </div>
    );
};

export default Filter;
