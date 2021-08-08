import React, { useContext } from 'react';
import { NativeSelect, FormControl } from '@material-ui/core';
import styles from './CountryPicker.module.css';
import { GlobalState } from '../../ContextApi';

const CountryPicker = () => {
    const {CountryChange, allCountries} = useContext(GlobalState);
    // const {CountryChange, allCountries} = useContext(GlobalState);
    return (
    <FormControl className={styles.formControl}>
        <NativeSelect defaultValue='' onChange={ (e)=>{ CountryChange(e.target.value)} }>
          <option value="">Global</option>
          {
            
              allCountries.map((country, i)=>(
                  <option key={i} value={country.id} >{country.country}</option>
              ))
          }
        </NativeSelect>
      </FormControl>
    )
}

export default CountryPicker;
