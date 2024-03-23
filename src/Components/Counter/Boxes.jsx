import React, { useRef, useState, useEffect } from 'react';
import './Boxes.css';

const Boxes = () => {
    const [count, setCount] = useState(0);
    const [value, setValue] = useState(['', '', '', '', '', '', '', '', '']);
    const titleref = useRef(null);

    useEffect(() => {
        won(value);
    }, [value]);

    const assign = (index) => {
        if (value[index] === '') {
            const newValue = [...value];
            newValue[index] = count % 2 === 0 ? 'X' : 'O';
            setValue(newValue);
            setCount(count + 1);
        }
    };

    const won = (value) => {
        if (
            (value[0] === value[1] && value[1] === value[2] && value[2] !== '') ||
            (value[3] === value[4] && value[4] === value[5] && value[5] !== '') ||
            (value[6] === value[7] && value[7] === value[8] && value[8] !== '') ||
            (value[0] === value[4] && value[4] === value[8] && value[8] !== '')
        ) {
            titleref.current.innerHTML = `${value[0]} won`;
        }
    };

    return (
        <div>
            <h1 className='title' ref={titleref}>TicTacToe Game in React</h1>
            <div>
                <button className='box' onClick={() => assign(0)}>{value[0]}</button>
                <button className='box' onClick={() => assign(1)}>{value[1]}</button>
                <button className='box' onClick={() => assign(2)}>{value[2]}</button>
            </div>
            <div>
                <button className='box' onClick={() => assign(3)}>{value[3]}</button>
                <button className='box' onClick={() => assign(4)}>{value[4]}</button>
                <button className='box' onClick={() => assign(5)}>{value[5]}</button>
            </div>
            <div>
                <button className='box' onClick={() => assign(6)}>{value[6]}</button>
                <button className='box' onClick={() => assign(7)}>{value[7]}</button>
                <button className='box' onClick={() => assign(8)}>{value[8]}</button>
            </div>
        </div>
    );
};

export default Boxes;
