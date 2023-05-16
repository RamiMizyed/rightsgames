import * as React from "react";
import { motion, useCycle } from "framer-motion";
import { MenuToggle } from "./MenuToggle";

export const HamburgerMenu = () => {
    const [isOpen, toggleOpen] = useCycle(false, true);
    let activeClassName =
        "font-extrabold bg-red-600 text-start underline underline-offset-[5px] decoration-teal-600 decoration-2 z-50  h-fit text-center ";
    const inActiveClassName = "font-light bg-red-600 text-start link-underline w-fit h-fit z-50 text-center";

    return (
        <motion.nav initial={false} animate={isOpen ? "open" : "closed"}>
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
                        className="bg-gradient-to-br from-blue-600 to-fuchsia-700 rounded-l-lg  absolute  background-animate-navBar w-[100%] lg:w-[40%] md:w-[60%] sm:w-[70%] h-full right-0"
                    >
                        <motion.div className="flex justify-between items-center p-6 text-white shadow-md h-[5rem] sm:h-[6rem] rounded-b-lg shadow-white/50">

                        </motion.div>
                        <motion.div className="grid justify-between  h-[calc(100vh-6rem)]">

                        </motion.div>
                    </motion.div>
                </motion.div>
            )}
        </motion.nav>
    );
};
