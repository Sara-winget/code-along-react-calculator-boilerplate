import React from 'react';
import { useState } from "react";
function Calculator(){
  const [display,setDisplay]=useState('');
  const handleClick=(value)=>{
    if(value==='=')
      evaluateExpression();
    else if(value === 'AC')
       clearDisplay();
      else if(value ==='Del')
        deleteLastDigit();
      else
      setDisplay(display+value);

  }
  const evaluateExpression=()=>{
    
      const result = Function(`return ${display}`)
      setDisplay(result().toString())
    
  }
  const clearDisplay=()=>{
    setDisplay('');
  }
const deleteLastDigit=()=>{
  const newDisplay=display.slice(0,-1)
  setDisplay(newDisplay)
}

  return (
    <>
    <div style={{display:"flex" ,flexDirection:'column' ,height:1500,width:500,marginRight:200}}>
      <div className="text area">
        <h1>Calculator</h1>
        <textarea style={{backgroundColor:'lightgray',color:'black',fontSize:50}}cols={17} rows={10} value={display} readOnly/>
      </div>
      <div style={{fontSize:20,fontWeight:'bold'}}>
        <div className="row1" style={{display:'flex',height:50}}>
          <div style={{flexGrow:2, border:'1px solid lightBlue',padding:10}} onClick={()=>{handleClick('AC')}}>AC</div>
          <div style={{border:'1px solid lightBlue',flexGrow:1 ,padding:10}} onClick={()=>{handleClick('Del')}}>Del</div>
          <div style={{border:'1px solid lightBlue',flexGrow:1 ,padding:10}} onClick={()=>{handleClick('/')}}> / </div>
        </div>
        <div style={{display:'flex'}}>
          <div style={{border:'1px solid lightBlue' ,flexGrow:1 ,padding:10}} onClick={()=>{handleClick('2')}}>2</div>
          <div style={{border:'1px solid lightBlue' ,flexGrow:1 ,padding:10}} onClick={()=>{handleClick('1')}}>1</div>
          <div style={{border:'1px solid lightBlue' ,flexGrow:1 ,padding:10}} onClick={()=>{handleClick('3')}}>3</div>
          <div style={{border:'1px solid lightBlue' ,flexGrow:1 ,padding:10}} onClick={()=>{handleClick('*')}}>*</div>
        </div>
        <div style={{display:'flex'}}>
          <div style={{border:'1px solid lightBlue' ,flexGrow:1 ,padding:10}} onClick={()=>{handleClick('4')}}>4</div>
          <div style={{border:'1px solid lightBlue' ,flexGrow:1 ,padding:10}} onClick={()=>{handleClick('5')}}>5</div>
          <div style={{border:'1px solid lightBlue' ,flexGrow:1 ,padding:10}} onClick={()=>{handleClick('6')}}>6</div>
          <div style={{border:'1px solid lightBlue' ,flexGrow:1 ,padding:10}} onClick={()=>{handleClick('+')}}>+</div>
        </div>
        <div style={{display:'flex'}}>
          <div style={{border:'1px solid lightBlue', flexGrow:1 ,padding:10}} onClick={()=>{handleClick('7')}}>7</div>
          <div style={{border:'1px solid lightBlue', flexGrow:1 ,padding:10}} onClick={()=>{handleClick('8')}}>8</div>
          <div style={{border:'1px solid lightBlue', flexGrow:1 ,padding:10}} onClick={()=>{handleClick('9')}}>9</div>
          <div style={{border:'1px solid lightBlue', flexGrow:1 ,padding:10}} onClick={()=>{handleClick('-')}}>-</div>
        </div>
        <div style={{display:'flex'}}>
          <div style={{border:'1px solid lightBlue',flexGrow:1 ,padding:10}}>.
            </div>
          <div style={{border:'1px solid lightBlue',flexGrow:1 ,padding:10}} onClick={()=>{handleClick('0')}}>0</div>
          <div style={{flexGrow:2,border:'1px solid lightBlue',padding:10}}    
             onClick={()=>{handleClick('=')}}> = </div>
        </div>

      </div>
    </div>
    </>
  )
}

export default Calculator