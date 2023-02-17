import React from "react";
import { Link } from "react-router-dom";

const EditIcon = ({ style }) => (
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
            d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
        />
    </svg>
);
const VisitIcon = ({ style }) => (
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
            d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
        />
    </svg>
);

const dataJadwal = [
    {
        kodeJadwal: "abc",
        kodeMatkul: "abc",
        matkul: "Mobile Programming",
        kodeDosen: "abc",
        namaDosen: "asd,S.Kom",
        ruang: "Ruang 303",
        jam: "13:20 - 15:00 WIB",
        status: true,
    },
    {
        kodeJadwal: "efg",
        kodeMatkul: "abc",
        matkul: "Mobile Programming",
        kodeDosen: "abc",
        namaDosen: "asd,S.Kom",
        ruang: "Ruang 303",
        jam: "13:20 - 15:00 WIB",
        status: false,
    },
];

const Dashboard = () => {
    return (
        <div className="flex flex-col gap-8 p-8">
            <div className="flex items-center p-4 gap-8 bg-primary rounded-md shadow-md relative w-full">
                <div className="w-48 h-48 bg-zinc-50 bg-cover bg-center rounded-md">
                    <img
                        src="https://source.unsplash.com/random/500x500"
                        alt="profile image"
                        className="w-full h-full rounded-md"
                    />
                </div>
                <div className="flex-1 flex items-center justify-center  h-full">
                    <div className="text-center">
                        <h4 className="text-sm">
                            17200414 | 17.5A.12 | UBSI Ciledug
                        </h4>
                        <h2 className="font-bold text-3xl capitalize">
                            muhammad faza alfarisy
                        </h2>
                    </div>
                </div>
                <Link
                    to={"/user/profile"}
                    className="absolute flex w-fit h-fit inset-y-4 right-4"
                >
                    <EditIcon style={"w-5 h-5"} />
                </Link>
            </div>
            <div className="flex gap-8 flex-wrap">
                {dataJadwal.map((item) => (
                    <JadwalCard
                        key={item.kodeJadwal}
                        kodeJadwal={item.kodeJadwal}
                        kodeMatkul={item.kodeMatkul}
                        matkul={item.matkul}
                        kodeDosen={item.kodeDosen}
                        namaDosen={item.namaDosen}
                        ruang={item.ruang}
                        jam={item.jam}
                        status={item.status}
                    />
                ))}
            </div>
        </div>
    );
};

// local component

const JadwalCard = ({
    kodeJadwal,
    kodeMatkul,
    matkul,
    kodeDosen,
    namaDosen,
    ruang,
    jam,
    status,
}) => (
    <Link
        to={`/user/kuliah/${kodeJadwal}`}
        className={`px-6 py-4 text-zinc-900 dark:text-zinc-100 flex-1 rounded-md shadow-md relative group ${
            status ? "bg-primary" : "bg-zinc-100 dark:bg-zinc-900"
        } `}
    >
        <small className="text-sm uppercase">{kodeMatkul}</small>
        <h2
            className={`text-xl font-bold capitalize ${
                status ? "text-zinc-100" : "text-primary dark:text-zinc-100"
            }`}
        >
            {matkul}
        </h2>
        <div className="mt-2 space-y-2">
            <p>{kodeDosen + " " + namaDosen}</p>
            <p>{ruang}</p>
            <p>{jam}</p>
            <p className="font-bold capitalize">
                {status ? "Sudah dimulai" : "Belum dimulai"}
            </p>
        </div>
        <span className="absolute inset-y-4 right-6 opacity-0 group-hover:opacity-100 transition-all">
            <VisitIcon style="w-5 h-5" />
        </span>
    </Link>
);

export default Dashboard;
