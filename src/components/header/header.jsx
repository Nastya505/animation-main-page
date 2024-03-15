import React from 'react';
import gsap from 'gsap';
import Input from '../input/input';
import burger_menu from "../../accets/burger-menu.svg";

import styles from './header.module.css';

const Header = () => {

  const animation = (selectedOptionExists) => {

    const tl = gsap.timeline();
    if (selectedOptionExists) {
        tl.to('#title', { display: 'none', opacity: 0 });
        tl.fromTo(
        '#input-wrapper',
        { opacity: 1, y: 0, color: 'black' },
        {
          maxWidth: '162px',
          y: 0,
          backgroundColor: '#616161',
          alignItems: 'end',
          opacity: 1,
          color: '#fff'
        }
        );
        tl.to('#icon_input', { fill: '#fff', opacity: 1, duration: 0 });
        tl.to('#input', { color: '#fff', opacity: 1, duration: 0 });
        tl.to('#header', {
        opacity: 1,
        backgroundColor: '#464646',
        height: '80px',
        padding: '15px',
        margin: 0,
        alignItems: 'end'
        }).fromTo('#burger', { display: 'none', opacity: 0 },
         { display: 'flex', opacity: 1 });

        document.getElementById('input').blur();
    }
  }

  return (
    <div className={styles.header} id="header">
        <img className={styles.burger_menu} id="burger" src={burger_menu}/>
        <div className={styles.title} id='title'>
          <p>Привет 👋🏼</p>
          <p>Чтобы посмотреть расписание введи </p>
            <span className={styles.text}>группу</span>
        </div>
        <Input animation={animation} />
      </div>
  )
}

export default Header