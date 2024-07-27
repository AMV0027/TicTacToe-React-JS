import React from 'react';
import { Link } from 'react-router-dom';
import blipSound from '../assets/click.mp3';

function Home() {
    const clickAudio = new Audio(blipSound);
    const sound = () => {
        clickAudio.play();
    }

    const intrBoxCss = "select-none w-20 h-20 hover:bg-blue-500 hover:text-white hover:drop-shadow-[0_0px_15px_rgba(0,0,150,0.9)] transition-all delay-50 text-3xl m-1 rounded-md p-2 border-[1px] border-white flex flex-col justify-center items-center text-blue-400";
  return (
    <div className='bg-zinc-900 w-screen h-screen text-white flex flex-col justify-start items-center'>
        <div className='mt-24 mb-16 flex flex-col justify-center animate-spin-slow'>
            <div className='flex flex-row justify-center'>
                <div className={intrBoxCss} onClick={sound}>
                    X
                </div>
                <div className={intrBoxCss} onClick={sound}>
                    O
                </div>
            </div>
            <div className='flex flex-row justify-center'>
                <div className={intrBoxCss} onClick={sound}>
                    O
                </div>
                <div className={intrBoxCss} onClick={sound}>
                    X
                </div>
            </div>
        </div>
        <h1 className='text-2xl font-semibold'>
            Tic Tac Toe <span>React JS</span>
        </h1>
        <Link to="player-player" onClick={sound}
        className='bg-blue-500 hover:bg-transparent hover:border-[1px] border-white text-white p-2 m-2 mt-4 rounded-full w-36 text-center'
        >
            Player vs player 
        </Link>
        <Link to="player-cpu" onClick={sound}
        className='bg-blue-500 hover:bg-transparent hover:border-[1px] text-white p-2 m-2 mt-4 rounded-full w-36 text-center'
        >
            Player vs AI 
        </Link>

        <a href="https://www.linkedin.com/in/arunmozhi-varman-2565b3266/"
        className='mt-12 text-blue-400 animate-pulse'
        >Made by Arunmozhi varman</a>
    </div>
  )
}

export default Home