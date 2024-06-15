import { useEffect } from 'react';
import Papa from 'papaparse';

const LoadCSV = ({ setDogs }) => {
    useEffect(() => {
        fetch(`${process.env.PUBLIC_URL}/지해피독 수색용 유실견 리스트.csv`)
            .then(response => response.text())
            .then(csvText => {
                Papa.parse(csvText, {
                    header: true,
                    dynamicTyping: true,
                    complete: (result) => {
                        console.log(result.data); // Debug: Log parsed data
                        setDogs(result.data);
                    },
                });
            })
            .catch(error => console.error('Error fetching CSV:', error)); // Debug: Log fetch error
    }, [setDogs]);

    return null;
};

export default LoadCSV;
