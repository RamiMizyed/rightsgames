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
import Home from './PageRoutes/Home';
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
			<Home />
		</Suspense>
	);
}

export default App;
