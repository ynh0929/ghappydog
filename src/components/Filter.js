import React from 'react';

const Filter = ({ setLocationFilter, setDateFilter, setGenderFilter, setTypeFilter }) => {
    const handleLocationChange = (e) => setLocationFilter(e.target.value);
    const handleDateChange = (e) => setDateFilter(e.target.value);
    const handleGenderChange = (e) => setGenderFilter(e.target.value);
    const handleTypeChange = (e) => setTypeFilter(e.target.value);

    return (
        <div className="filters">
            <label>
                위치 필터:
                <input type="text" onChange={handleLocationChange} />
            </label>
            <label>
                유실 날짜 필터:
                <input type="text" placeholder="yyyy, yyyy-mm, yyyy-mm-dd" onChange={handleDateChange} />
            </label>
            <label>
                성별 필터:
                <select onChange={handleGenderChange}>
                    <option value="">All</option>
                    <option value="암">암</option>
                    <option value="수">수</option>
                </select>
            </label>
            <label>
                종류 필터:
                <select onChange={handleTypeChange}>
                    <option value="">All</option>
                    <option value="개">개</option>
                    <option value="고양이">고양이</option>
                </select>
            </label>
        </div>
    );
};

export default Filter;
