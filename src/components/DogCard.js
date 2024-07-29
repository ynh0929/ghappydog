import React from 'react';
import { Link } from 'react-router-dom';

const DogCard = ({ dog }) => {
    const imageUrl = dog['이미지']
        ? `${process.env.PUBLIC_URL}/images/${dog['이미지'].replace(/\.([a-zA-Z]+)$/, match => match.toLowerCase())}`
        : `${process.env.PUBLIC_URL}/images/default_photo.jpg`;

    return (
        <div className="dog-card">
            <div className="dog-image-container">
                <img src={imageUrl} alt={dog['이름']} className="dog-image" />
                <div className="date-label">
                    <span>{dog['유실 날짜'].split('-')[2]}</span>
                    <small>{dog['유실 날짜'].split('-').slice(0, 2).join('-')}</small>
                </div>
            </div>
            <div className="dog-info">
                <h2>{dog['이름']}</h2>
                <div className="dog-card-info">
                    <div className="info-row">
                        <span className="label">유실 날짜:</span>
                        <span className="value">{dog['유실 날짜']}</span>
                    </div>
                    <div className="info-row">
                        <span className="label">성별 (중성화):</span>
                        <span className="value">{dog['성별']} ({dog['중성화']})</span>
                    </div>
                    <div className="info-row">
                        <span className="label">견종/묘종:</span>
                        <span className="value">{dog['견종/묘종']}</span>
                    </div>
                    <div className="info-row">
                        <span className="label">유실 장소:</span>
                        <span className="value">{dog['도']} {dog['시, 군, 구']} {dog['동, 읍, 면']} {dog['세부 주소']}</span>
                    </div>
                </div>
                <div className="actions-container">
                    {dog['URL'] && (
                        <a href={dog['URL']} target="_blank" rel="noopener noreferrer" className="action-link">카톡 오픈채팅</a>
                    )}
                    <Link to={`/dog-details/${dog['이름']}`} className="action-link">더 보기 ...</Link>
                </div>
            </div>
        </div>
    );
};

export default DogCard;
