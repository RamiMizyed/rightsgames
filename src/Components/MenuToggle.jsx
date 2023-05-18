import * as React from "react";
import { motion } from "framer-motion";

const Path = (props) => (
    <motion.path
        fill="transparent"
        strokeWidth="3"
        stroke="#FFFF"
        strokeLinecap="round"
        {...props}
    />
);

export const MenuToggle = ({ toggle }, porps) => (
    <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.98, rotate: 3 }}
        onClick={toggle}
        className="flex flex-col z-50 justify-center fixed items-center "
    >
        <svg width="32" height="32" viewBox="0 0 23 23" >
            <Path
                variants={{
                    closed: { d: "M 2 2.5 L 20 2.5", stroke: "#10b981" },
                    open: { d: "M 3 16.5 L 17 2.5", stroke: "#bc123e" },
                }}
            />
            <Path
                d="M 2 9.423 L 20 9.423"
                variants={{
                    closed: { opacity: 1, stroke: "#10b981" },
                    open: { opacity: 0, stroke: "#bc123e" },
                }}
                transition={{ duration: 0.1 }}
            />
            <Path
                variants={{
                    closed: { d: "M 2 16.346 L 20 16.346", stroke: "#10b981" },
                    open: { d: "M 3 2.5 L 17 16.346", stroke: "#bc123e" },
                }}
            />
        </svg>
        <h2 className="text-lg md:text-xl lg:text-2xl text-white">Options</h2>
    </motion.button>
);
