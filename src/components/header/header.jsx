import React from 'react';
import Input from '../input/input';
import burger_menu from "../../accets/burger-menu.svg";

import styles from './header.module.css';

const Header = () => {

  return (
    <div className={styles.header} id="header">
        <img className={styles.burger_menu} id="burger" src={burger_menu}/>
        <div className={styles.title} id='title'>
          <p>Привет 👋🏼</p>
          <p>Чтобы посмотреть расписание введи </p>
            <span className={styles.text}>группу</span>
        </div>
        <Input />
      </div>
  )
}

export default Header