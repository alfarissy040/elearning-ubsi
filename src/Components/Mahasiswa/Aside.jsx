import React from "react";
import { Link } from "react-router-dom";
import Seperate from "./Seperate";

const HomeIcon = ({ style }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className={style ? style : "w-6 h-6"}
    >
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
        />
    </svg>
);

const BookIcon = ({ style }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className={style ? style : "w-6 h-6"}
    >
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"
        />
    </svg>
);

const CalendarIcon = ({ style }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className={style ? style : "w-6 h-6"}
    >
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
        />
    </svg>
);

const items = [
    {
        to: "dashboard",
        icon: <HomeIcon />,
        label: "Dahsboard",
    },
    {
        to: "ujian",
        icon: <BookIcon />,
        label: "Ujian",
    },
    {
        to: "kuliah/jadwal",
        icon: <CalendarIcon />,
        label: "Jadwal Kuliah",
    },
];
const jadwalKuliah = [
    {
        to: "kuliah/abc",
        icon: "abc",
        label: "Mobile Programming",
        active: true,
    },
    {
        to: "kuliah/efg",
        icon: "def",
        label: "Web Programming",
    },
    {
        to: "kuliah/hij",
        icon: "ghi",
        label: "Iteraksi Manusia Komputer",
    },
];

const Aside = () => {
    return (
        <aside className="p-4 bg-white dark:bg-zinc-900 text-zinc dark:text-zinc-100 w-80 h-[calc(100%-56px)] sticky top-[56px]">
            <ul className="flex flex-col gap-3">
                {items.map(({ to, icon, label }) => (
                    <li key={label}>
                        <AsideItems to={to} icon={icon} label={label} />
                    </li>
                ))}

                <li className="py-1">
                    <Seperate />
                </li>
                <li>
                    <h2 className="text-lg">Jadwal Kuliah</h2>
                </li>
                {jadwalKuliah.map(({ to, icon, label, active }) => (
                    <li key={label}>
                        <AsideItems
                            to={to}
                            icon={icon}
                            label={label}
                            active={active}
                        />
                    </li>
                ))}
            </ul>
        </aside>
    );
};

const AsideItems = ({ to, icon, label, active }) => (
    <Link
        to={`/user/${to}`}
        className="flex items-center w-full gap-8 p-2 pr-6 hover:bg-zinc-300 dark:hover:bg-zinc-700 rounded-md relative"
    >
        <div className="w-11 flex items-center justify-center">{icon}</div>
        <p>{label.length > 18 ? `${label.substring(0, 18)}...` : label}</p>
        {active && (
            <div className="absolute w-5 h-5 inset-y-3 right-4 flex items-center justify-center">
                <span className="w-2 h-2 bg-primary rounded-full relative">
                    <span className="absolute -inset-1 w-4 h-4 opacity-70 animate-ping bg-primary rounded-full"></span>
                </span>
            </div>
        )}
    </Link>
);

export default Aside;
