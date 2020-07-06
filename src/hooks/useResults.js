import { useEffect, useState } from 'react';
import ftn from '../api/ftn';

export default () => {
    const [results, setResults] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');

    const searchApi = async () => {
        console.log('use result hit');
        try {
            const response = await ftn.get('/api/trucks');
            // console.log(response.data.trucks)
            setResults(response.data)
        } catch (err) {
            setErrorMessage(err)            
        }
    };

    useEffect(() => {
        searchApi();
    }, []);

    return [searchApi, results, errorMessage]
};