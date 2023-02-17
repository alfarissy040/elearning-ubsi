import React from "react";

const Seperate = ({ color, height, width }) => {
    return (
        <div
            className={`${color ? color : "bg-zinc-400 dark:bg-zinc-500"} ${
                height ? height : "h-[2px]"
            } ${width ? width : "w-full"}`}
        ></div>
    );
};

export default Seperate;
