import React from 'react';
import { useParams } from 'react-router-dom';

const DogDetails = ({ animals }) => {
    const { name } = useParams();
    const dog = animals.find(dog => dog['이름'] === name);

    if (!dog) {
        return <p>해당 강아지를 찾을 수 없습니다.</p>;
    }

    const imageUrl = dog['이미지']
        ? `${process.env.PUBLIC_URL}/images/${dog['이미지'].replace(/\.([a-zA-Z]+)$/, match => match.toLowerCase())}`
        : `${process.env.PUBLIC_URL}/images/default_photo.jpg`;

    // Assuming you have additional image URLs in the data
    const additionalImages = [
        dog['추가 이미지1'],
        dog['추가 이미지2'],
        dog['추가 이미지3'],
        dog['추가 이미지4']
    ].map(image => image ? `${process.env.PUBLIC_URL}/images/closeup/${image.replace(/\.([a-zA-Z]+)$/, match => match.toLowerCase())}` : `${process.env.PUBLIC_URL}/images/default_photo.jpg`);

    return (
        <div className="dog-details container mx-auto p-4">
            <div className="dog-details-content">
                <div className="dog-details-info">
                    <h2>{dog['이름']}</h2>
                    <p><strong>유실 날짜:</strong> {dog['유실 날짜']}</p>
                    <p><strong>성별:</strong> {dog['성별']}</p>
                    <p><strong>견종/묘종:</strong> {dog['견종/묘종']}</p>
                    <p><strong>색상:</strong> {dog['색상']}</p>
                    <p><strong>몸무게:</strong> {dog['몸무게']}</p>
                    <p><strong>유실 장소:</strong> {`${dog['시, 군, 구']}, ${dog['동, 읍, 면']}, ${dog['세부 주소']}`}</p>
                    <p><strong>세부 특징:</strong> {dog['그 외 세부 특징']}</p>
                    <p><strong>마지막 목격 지역:</strong> {dog['마지막 제보 지역']}</p>
                    <p><strong>인식칩:</strong> {dog['인식칩']}</p>
                </div>
                <div className="dog-details-image">
                    <img src={imageUrl} alt={dog['이름']} className="dog-details-img" />
                </div>
            </div>
            <p><strong>상세 이미지: </strong></p><br />
            <div className="additional-images mt-4">
                {additionalImages.map((img, index) => (
                    <img key={index} src={img} alt={`${dog['이름']} 추가 이미지 ${index + 1}`} className="additional-image rounded shadow-lg" />
                ))}
            </div>
        </div>
    );
};

export default DogDetails;
