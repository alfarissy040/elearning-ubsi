import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import Settings from "./Settings";
import ThemeSetting from "./ThemeSetting";

const FloatingBox = ({ setIsComponentVisible, ProfileButton }) => {
    const floatingBox = useRef();
    const [isThemeSection, setIsThemeSection] = useState(false);
    const [isFromTheme, setIsFromTheme] = useState(false);

    const handleThemeSection = (value) => {
        if (!value) {
            setIsFromTheme(true);
        }
        setIsThemeSection(value);
    };
    const handleClickOutside = (event) => {
        console.log(event.target == ProfileButton);
        if (
            floatingBox.current &&
            !floatingBox.current.contains(event.target) &&
            event.target != ProfileButton
        ) {
            setIsComponentVisible(false);
        }
    };
    useEffect(() => {
        document.addEventListener("click", handleClickOutside, true);
        return () => {
            document.removeEventListener("click", handleClickOutside, true);
        };
    }, []);
    return (
        <div
            className="p-4 gap-y-6 rounded-md bg-white dark:bg-zinc-900 shadow-md w-56 relative overflow-clip"
            ref={floatingBox}
        >
            {!isThemeSection ? (
                <AnimatePresence>
                    <motion.div
                        initial={{
                            opacity: 0,
                            x: isFromTheme ? "-100%" : "0%",
                        }}
                        animate={{ opacity: 1, x: "0%" }}
                        exit={{ opacity: 0, x: "-100%" }}
                        transition={{
                            type: "tween",
                        }}
                    >
                        <Settings handleThemeSection={handleThemeSection} />
                    </motion.div>
                </AnimatePresence>
            ) : (
                <motion.div
                    initial={{ opacity: 0, x: "100%" }}
                    animate={{ opacity: 1, x: "0%" }}
                    exit={{ opacity: 0, x: "100%" }}
                    transition={{
                        type: "tween",
                    }}
                >
                    <ThemeSetting handleBack={handleThemeSection} />
                </motion.div>
            )}
        </div>
    );
};

export default FloatingBox;
