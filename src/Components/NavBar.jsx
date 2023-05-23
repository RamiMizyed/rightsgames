import React, { useState, useRef, useEffect } from "react";
import { motion, useCycle } from "framer-motion";
import { MenuToggle } from "./MenuToggle";
import { MdAudiotrack } from 'react-icons/md'
import { AiOutlineSmile } from 'react-icons/ai'
import SongFirst from '../assets/Audio/GameMusic1.mp3'
import Yay from '../assets/Audio/yaay.mp3'
import AudioPlayer from "../Components/AudioPlayer";
export const HamburgerMenu = ({ status }) => {
    const [audioLevel, setAudioLevel] = useState(0.1)

    const [isOpen, toggleOpen] = useCycle(false, true);
    let activeClassName =
        "font-extrabold bg-red-600 text-start underline underline-offset-[5px] decoration-teal-600 decoration-2 z-50  h-fit text-center ";
    const inActiveClassName = "font-light bg-red-600 text-start link-underline w-fit h-fit z-50 text-center";

    return (
        <motion.nav initial={false} animate={isOpen ? "open" : "closed"}>
            <AudioPlayer audioLevel={audioLevel} audioPath={SongFirst} />
            {status === 'won' && (
                <AudioPlayer audioLevel={audioLevel} audioPath={Yay} />
            )}

            <motion.div className=" p-6   z-50   cursor-pointer">
                <MenuToggle toggle={() => toggleOpen()} />
            </motion.div>
            {isOpen && (
                <motion.div
                    className="fixed left-0 top-0 w-full h-full bg-black/80 ease-in z-30 duration-100 "
                >
                    <motion.div
                        initial={{ x: 600, opacity: 0.3 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{
                            duration: 0.5,
                        }}
                        className=" rounded-l-lg bg-slate-100  absolute  background-animate-navBar w-[100%] lg:w-[40%] md:w-[60%] sm:w-[70%] h-full right-0"
                    >
                        <motion.div className="flex bg-gradient-to-br from-blue-600 to-fuchsia-700 justify-between items-center p-6 text-white shadow-sm shadow-black h-[5rem] sm:h-[6rem] rounded-b-lg">
                            <div className="flex items-center">
                                <AiOutlineSmile className="text-4xl text-emerald-500" />
                                <h1>
                                    Settings
                                </h1>
                                <AiOutlineSmile className="text-4xl text-rose-500" />
                            </div>
                        </motion.div>
                        <motion.div className="flex flex-col items-start p-6  justify-between  h-[calc(100vh-6rem)]">
                            <div className="w-[50%]">
                                <div className="flex items-start justify-start">
                                    <MdAudiotrack className="text-emerald-600 text-4xl" />
                                    <h3 className="text-black text-start text-2xl ">Audio Level</h3>
                                    <MdAudiotrack className="text-orange-600 text-4xl" />
                                </div>
                                <input className="mt-3 w-[80%] " type="range" min={0} max={1} step={0.01} value={audioLevel} onChange={(e) => {
                                    try {
                                        setAudioLevel(e.target.value)
                                    }
                                    catch (error) {
                                        console.error(error)
                                    }
                                }
                                } />
                            </div>

                        </motion.div>
                    </motion.div>
                </motion.div>
            )}
        </motion.nav>
    );
};
