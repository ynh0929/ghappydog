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

    const additionalImages = [
        dog['추가 이미지1'],
        dog['추가 이미지2'],
        dog['추가 이미지3'],
        dog['추가 이미지4']
    ].map(image => image ? `${process.env.PUBLIC_URL}/images/closeup/${image.replace(/\.([a-zA-Z]+)$/, match => match.toLowerCase())}` : `${process.env.PUBLIC_URL}/images/default_photo.jpg`);

    return (
        <div className="dog-details container mx-auto p-4">
            <div className="dog-details-header">
                <h2>{dog['이름']}</h2>
            </div>
            <div className="dog-details-content">
                <table className="dog-details-table">
                    <tbody>
                        <tr>
                            <td rowSpan="8" className="dog-details-image" border="none">
                                <img src={imageUrl} alt={dog['이름']} className="dog-details-img" />
                            </td>
                        </tr>
                        <tr>
                        <td><strong>유실 날짜:</strong></td>
                        <td>{dog['유실 날짜']}</td>
                        </tr>
                        <tr>
                            <td><strong>성별 (중성화):</strong></td>
                            <td>{dog['성별']} ({dog['중성화']})</td>
                        </tr>
                        <tr>
                            <td><strong>견종/묘종:</strong></td>
                            <td>{dog['견종/묘종']}</td>
                        </tr>
                        <tr>
                            <td><strong>색상:</strong></td>
                            <td>{dog['색상']}</td>
                        </tr>
                        <tr>
                            <td><strong>몸무게:</strong></td>
                            <td>{dog['몸무게']}</td>
                        </tr>
                        <tr>
                            <td><strong>유실 장소:</strong></td>
                            <td>{`${dog['도']} ${dog['시, 군, 구']} ${dog['동, 읍, 면']} ${dog['세부 주소']}`}</td>
                        </tr>
                        <tr>
                            <td><strong>세부 특징:</strong></td>
                            <td>{dog['그 외 세부 특징']}</td>
                        </tr>
                        <tr>
                            <td><strong>마지막 목격 지역:</strong></td>
                            <td>{dog['마지막 제보 지역']}</td>
                        </tr>
                        <tr>
                            <td><strong>인식칩:</strong></td>
                            <td>{dog['인식칩']}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="additional-images-section">
                <p><strong>상세 이미지: </strong></p><br />
                <div className="additional-images mt-4">
                    {additionalImages.map((img, index) => (
                        <img key={index} src={img} alt={`${dog['이름']} 추가 이미지 ${index + 1}`} className="additional-image rounded shadow-lg" />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default DogDetails;
