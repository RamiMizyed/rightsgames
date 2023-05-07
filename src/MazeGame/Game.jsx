import React, { useState, useMemo, useEffect, useRef } from "react";
import { generateMaze, solve } from "./utils";
import { BsFillArrowDownSquareFill, BsFillArrowLeftSquareFill, BsFillArrowRightSquareFill, BsFillArrowUpSquareFill } from 'react-icons/bs'
import { questions } from '../questions/questions';
import AudioPlayer from "../Components/AudioPlayer";
export default function Game() {
    const [gameId, setGameId] = useState(1);
    const [questionId, setQuestionId] = useState(0)
    const [status, setStatus] = useState("playing");
    const [solved, setSolve] = useState(false)
    const size = 6
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
                } else {
                    setQuestionId(questionId + 1)
                }
            }, 2000)
        }
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
        if (solved && solution.has(String(i) + "-" + String(j))) {
            arr.push("sol");
        }
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
        <div className="flex flex-col items-center justify-center w-full h-screen border-none  focus:outline-none backgroundGame background-animate-slowest " onKeyDown={handleMove} tabIndex={-1}>
            <AudioPlayer />
            <div className=" text-3xl text-white flex flex-col gap-3 mb-6">
                <h2 className="flex text-center w-full">{questions[questionId].choices[questions[questionId].correct - 1]}</h2>
            </div>
            <div>
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
            <div className=" text-3xl text-white flex flex-col gap-3 mb-6">
                <h2 className="flex text-center w-52 ">'W' 'A' 'S' 'D'</h2>
                <div className="flex gap-3 w-52 ">
                    <BsFillArrowUpSquareFill className="text-emerald-400" />
                    <BsFillArrowLeftSquareFill className="text-emerald-400" />
                    <BsFillArrowDownSquareFill className="text-emerald-400" />
                    <BsFillArrowRightSquareFill className="text-emerald-400" />
                </div>
            </div>
        </div>
    );
}
