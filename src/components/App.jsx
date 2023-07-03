import "../styles.css";
import Content from './Content';
import Button  from "./Button";
import Footer from './Footer' ;
import React , {useState} from 'react' ;

function App() {
  const [adviceNumber , setAdviceNumber] = useState("1") ;
  const [advice , setAdvice] = useState("Be Kind!") ;



  function updateAdvice(){
     fetch("https://api.adviceslip.com/advice") 
     .then((res)=>{
        return res.json()
     })
     .then((adv)=>{
        const {id , advice} = adv.slip ;
        //console.log(id,advice) ;
        setAdviceNumber(id) ;
        setAdvice(advice) ;
     })

  }

  
  return (
    <div className="App">
        <Content advice = {advice} adviceNumber = {adviceNumber} > </Content>
        <Button manageClick={updateAdvice} > </Button>
        <Footer> </Footer>
    </div>
  );
}

export default App ;

