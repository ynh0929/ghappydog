import React from 'react';
import { Link } from 'react-router-dom';

const DogCard = ({ dog }) => {
    //const imageUrl = dog['이미지'] ? `${process.env.PUBLIC_URL}/images/${dog['이미지']}` : `${process.env.PUBLIC_URL}/images/default_photo.jpg`;
    const imageUrl = dog['이미지'] 
    ? `${process.env.PUBLIC_URL}/images/${dog['이미지'].replace(/\.([a-zA-Z]+)$/, match => match.toLowerCase())}` 
    : `${process.env.PUBLIC_URL}/images/default_photo.jpg`;

    return (
        <div className="dog-card" data-location={dog['지역']} data-date={dog['유실 날짜']} data-gender={dog['성별']}>
            <img src={imageUrl} alt={dog['이름']} />
            <h2>{dog['이름']}</h2>
            <p><strong>유실 날짜:</strong> {dog['유실 날짜']}</p>
            <p><strong>성별: </strong>{dog['성별']}</p>
            <p><strong>견종/묘종: </strong>{dog['견종/묘종']}</p>
            <p><strong>유실 장소: </strong>{dog['시, 군, 구']}, {dog['동, 읍, 면']}, {dog['세부 주소']}</p>
            {dog['URL'] && (
                <p>
                    <strong>카톡 오픈채팅: </strong>
                    <a href={dog['URL']} target="_blank" rel="noopener noreferrer">{dog['URL']}</a>
                </p>
            )}
            <div className="more-details">
                <Link to={`/dog-details/${dog['이름']}`}>더 보기</Link>
            </div>
        </div>
    );
};

export default DogCard;
