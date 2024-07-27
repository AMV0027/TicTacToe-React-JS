import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import blipSound from '../assets/click.mp3';
import wonSound from '../assets/won.mp3';
import './style.css';

function AiTicTacToe() {
    const boxes = "select-none border-blue-400 border-2 p-2 rounded-lg w-20 h-20 flex flex-col justify-center items-center m-[2px]";
    const icon = "text-4xl font-sans text-white";
    const initialData = ["", "", "", "", "", "", "", "", ""];

    const clickAudio = new Audio(blipSound);
    const wonAudio = new Audio(wonSound);

    const [count, setCount] = useState(0);
    const [lock, setLock] = useState(false);
    const [xscore, setXscore] = useState(0);
    const [yscore, setYscore] = useState(0);
    const [data, setData] = useState(initialData);
    const [isAiTurn, setIsAiTurn] = useState(false);
    let titleRef = useRef(null);

    const toggle = (e, num) => {
        if (lock || isAiTurn) {
            return 0;
        }
        data[num] = "x";
        setCount(count + 1);
        setData([...data]);
        checkWin();
        clickAudio.play();
        setIsAiTurn(true);
        setTimeout(aiMove, 500);
    }

    const aiMove = () => {
        const emptyCells = data.reduce((acc, cell, index) => {
            if (cell === "") {
                acc.push(index);
            }
            return acc;
        }, []);
        const randomIndex = Math.floor(Math.random() * emptyCells.length);
        const num = emptyCells[randomIndex];
        data[num] = "o";
        setCount(count + 1);
        setData([...data]);
        checkWin();
        clickAudio.play();
        setIsAiTurn(false);
        
    }

    const reset = () => {
        setCount(0);
        const initialData = ["", "", "", "", "", "", "", "", ""];
        titleRef.current.innerHTML = `Tic Tac Toe Game made using <span>React JS</span>`;
        setLock(false);
        setData(initialData);
        setIsAiTurn(false);
        clickAudio.play();
    }

    const checkWin = () => {
        if(data[0]===data[1] && data[1]===data[2] && data[2]!==""){
            won(data[2]);
        }else if(data[3]===data[4] && data[4]===data[5] && data[5]!==""){
            won(data[5]);
        }else if(data[6]===data[7] && data[7]===data[8] && data[8]!==""){
            won(data[8]);
        }else if(data[0]===data[3] && data[3]===data[6] && data[6]!==""){
            won(data[6]);
        }else if(data[1]===data[4] && data[4]===data[7] && data[7]!==""){
            won(data[7]);
        }else if(data[2]===data[5] && data[5]===data[8] && data[8]!==""){
            won(data[8]);
        }else if(data[0]===data[4] && data[4]===data[8] && data[8]!==""){
            won(data[8]);
        }else if(data[0]===data[1] && data[1]===data[2] && data[2]!==""){
            won(data[2]);
        }else if(data[2]===data[4] && data[4]===data[6] && data[6]!==""){
            won(data[6]);
        }
    }

    const won = (winner) => {
        setLock(true);
        if(winner === 'x'){
            setXscore(xscore + 1);
            titleRef.current.innerHTML = `Congratulations player <span>X</span>`
        }else if(winner === 'o'){
            setYscore(yscore + 1);
            titleRef.current.innerHTML = `Congratulations computer <span>O</span>`
        }
        wonAudio.play();
    }

    return (
        <div className='w-screen h-screen flex flex-col justify-start items-center bg-zinc-900 text-white'>
            <nav className='flex flex-row justify-between items-center h-18 w-screen p-4 border-b-[2px] border-blue-500'>
                <Link className='pl-6 pr-6 bg-blue-500 rounded-full p-2 m-1 flex flex-row justify-center items-center' to="/">
                    Back 
                </Link>
                <div className='mr-4'>
                    <p>Player Score X : {xscore}</p>
                    <p>CPU Score O : {yscore}</p>
                </div>
            </nav>
            <h1 className='text-xl font-semibold mt-20 text-center w-52' ref={titleRef}>
                Ai Tic Tac Toe Game using <span className='text-blue-400'>React JS</span>
            </h1>
            <div className='flex flex-col justify-center mt-6' id='container'>
                <div className='flex flex-row justify-center' id='row1'>
                    <div className={boxes} onClick={(e) => toggle(e, 0)}>
                        {data[0] === "x" && <h1 className={icon}>X</h1>}
                        {data[0] === "o" && <h1 className={icon}>O</h1>}
                    </div>
                    <div className={boxes} onClick={(e) => toggle(e, 1)}>
                        {data[1] === "x" && <h1 className={icon}>X</h1>}
                        {data[1] === "o" && <h1 className={icon}>O</h1>}
                    </div>
                    <div className={boxes} onClick={(e) => toggle(e, 2)}>
                        {data[2] === "x" && <h1 className={icon}>X</h1>}
                        {data[2] === "o" && <h1 className={icon}>O</h1>}
                    </div>
                </div>
                <div className='flex flex-row justify-center' id='row2'>
                    <div className={boxes} onClick={(e) => toggle(e, 3)}>
                        {data[3] === "x" && <h1 className={icon}>X</h1>}
                        {data[3] === "o" && <h1 className={icon}>O</h1>}
                    </div>
                    <div className={boxes} onClick={(e) => toggle(e, 4)}>
                        {data[4] === "x" && <h1 className={icon}>X</h1>}
                        {data[4] === "o" && <h1 className={icon}>O</h1>}
                    </div>
                    <div className={boxes} onClick={(e) => toggle(e, 5)}>
                        {data[5] === "x" && <h1 className={icon}>X</h1>}
                        {data[5] === "o" && <h1 className={icon}>O</h1>}
                    </div>
                </div>
                <div className='flex flex-row justify-center' id='row3'>
                    <div className={boxes} onClick={(e) => toggle(e, 6)}>
                        {data[6] === "x" && <h1 className={icon}>X</h1>}
                        {data[6] === "o" && <h1 className={icon}>O</h1>}
                    </div>
                    <div className={boxes} onClick={(e) => toggle(e, 7)}>
                        {data[7] === "x" && <h1 className={icon}>X</h1>}
                        {data[7] === "o" && <h1 className={icon}>O</h1>}
                    </div>
                    <div className={boxes} onClick={(e) => toggle(e, 8)}>
                        {data[8] === "x" && <h1 className={icon}>X</h1>}
                        {data[8] === "o" && <h1 className={icon}>O</h1>}
                    </div>
                </div>
            </div>
            <button className='bg-blue-400 p-2 w-32 rounded-full m-4' onClick={reset}>
                Reset
            </button>
            <a href="https://www.linkedin.com/in/arunmozhi-varman-2565b3266/"
            className='mt-12 text-blue-400 flex flex-row animate-pulse'
            >
            <img src="https://cdn1.iconfinder.com/data/icons/logotypes/32/circle-linkedin-512.png" alt="" className='w-6 h-6 mr-2'/>    
            Made by Arunmozhi varman</a>
        </div>
    );
}

export default AiTicTacToe;
