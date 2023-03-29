import React from 'react'
import './Sidebar.css'
import TwitterIcon from '@mui/icons-material/Twitter';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import { blue } from '@mui/material/colors';

function Sidebar() {
  return (
    <div className="sidebar">
        <div className="icon__container">
            <TwitterIcon className="icon" id="twitter__icon" fontSize="large" />
            <SearchOutlinedIcon className="icon" fontSize="large" />
            <SettingsOutlinedIcon className="icon" fontSize="large" />
        </div>
    </div>
  )
}

export default Sidebar