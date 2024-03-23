import React, { useState } from 'react'

const Counter = () => {
    const [ct, setCt] = useState([0, 0])

    console.log("Basic TicTac", ct);


    return <div>

        <div>Test..ct {ct[0]}</div>
        <div>
            <button onClick={() => {
                const arr = [...ct]
                arr[0] = arr[0] - 1;

                setCt(arr);
            }} >Decrement </button>
            <button onClick={() => {
                const arr = [...ct]
                arr[0] = arr[0] + 1;

                setCt(arr);

            }} >Increment </button>
        </div>
        <div>
            <div>Tect..ctTwo{ct[1]}</div>
            <div>
                <button onClick={() => {
                    const arr = [...ct]
                    arr[1] = arr[1] - 1;

                    setCt(arr);
                }} >Decrement </button>
                <button onClick={() => {
                    const arr = [...ct]
                    arr[1] = arr[1] + 1;

                    setCt(arr);

                }} > </button>
            </div>
        </div>
    </div>
}
export default Counter;