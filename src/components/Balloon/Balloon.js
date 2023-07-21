import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import styles from './Ballon.module.css';

const Balloon = ({ style }) => {
  return <div className={styles.balloon} style={style} />;
};

export default Balloon;
