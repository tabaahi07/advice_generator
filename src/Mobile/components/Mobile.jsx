import styles from "../Mobile.module.css";
import Container from "./Container";
import Button from "./Button";
import Footer from "./Footer";
import React, { useState } from "react";

function Mobile() {
  const [adviceNumber, setAdviceNumber] = useState("1");
  const [advice, setAdvice] = useState("Be Kind!");


  
  function updateAdvice() {
    fetch("https://api.adviceslip.com/advice")
      .then((res) => {
        return res.json();
      })
      .then((adv) => {
        const { id, advice } = adv.slip;
        console.log(id, advice);
        setAdvice(advice);
        setAdviceNumber(id);
      });
  }
 

  return (
    <div className={styles.Mobile}>
      <Container styles={styles} advice={advice} adviceNumber={adviceNumber}>
      </Container>
      <Button styles={styles} manageClick={updateAdvice}> </Button>
      <Footer styles={styles}> </Footer>
    </div>
  );
}

export default Mobile;
