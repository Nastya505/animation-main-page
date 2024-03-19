import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';

import styles from './tooltip.module.css';


const propTypes = {
  title: PropTypes.string.isRequired,
  position: PropTypes.string,
  children: PropTypes.node.isRequired,
};


const Tooltip = ({title, position, children }) => {

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
              color: '#fff',
            }
            );
            tl.to('#icon_input', { fill: '#fff', opacity: 1, duration: 0 });
            tl.to('#list', {textAlign: 'center', opacity: 1, duration: 0 });
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
    

  const node = useRef();
  const [isVisible, setState] = useState(false);
  const handleClick = ({ target }) => {
      if (node.current.contains(target)) {
          return;
      }
      setState(false);
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClick);
    
    return () => {
        document.removeEventListener('mousedown', handleClick);
    };
  }, []);

  return (
    <div className={styles.container}
        data-testid="tooltip"
        ref={node}
        onClick={() => setState(!isVisible)}
    >
        <div data-testid="tooltip-placeholder">{children}</div>
        {isVisible && (
            <div
                className={`${styles.tooltipContent} ${styles[position]}`}
                data-testid="tooltip-content"
            >
                <span className={styles.arrow}></span>
                {title}
            </div>
        )}
    </div>
);
}

Tooltip.defaultProps = {
  position: 'right',
};

Tooltip.propTypes = propTypes;

export default Tooltip;
