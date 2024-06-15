import { useEffect } from 'react';
import Papa from 'papaparse';

const LoadCSV = ({ setDogs }) => {
    useEffect(() => {
        fetch(process.env.PUBLIC_URL + '/지해피독 수색용 유실견 리스트.csv')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.text();
            })
            .then(csvText => {
                console.log('CSV Text:', csvText); // Debug: Log raw CSV text
                Papa.parse(csvText, {
                    header: true,
                    dynamicTyping: true,
                    complete: (result) => {
                        console.log('Parsed Data:', result.data); // Debug: Log parsed data
                        const columnNames = result.meta.fields; // Get column names
                        console.log('Column Names:', columnNames); // Debug: Log column names
                        setDogs(result.data);
                    },
                    error: (error) => {
                        console.error('Parsing Error:', error); // Debug: Log parsing errors
                    }
                });
            })
            .catch(error => console.error('Error fetching CSV:', error)); // Debug: Log fetch error
    }, [setDogs]);

    return null; // This component doesn't render anything
};

export default LoadCSV;
