import React, { useState, useRef, Suspense } from 'react';
import { easeOut, motion } from 'framer-motion';
import { questions } from './questions/questions';
import Game from './MazeGame/Game';
import Smile from './assets/Group.svg';
import smileOther from './assets/dddoodle-pack/dddoodle-pack/misc/misc-1.svg';
import cloud from './assets/dddoodle-pack/dddoodle-pack/misc/misc-24.svg';
import otherPic from './assets/dddoodle-pack/dddoodle-pack/misc/misc-15.svg';
import heart from './assets/dddoodle-pack/dddoodle-pack/misc/misc-39.svg';
import heartOther from './assets/dddoodle-pack/dddoodle-pack/misc/misc-30.svg';
import arrow from './assets/dddoodle-pack/dddoodle-pack/arrows/arrow-20.svg';
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
				className='h-[100vh] w-full  flex items-center p-6 justify-center select-none backgroundOne  overflow-hidden'>
				{!play && (
					<motion.div
						variants={boxAnimate}
						className=' lg:w-1/2 h-[50%] w-full relative boxSVG bg-violet-100 lg:h-[70%] p-6 flex flex-col justify-center items-center gap-6 rounded-lg  shadow-md shadow-emerald-300 '>
						<motion.div>
							<img
								src={Smile}
								className='absolute top-[10%] left-0 w-[25%]  '
								alt=''
							/>
							<img
								src={heart}
								className='absolute top-[10%] left-[25%] w-[25%]  '
								alt=''
							/>
							<img
								src={heartOther}
								className='absolute bottom-[0%] left-[50%] w-[25%]  '
								alt=''
							/>
							<img
								src={Smile}
								className='absolute top-[10%] left-0 w-[25%]  '
								alt=''
							/>
							<img
								src={cloud}
								className='absolute top-0 right-0 w-[30%]'
								alt=''
							/>
							<img
								src={otherPic}
								className='absolute bottom-[10%] left-0 w-[30%] '
								alt=''
							/>
							<img
								src={smileOther}
								className='absolute bottom-[10%] right-0 w-[30%] '
								alt=''
							/>
						</motion.div>
						<motion.div
							variants={buttonAnimate}
							className='w-fit flex  p-6   flex-col items-center justify-center'>
							<h1 className='mb-6 w-full text-center text-green-600'>
								<span className='text-rose-600'>Can you</span>{' '}
								Win the
								<span className='text-purple-600'>
									Rights Game ?
								</span>
							</h1>
							<button
								onClick={() => handleClick()}
								className=' bg-rose-500 relative flex flex-col items-center justify-center  p-6 rounded-lg lg:h-[8rem] lg:w-[16rem] h-[6rem] w-[8rem]   text-lg sm:text-xl md:text-2xl lg:text-3xl text-white font-bold shadow-md hover:scale-110  hover:bg-emerald-500 transition-all shadow-zinc-900'>
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
