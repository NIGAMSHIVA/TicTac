import React, { useState, useRef } from 'react';
import './MyTicTac.css';

const MyTicTac = () => {
    const [count, setCount] = useState(0);
    const [value, setValue] = useState(['', '', '', '', '', '', '', '', '']);
    const [lock, setLock] = useState(true);
    const titleref = useRef(null);
    const chanceref = useRef(null);
    const assignValue = (index) => {
        const arr = [...value];
        if (lock) {
            if (count % 2 === 0) {
                arr[index] = "X";
                chanceref.current.innerHTML = `Its O Turn`;
            } else {
                arr[index] = "O";
                chanceref.current.innerHTML = `Its x Turn`;
            }

            setCount(count + 1);
            setValue(arr);
            checkWin(arr);
          
        }
    };

    const checkWin = (arr) => {
        if ((arr[0] === arr[1]) && (arr[1] === arr[2]) && (arr[2] !== '')) {
            chanceref.current.innerHTML = `Congratulations`;
            titleref.current.innerHTML = `${arr[0]} won the game`;
            setLock(false);
        }
        if ((arr[3] === arr[4]) && (arr[4] === arr[5]) && (arr[5] !== '')) {
            chanceref.current.innerHTML = `Congratulations`;
            titleref.current.innerHTML = `${arr[3]} won the game`;
            setLock(false);
        }
        if ((arr[6] === arr[7]) && (arr[7] === arr[8]) && (arr[8] !== '')) {
            chanceref.current.innerHTML = `Congratulations`;
            titleref.current.innerHTML = `${arr[6]} won the game`;
            setLock(false);
        }
        if ((arr[0] === arr[4]) && (arr[4] === arr[8]) && (arr[8] !== '')) {
            chanceref.current.innerHTML = `Congratulations`;
            titleref.current.innerHTML = `${arr[0]} won the game`;
            setLock(false);
        }
        if ((arr[2] === arr[4]) && (arr[4] === arr[6]) && (arr[2] !== '')) {
            chanceref.current.innerHTML = `Congratulations`;
            titleref.current.innerHTML = `${arr[2]} won the game`;
            setLock(false);
        }
        if ((arr[0] === arr[3]) && (arr[3] === arr[6]) && (arr[6] !== '')) {
            chanceref.current.innerHTML = `Congratulations`;
            titleref.current.innerHTML = `${arr[0]} won the game`;
            setLock(false);
        }
        if ((arr[1] === arr[4]) && (arr[4] === arr[7]) && (arr[7] !== '')) {
            chanceref.current.innerHTML = `Congratulations`;
            titleref.current.innerHTML = `${arr[1]} won the game`;
            setLock(false);
        }
        if ((arr[2] === arr[5]) && (arr[5] === arr[8]) && (arr[8] !== '')) {
            chanceref.current.innerHTML = `Congratulations`;
            titleref.current.innerHTML = `${arr[2]} won the game`;
            setLock(false);
        }
        // Add similar checks for other win conditions
    };

    const valueReset = () => {
        
        setValue(['', '', '', '', '', '', '', '', '']);
        setLock(true);
        titleref.current.innerHTML = `Tic Tac Toe Game in <span>React</span>`

    }


    return (
        <div className='boxes'>
            <h1 className="title" ref={titleref}>TicTacToe Game in <span>React</span></h1>
            <h1 className="chance" ref={chanceref}>Start the Game</h1>
            <div className="container">
                <div className="box" onClick={() => assignValue(0)}>{value[0]}</div>
                <div className="box" onClick={() => assignValue(1)}>{value[1]}</div>
                <div className="box" onClick={() => assignValue(2)}>{value[2]}</div>
            </div>
            <div className="container">
                <div className="box" onClick={() => assignValue(3)}>{value[3]}</div>
                <div className="box" onClick={() => assignValue(4)}>{value[4]}</div>
                <div className="box" onClick={() => assignValue(5)}>{value[5]}</div>
            </div>
            <div className="container">
                <div className="box" onClick={() => assignValue(6)}>{value[6]}</div>
                <div className="box" onClick={() => assignValue(7)}>{value[7]}</div>
                <div className="box" onClick={() => assignValue(8)}>{value[8]}</div>
            </div>
            <div className='reset'>
                <button className='Reset' onClick={() => valueReset()} >Reset</button>
                
            </div>
         
        </div>
    );
};
export default MyTicTac;
