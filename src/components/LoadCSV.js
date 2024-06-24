import { useEffect } from 'react';
import Papa from 'papaparse';

const LoadCSV = ({ setLostAnimals, setFoundAnimals }) => {
    useEffect(() => {
        const loadCSVData = async () => {
            const lostAnimalsResponse = await fetch('/지해피독 수색용 유실견 리스트.csv');
            const lostAnimalsText = await lostAnimalsResponse.text();

            Papa.parse(lostAnimalsText, {
                header: true,
                dynamicTyping: true,
                complete: (result) => {
                    setLostAnimals(result.data);
                },
            });

            const foundAnimalsResponse = await fetch('/지해피독_찾음.csv');
            const foundAnimalsText = await foundAnimalsResponse.text();

            Papa.parse(foundAnimalsText, {
                header: true,
                dynamicTyping: true,
                complete: (result) => {
                    setFoundAnimals(result.data);
                },
            });
        };

        loadCSVData();
    }, [setLostAnimals, setFoundAnimals]);

    return null;
};

export default LoadCSV;
