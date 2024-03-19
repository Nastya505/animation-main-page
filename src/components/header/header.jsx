import React from 'react';
import gsap from 'gsap';
import Input from '../input/input';
import burger_menu from "../../accets/burger-menu.svg";

import styles from './header.module.css';

const Header = () => {

  function inputAnimation() {
    const tl = gsap.timeline();
    tl.to('#icon_input', { fill: '#fff', opacity: 1, duration: .1 });
    tl.to('#input', { color: '#fff', opacity: 1, duration: .1})
    .fromTo('#burger', { display: 'none', opacity: 0, duration:0 },{ display: 'flex', opacity: 1, duration:.5 })
    tl.to('#list', { textAlign: 'center', opacity: 1, duration: 0 });
    document.getElementById('input').blur();
  }

  const animation = (selectedOptionExists) => {
    const tl = gsap.timeline();
    if (selectedOptionExists) {
        tl.to('#title', { display: 'none', opacity: 0 }) ; 
        tl.to('#header', {
          opacity: 1,
          backgroundColor: '#464646',
          height: '80px',
          padding: '15px',
          margin: 0,
          alignItems: "end", 
          justifyContent: "flex-end"
        });
        tl.fromTo(
          '#input-wrapper',
          { opacity: 1, y: 0, color: 'black' },
          {
            maxWidth: '162px',
            y: 0,
            backgroundColor: '#616161',
            opacity: 1,
            color: '#fff',
          }
          );
        
        tl.add(inputAnimation)
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