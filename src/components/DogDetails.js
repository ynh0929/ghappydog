import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

const DogDetails = ({ animals }) => {
    const { name } = useParams();
    const [selectedImage, setSelectedImage] = useState(null);

    const dog = animals.find(dog => dog['이름'] === name);

    if (!dog) {
        return <p>해당 강아지를 찾을 수 없습니다.</p>;
    }

    const imageUrl = dog['이미지']
        ? `${process.env.PUBLIC_URL}/images/${dog['이미지'].replace(/\.([a-zA-Z]+)$/, match => match.toLowerCase())}`
        : `${process.env.PUBLIC_URL}/images/default_photo.jpg`;

    const additionalImages = [
        dog['추가 이미지1'],
        dog['추가 이미지2'],
        dog['추가 이미지3'],
        dog['추가 이미지4']
    ].filter(image => image) // Filter out empty entries
     .map(image => `${process.env.PUBLIC_URL}/images/closeup/${image.replace(/\.([a-zA-Z]+)$/, match => match.toLowerCase())}`);

    const handleImageClick = (image) => {
        setSelectedImage(image);
    };

    const handleCloseModal = () => {
        setSelectedImage(null);
    };

    return (
        <div className="dog-details container mx-auto p-4">
            <div className="dog-details-header">
                <h2>{dog['이름']}</h2>
            </div>
            <div className="dog-details-content">
                <table className="dog-details-table">
                    <tbody>
                        <tr>
                            <td className="dog-details-info">
                                <p><strong>유실 날짜:</strong> {dog['유실 날짜']}</p>
                                <p><strong>성별:</strong> {dog['성별']}</p>
                                <p><strong>견종/묘종:</strong> {dog['견종/묘종']}</p>
                                <p><strong>색상:</strong> {dog['색상']}</p>
                                <p><strong>몸무게:</strong> {dog['몸무게']}</p>
                                <p><strong>유실 장소:</strong> {`${dog['도']} ${dog['시, 군, 구']} ${dog['동, 읍, 면']} ${dog['세부 주소']}`}</p>
                                <p><strong>세부 특징:</strong> {dog['그 외 세부 특징']}</p>
                                <p><strong>마지막 목격 지역:</strong> {dog['마지막 제보 지역']}</p>
                                <p><strong>인식칩:</strong> {dog['인식칩']}</p>
                            </td>
                            <td className="dog-details-image">
                                <img src={imageUrl} alt={dog['이름']} className="dog-details-img" onClick={() => handleImageClick(imageUrl)} />
                                <div className="additional-images">
                                    {additionalImages.map((img, index) => (
                                        <img key={index} src={img} alt={`${dog['이름']} 추가 이미지 ${index + 1}`} className="additional-image rounded shadow-lg" onClick={() => handleImageClick(img)} />
                                    ))}
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            {selectedImage && (
                <div className="modal" onClick={handleCloseModal}>
                    <span className="close" onClick={handleCloseModal}>&times;</span>
                    <img className="modal-content" src={selectedImage} alt="Zoomed" />
                </div>
            )}
        </div>
    );
};

export default DogDetails;
