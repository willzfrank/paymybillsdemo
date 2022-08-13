import Card from '../Card/Card';
import './Center.css';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import BarChart from '../Barchart/BarChart';
import SearchIcon from '@mui/icons-material/Search';
import * as React from 'react';
import InputAdornment from '@mui/material/InputAdornment';

import TextField from '@mui/material/TextField';
export const Center = () => {
  return (
    <div className="Center--container">
      <div>
        <TextField
          id="input-with-icon-textfield"
          sx={{
            marginBottom: '2rem',
            width: '70%',
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
          variant="standard"
        />
      </div>

      <div className="center--container--text">
        <p>
          Good Morning, <span className="bold">Samuel</span>
        </p>
        <span>What will you like to do today ?</span>
      </div>

      <div>
        <BarChart />
      </div>
      <div className="center--container--card">
        <Card name="Buy Airtime" icon={PhoneAndroidIcon} />
        <Card name="Buy Data" icon={PhoneAndroidIcon} />
        <Card name="Buy Cable tv" icon={PhoneAndroidIcon} />
        <Card name="Buy Electricity" icon={PhoneAndroidIcon} />
        <Card name="Internet" icon={PhoneAndroidIcon} />
        <Card name="Buy ticket" icon={PhoneAndroidIcon} />
      </div>
    </div>
  );
};
