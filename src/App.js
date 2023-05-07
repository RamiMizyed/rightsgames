import React, { useState, useRef } from 'react';
import { questions } from './questions/questions';
import Game from './MazeGame/Game';
import Smile from './assets/Group.svg';
import smileOther from './assets/dddoodle-pack/dddoodle-pack/misc/misc-1.svg';
import cloud from './assets/dddoodle-pack/dddoodle-pack/misc/misc-24.svg';
function App() {
	const [play, setIsplay] = useState(false);
	function handleClick() {
		setIsplay(!play);
	}
	return (
		<div className='h-[100vh] w-full flex items-center justify-center backgroundOne absolute overflow-hidden'>
			{!play && (
				<div className=' md:w-1/2 relative bg-white/90 md:h-1/2 p-6 flex flex-col justify-center items-center gap-6 rounded-lg  shadow-md shadow-black '>
					<div>
						<img
							src={Smile}
							className='absolute bottom-0 right-[70%] w-[30%] '
							alt=''
						/>
						<img
							src={cloud}
							className='absolute top-0 right-0 w-[30%] '
							alt=''
						/>
						<img
							src={smileOther}
							className='absolute bottom-0 right-0 w-[30%] '
							alt=''
						/>
					</div>
					<h1 className='w-full text-black'>
						Play the rights game & learn more about child rights
					</h1>
					<div className=' h-[calc(100%-6rem)] w-full flex items-center justify-center'>
						<button
							onClick={() => handleClick()}
							className=' bg-rose-500  p-6 rounded-lg lg:h-[8rem] lg:w-[16rem] h-[6rem] w-[8rem]   text-lg sm:text-xl md:text-2xl lg:text-3xl text-white font-bold shadow-md hover:scale-110  hover:bg-emerald-500 transition-all shadow-white'>
							<h3 className='animate-bounce'>Play Now</h3>
						</button>
					</div>
				</div>
			)}
			{play && <Game imga={questions[0].imgSrc} />}
		</div>
	);
}

export default App;
