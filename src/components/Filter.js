import React from 'react';

const Filter = ({ setLocationFilter, setDateFilter, setGenderFilter, setTypeFilter, setSortOrder }) => {
    const handleLocationChange = (e) => setLocationFilter(e.target.value);
    const handleDateChange = (e) => setDateFilter(e.target.value);
    const handleGenderChange = (e) => setGenderFilter(e.target.value);
    const handleTypeChange = (e) => setTypeFilter(e.target.value);
    //const handleSortOrderChange = (e) => setSortOrder(e.target.value);
    
    return (
        <div className="filter">
            <label>
                위치:
                <input type="text" onChange={handleLocationChange} />
            </label>
            <label>
                유실 날짜:
                <input type="text" placeholder="yyyy, yyyy-mm, yyyy-mm-dd" onChange={handleDateChange} />
            </label>
            <label>
                성별:
                <select onChange={handleGenderChange}>
                    <option value="">All</option>
                    <option value="암">암</option>
                    <option value="수">수</option>
                </select>
            </label>
            <label>
                종류:
                <select onChange={handleGenderChange}>
                    <option value="">All</option>
                    <option value="개">개</option>
                    <option value="고양이">고양이</option>
                </select>
            </label>
            {/* <label>
                정렬 순서:
                <select onChange={handleSortOrderChange}>
                    <option value="asc">오름차순</option>
                    <option value="desc">내림차순</option>
                </select>
            </label> */}
        </div>
    );
};

export default Filter;
