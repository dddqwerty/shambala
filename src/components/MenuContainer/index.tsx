import * as React from "react";
import { motion } from "framer-motion";
import MenuItem from '../MenuItem'

const variants = {
    open: {
        transition: { staggerChildren: 0.07, delayChildren: 0.2 }
    },
    closed: {
        transition: { staggerChildren: 0.05, staggerDirection: -1 }
    }
};

export const Navigation = () => (
    <motion.ul className="m-0 flex flex-col py-5 absolute w-full" variants={variants}>
        {itemIds.map(({ name, isSelected ,path}, index) => (
            <MenuItem name={name} isSelected={isSelected} key={index} onclick={path} />
        ))}
    </motion.ul>
);

const itemIds = [{
    name: "Who we are",
    isSelected: true,
    path:"/whoarewe"
}, {
    name: "What we do",
    isSelected: false,
    path:"/whatarewedoing"

}, {
    name: "Recommended projects",
    isSelected: false,
    path:"/recomended"

}, {
    name: "Naadam",
    isSelected: false,
    path:"/Naadam"

}];
