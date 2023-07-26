import styles from '../Mobile.module.css' ;
import Content from './Content';
import Button  from "./Button";
import Footer from './Footer' ;

import React , {useState} from 'react' ;

function Container(props) {
 console.log(props.advice , props.adviceNumber) ;
  return (
    <div className={styles.Container}>
        <Content advice = {props.advice} adviceNumber = {props.adviceNumber} > </Content>
    </div>
  );
}

export default Container ;

