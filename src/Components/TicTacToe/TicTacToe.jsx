import React, { useRef, useState } from 'react'
import './TicTacToe.css'
import circle_icon from '../Assets/circle.png'
import cross_icon from '../Assets/cross.png'
let data = ["", "", "", "", "", "", "", "", ""]
export const TicTacToe = () => {
    const [lock, setLock] = useState(false);
    let [count, setCount] = useState(0);
    const titleref = useRef(null);
    const toggle = (w, num) => { 
        if (lock) {
            return 0;
        }
        if (count % 2 == 0) {
            w.target.innerHTML = `<img src='${cross_icon}'>`;
            data[num] = "x";
            // setCount(++count ); 
            ++count;
        }
        else {
            w.target.innerHTML = `<img src='${circle_icon}'>`;
            data[num] = "o";
            // setCount(++count);
            ++count;
        }
        checkwin(data);
    }
    
    const checkwin = (data) => {

        if ((data[0] === data[1]) && (data[1] == data[2]) && (data[2] != ""))
            won(data[2]);
            else if ((data[3] === data[4]) && (data[4] == data[5]) && (data[5] != ""))
            won( data[5]);
           else if ((data[6] === data[7]) && (data[7] == data[8]) && (data[8] != ""))
            won( data[8]);
            else if ((data[0] === data[3]) && (data[3] == data[6]) && (data[6] != ""))
            won( data[6]);
           else if ((data[1] === data[4]) && (data[4] == data[7]) && (data[7] != ""))
            won( data[7]);
            else if ((data[2] === data[5]) && (data[5] == data[8]) && (data[8] != ""))
            won( data[8]);
            else if ((data[0] === data[4]) && (data[4] == data[8]) && (data[8] != ""))
            won( data[8]);
            else if ((data[2] === data[4]) && (data[4] == data[6]) && (data[6] != ""))
            won( data[6]);
    }
    const checkWinner = (winner) => {
        if (winner === "x")
        {
            
        }
        else {
            
        }  
        
    }
    console.log("rishabh");
    const won = (winner) => {

        setLock(true);
        if (winner === "x") {
            titleref.current.innerHTML=`Congratulations X wins`
        }
        else {
            titleref.current.innerHTML=`Congratulations O wins`

        }
        
    }
    console.log("maggy",);
    const reset = () => {
        setLock(false);
        data = ["", "", "", "", "", "", "", "", "",];
        titleref.current.innerHTML = `Tic Tac Toe Game in <span>React</span>`
    }
    console.log("shiva","rishabh");
  return (
      <div className='container'>
          <h1 className="title" ref={titleref }> Tic Tac Toe Game in <span>Raect</span></h1>
          <div className="board">
              <div className="row1">
                  <div className="boxes" onClick={(w)=>{toggle(w,0)}}></div>
                  <div className="boxes" onClick={(w)=>{toggle(w,1)}}></div>
                  <div className="boxes" onClick={(w)=>{toggle(w,2)}}></div>
              </div>
              <div className="row2">
                  <div className="boxes"onClick={(w)=>{toggle(w,3)}}></div>
                  <div className="boxes"onClick={(w)=>{toggle(w,4)}}></div>
                  <div className="boxes"onClick={(w)=>{toggle(w,5)}}></div>
              </div>
              <div className="row3">
                  <div className="boxes"onClick={(w)=>{toggle(w,6)}}></div>
                  <div className="boxes"onClick={(w)=>{toggle(w,7)}}></div>
                  <div className="boxes"onClick={(w)=>{toggle(w,8)}}></div>
              </div>
          </div>
          <button className='reset' onClick={()=>(reset())}>Reset</button>
          </div>
  );
};