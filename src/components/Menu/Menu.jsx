import React from 'react'
import rPhoto from '../../assets/portal.gif'
import s from './Menu.module.css'
import Cloud from './Cloud/Cloud'

const Menu = (props) => {
    return (
        <div className={s.rick_menu}>
            <img className={s.rick_photo} alt="rick" src={rPhoto}/>
            <Cloud pageChanger={props.pageChanger}/>
        </div>
    )
}

export default Menu
