import React, { useEffect, useState } from "react";
import { useRef } from "react";
import { motion, useCycle } from "framer-motion";
import { useDimensions } from "hooks";
import MenuToggle from "components/MenuButton";
import { Navigation } from "components/MenuContainer";

const sidebar = {
    open: (height = 1000) => ({
        clipPath: `circle(${height * 2 + 200}px at 83% 75%)`,
        transition: {
            type: "spring",
            stiffness: 20,
            restDelta: 2,
        }
    }),
    closed: {
        clipPath: "circle(55px at 83% 75%)",
        transition: {
            delay: 0.5,
            type: "spring",
            stiffness: 400,
            damping: 40
        }
    }
};

const MobileMenu = () => {
    const [isOpen, toggleOpen] = useCycle(false, true);
    const [isDone, toggleDone] = useState(true);
    const [name, setName] = useState("closed")
    const containerRef = useRef(null);
    const { height } = useDimensions(containerRef);

    // useEffect(() => {
    //     if (isOpen) {
    //       document.body.style.overflow = 'hidden'
    //     } else {
    //       document.body.style.overflow = 'scroll'
    //     }
    //   }, [isOpen])

    return (
        <div className={`fixed z-50 backdrop-blur-[7px] bg-mobileBg ${isOpen ? "w-screen h-screen" : "w-[64px] h-[64px] overflow-hidden rounded-full bottom-10 right-8"}`}>
            <MenuToggle isOpen={isOpen} toggle={() => {
                if (!isDone) return;
                if (isOpen) {
                    toggleDone(false)
                    setName("closed")
                    setTimeout(() => {
                        toggleOpen()
                        toggleDone(true)
                    }, 800);
                } else {
                    setName("open")
                    toggleOpen()
                }
            }} />

            <motion.nav
                initial={false}
                animate={name}
                custom={height}
                ref={containerRef}
                className={`absolute bottom-0 w-full ${isOpen ? "h-[336px]" : "h-full"}`}
            >
                <motion.div className={`absolute top-0 left-0 bottom-0 w-full bg-[#202121]`} variants={sidebar} />
                <Navigation />
            </motion.nav>
        </div>

    );
};

export default MobileMenu
