import React, { useState, useRef, Suspense } from 'react';
import { easeOut, motion } from 'framer-motion';
import { questions } from './questions/questions';
import Game from './MazeGame/Game';
import Smile from './assets/Group.svg';
import smileOther from './assets/dddoodle-pack/dddoodle-pack/misc/misc-1.svg';
import cloud from './assets/dddoodle-pack/dddoodle-pack/misc/misc-24.svg';
import otherPic from './assets/dddoodle-pack/dddoodle-pack/misc/misc-15.svg';
import LoadingAnimation from './Components/LoadingAnimation';
function App() {
	const boxAnimate = {
		offscreen: { x: -400, opacity: 0 },
		onscreen: {
			x: 0,
			y: 0,
			opacity: 1,
			transition: { type: 'spring' },
		},
	};
	const textAnimate = {
		offscreen: { x: 200, opacity: 0 },
		onscreen: {
			x: 0,
			y: 0,
			opacity: 1,
			transition: { type: 'spring' },
		},
	};
	const buttonAnimate = {
		offscreen: { x: 150, opacity: 0 },
		onscreen: {
			x: 0,
			y: 0,
			opacity: 1,
			transition: { type: 'spring' },
		},
	};
	const [play, setIsplay] = useState(false);
	function handleClick() {
		setIsplay(!play);
	}
	return (
		<Suspense fallback={<LoadingAnimation />}>
			<motion.div
				initial={'offscreen'}
				whileInView={'onscreen'}
				viewport={{ once: false, amount: 0.5 }}
				className='h-[100vh] w-full  flex items-center p-6 justify-center backgroundOne  overflow-hidden'>
				{!play && (
					<motion.div
						variants={boxAnimate}
						className=' md:w-1/2 w-full relative     bg-fuchsia-100 md:h-1/2 p-6 flex flex-col justify-center items-center gap-6 rounded-lg  shadow-md shadow-black '>
						<motion.div>
							<img
								src={Smile}
								className='absolute bottom-0 left-0 w-[25%] '
								alt=''
							/>
							<img
								src={cloud}
								className='absolute top-0 right-0 w-[30%] '
								alt=''
							/>
							<img
								src={otherPic}
								className='absolute top-0 left-0 w-[30%] '
								alt=''
							/>
							<img
								src={smileOther}
								className='absolute bottom-0 right-0 w-[30%] '
								alt=''
							/>
						</motion.div>
						<motion.h1
							variants={textAnimate}
							className='w-full text-black text-center font-bold bg-gradient-to-r from-blue-600  to-purple-600 text-transparent bg-clip-text text-4xl  '>
							Lets Play the Rights Game
						</motion.h1>
						<motion.div
							variants={buttonAnimate}
							className=' h-[calc(100%-6rem)] w-full flex items-center justify-center'>
							<button
								onClick={() => handleClick()}
								className=' bg-rose-500  p-6 rounded-lg lg:h-[8rem] lg:w-[16rem] h-[6rem] w-[8rem]   text-lg sm:text-xl md:text-2xl lg:text-3xl text-white font-bold shadow-md hover:scale-110  hover:bg-emerald-500 transition-all shadow-white'>
								<h3 className='animate-bounce'>Play Now</h3>
							</button>
						</motion.div>
					</motion.div>
				)}
				{play && <Game imga={questions[0].imgSrc} />}
			</motion.div>
		</Suspense>
	);
}

export default App;
