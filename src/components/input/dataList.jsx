import React, { useState } from "react";
import styles from "./dataList.module.css";

const DataList = ({ options }) => {
  const [filter, setFilter] = useState("");
  const [active, setActive] = useState(false);

  const showList = filter === "" || options.some(d => d.name.includes(filter));

  const handleInputChange = (e) => {
    setFilter(e.target.value);
    setActive(true);
  };

  const handleOptionClick = (text) => {
    setFilter(text);
    setActive(false);
  };

  return (
  <>
      <input
        className={styles.input}
        type="text"
        value={filter}
        onChange={handleInputChange}
        onFocus={() => setActive(true)}
      />
      <ul className={`${styles.list} ${active ? styles.active : ""}`} >
        {showList &&
          options
            .filter(d => filter === "" || (d.name && d.name.includes(filter)))
            .map((option) => (
              <li key={option.id} onClick={() => handleOptionClick(option.name)}>
                {option.name}
              </li>
            ))}
      </ul>
  </>

  );
};


export default DataList;