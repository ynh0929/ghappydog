import { useEffect } from 'react';
import Papa from 'papaparse';

const LoadCSV = ({ setLostAnimals, setFoundAnimals }) => {
    useEffect(() => {
        const loadCSV = (url, setData) => {
            fetch(url)
                .then(response => response.text())
                .then(csvText => {
                    Papa.parse(csvText, {
                        header: true,
                        dynamicTyping: true,
                        complete: (result) => {
                            setData(result.data);
                        },
                    });
                })
                .catch(error => console.error(`Error fetching ${url}:`, error));
        };

        loadCSV(`${process.env.PUBLIC_URL}/지해피독 수색용 유실견 리스트.csv`, setLostAnimals);
        loadCSV(`${process.env.PUBLIC_URL}/지해피독_찾음.csv`, setFoundAnimals);
    }, [setLostAnimals, setFoundAnimals]);

    return null;
};

export default LoadCSV;
