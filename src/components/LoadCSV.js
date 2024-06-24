import { useEffect } from 'react';
import Papa from 'papaparse';

const LoadCSV = ({ setLostAnimals, setFoundAnimals }) => {
    useEffect(() => {
        fetch('/지해피독 수색용 유실견 리스트.csv')
            .then(response => response.text())
            .then(csvText => {
                Papa.parse(csvText, {
                    header: true,
                    dynamicTyping: true,
                    complete: (result) => {
                        setLostAnimals(result.data);
                    },
                });
            })
            .catch(error => console.error('Error fetching lost animals CSV:', error));

        fetch('/지해피독_찾음.csv')
            .then(response => response.text())
            .then(csvText => {
                Papa.parse(csvText, {
                    header: true,
                    dynamicTyping: true,
                    complete: (result) => {
                        setFoundAnimals(result.data);
                    },
                });
            })
            .catch(error => console.error('Error fetching found animals CSV:', error));
    }, [setLostAnimals, setFoundAnimals]);

    return null;
};

export default LoadCSV;
