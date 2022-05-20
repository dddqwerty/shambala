import * as React from "react";
import { motion } from "framer-motion";
import MenuItem from '../MenuItem'
import { useRouter } from 'next/router'

const variants = {
    open: {
        transition: { staggerChildren: 0.07, delayChildren: 0.2 }
    },
    closed: {
        transition: { staggerChildren: 0.05, staggerDirection: -1 }
    }
};

export const Navigation = () => {
    const router = useRouter()

    console.log(router.pathname)
    return (

        <motion.ul className="m-0 flex flex-col py-5 absolute w-full" variants={variants}>
            {itemIds.map(({ name, isSelected, path }, index) => (
                <MenuItem name={name} isSelected={router?.pathname === path} key={index} onclick={path} />
            ))}
        </motion.ul>
    )
};

const itemIds = [
    {
        name: "Home",
        isSelected: false,
        path: "/"
    },
    {
        name: "Who we are",
        isSelected: false,
        path: "/whoarewe"
    }, {
        name: "What we do",
        isSelected: false,
        path: "/whatarewedoing"

    }, {
        name: "Recommended projects",
        isSelected: false,
        path: "/recomended"

    }, {
        name: "Naadam",
        isSelected: false,
        path: "/Naadam"

    }];
