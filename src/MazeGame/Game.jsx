import React, { useState, useMemo, useEffect, useRef, Suspense } from "react";
import { generateMaze, solve } from "./utils";
import { BsFillArrowDownSquareFill, BsFillArrowLeftSquareFill, BsFillArrowRightSquareFill, BsFillArrowUpSquareFill } from 'react-icons/bs'
import { questions } from '../questions/questions';
import { HamburgerMenu } from '../Components/NavBar';
import image1 from '../assets/crafty-protecting-your-health-with-natural-remedies-1.png'

import LoadingAnimation from "../Components/LoadingAnimation";
export default function Game() {
    const [gameId, setGameId] = useState(1);
    const [questionId, setQuestionId] = useState(0)
    const [currentLevel, setCurrentLevel] = useState(1)
    const [status, setStatus] = useState("playing");
    // const [solved, setSolve] = useState(false)
    const [size, setSize] = useState(4)
    const [userPosition, setUserPosition] = useState([0, 0]);
    const maze = useMemo(() => generateMaze(size, size), [size, gameId]);
    const solution = useMemo(() => {
        const s = new Set();
        const solutionPath = solve(maze, userPosition[0], userPosition[1]);
        solutionPath.forEach((path) => {
            const [x, y] = path;
            s.add(String(x) + "-" + String(y));
        });
        return s;
    }, [size, userPosition[0], userPosition[1], gameId]);

    useEffect(() => {
        const lastRowIndex = maze.length - 1;
        const lastColIndex = maze[0].length - 1;
        if (userPosition[0] === lastRowIndex && userPosition[1] === lastColIndex) {
            setStatus("won");
            setTimeout(() => {
                handleUpdateSettings()
                if (questionId === 9) {
                    setQuestionId(0)
                    setSize(4)
                    setCurrentLevel(1)
                } else {
                    if (size < 10)
                        setSize(size + 1)
                    else {
                        setSize(4)
                    }
                }
                setCurrentLevel(currentLevel + 1)
            }, 2000)
        }
        console.log(size);
    }, [userPosition[0], userPosition[1]]);

    const makeClassName = (i, j) => {
        const rows = maze.length;
        const cols = maze[0].length;
        let arr = [];
        if (maze[i][j][0] === 0) {
            arr.push("topWall");
        }
        if (maze[i][j][1] === 0) {
            arr.push("rightWall");
        }
        if (maze[i][j][2] === 0) {
            arr.push("bottomWall");
        }
        if (maze[i][j][3] === 0) {
            arr.push("leftWall");
        }
        if (i === rows - 1 && j === cols - 1) {
            arr.push(questions[questionId].imgSrc);
        }
        if (i === userPosition[0] && j === userPosition[1]) {
            arr.push("currentPosition");
        }
        // if (solved && solution.has(String(i) + "-" + String(j))) {
        //     arr.push("sol");
        // }
        return arr.join(" ");
    };
    const handleMove = (e) => {
        e.preventDefault();
        if (status !== "playing") {
            return;
        }
        const key = e.code;

        const [i, j] = userPosition;
        if ((key === "ArrowUp" || key === "KeyW") && maze[i][j][0] === 1) {
            setUserPosition([i - 1, j]);
        }
        if ((key === "ArrowRight" || key === "KeyD") && maze[i][j][1] === 1) {
            setUserPosition([i, j + 1]);
        }
        if ((key === "ArrowDown" || key === "KeyS") && maze[i][j][2] === 1) {
            setUserPosition([i + 1, j]);
        }
        if ((key === "ArrowLeft" || key === "KeyA") && maze[i][j][3] === 1) {
            setUserPosition([i, j - 1]);
        }
    };
    const handleUpdateSettings = () => {
        setUserPosition([0, 0]);
        setStatus("playing");
        setGameId(gameId + 1);
    };

    return (
        <Suspense fallback={<LoadingAnimation />}>
            <div className="w-full h-[100vh]">
                <div className="fixed  z-50 top-0 left-0 p-6">
                    <HamburgerMenu status={status} />
                </div>
                <div className="flex flex-col relative  items-center justify-center w-full h-screen border-none  focus:outline-none backgroundGame " onKeyDown={handleMove} tabIndex={-1}>
                    <div className="bg-slate-100 mb-3 rounded-md w-fit  ">
                        <h1 className="bg-gradient-to-r from-rose-600 via-purple-500  to-emerald-500 text-transparent bg-clip-text background-animate-longest">
                            {questions[questionId].choices[questions[questionId].correct - 1]}
                        </h1>
                    </div>
                    <div className="flex flex-col md:flex-row items-center gap-2 justify-center w-full">
                        <img src={image1} alt="" className="w-[64px] md:w-[128px] lg:w-[256px]" />
                        <table id="maze"  >
                            <tbody >
                                {maze.map((row, i) => (
                                    <tr key={`row-${i}`}>
                                        {row.map((cell, j) => (
                                            <td key={`cell-${i}-${j}`} className={makeClassName(i, j)}>
                                                <div />
                                            </td>
                                        ))}
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                </div>
            </div>
        </Suspense>
    );
}
