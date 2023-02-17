import React, { useRef, useState } from "react";
import FloatingBox from "./FloatingBox";

const Header = ({ handleBurger }) => {
    const ProfileButton = useRef();
    const [profileBox, setProfileBox] = useState(false);

    const handleProfile = () => {
        if (profileBox) {
            setProfileBox(false);
        } else {
            setProfileBox(true);
        }
    };
    return (
        <header className="w-full px-10 py-2 flex items-center justify-between bg-white dark:bg-zinc-900 sticky top-0 z-10">
            <div className="flex items-center gap-x-8">
                <button onClick={() => handleBurger()}>
                    <Hamburger />
                </button>
                <h1 className="font-bold text-2xl text-primary">My Best</h1>
            </div>
            <div className="flex items-center gap-x-3">
                <h3 className="text-md text-zinc-900 dark:text-zinc-100">
                    17200414
                </h3>
                <button
                    className="w-10 h-10 rounded-full bg-cover bg-primary"
                    ref={ProfileButton}
                    onClick={handleProfile}
                ></button>
            </div>
            {profileBox && (
                <div className="absolute right-10 top-[58px]">
                    <FloatingBox
                        setIsComponentVisible={(value) => setProfileBox(value)}
                        ProfileButton={ProfileButton.current}
                    />
                </div>
            )}
        </header>
    );
};

const Hamburger = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6 text-zinc-900 dark:text-zinc-400"
    >
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
        />
    </svg>
);

export default Header;
