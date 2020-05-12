import React, {useState, useEffect} from 'react'; 
import { NativeSelect, FormControl } from '@material-ui/core';
import {fetchCountries} from '../../api';

const CountryPicker = ({handleCountryChange}) => {
    const [fetchedCountries, setFetchedCountries] = useState([]);

    useEffect(() => {
        const fetchAPI = async () => {
            setFetchedCountries(await fetchCountries());
        }
        fetchAPI();
    }, [setFetchedCountries]);
    
    return (
        <FormControl style={styles.formControl}>
            <NativeSelect defaultValue="" onChange={(e) => handleCountryChange(e.target.value) }>
                <option value="">Global</option> 
                {fetchedCountries.map((country, i) => 
                    <option key={i} value={country}>{country}</option>
                )}
            </NativeSelect>
        </FormControl>
    )
}

const styles = {
    formControl: {
        width: '30%',
        marginBottom: '30px', 
    }
}

export default CountryPicker;