import React from 'react'
import './Header.css'
import HeaderOptions from './HeaderOptions'
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
function Header() {
  return (
    <div className="header">
        <div className="search__box">
            <input type="text" placeholder="Search Better" className="search__twitter" />
            <SettingsOutlinedIcon className="settingsIcon" />
        </div>
        <HeaderOptions className="header__options" />
    </div>
  )
}

export default Header