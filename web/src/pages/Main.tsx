import React, { useState } from "react";
import woman from "../assets/woman.svg";
import { maskCPF } from "../utils/maskCPF";

function Main() {
    const [value, setValue] = useState("");

    function handleChangeMask(event: React.FormEvent<HTMLInputElement>) {
        const { value } = event.currentTarget;

        setValue(maskCPF(value));
    }

    return (
        <>
            <div className="bg-orange-500 w-screen h-screen fixed font-mono">
                <main className="bg-zinc-800  bg-opacity-60 h-2/4  w-2/4 mx-auto mt-36 flex justify-center rounded-lg shadow-lg">
                    <div className="mt-10 text-center text-gray-200 drop-shadow-lg">
                        <div>
                            <h1 className="text-3xl">👋 Olá, futuro(a) parceiro(a) de equipe!</h1>
                            <h2 className="text-3xl mt-5">Me informe o seu CPF ;)</h2>
                        </div>

                        <div className="flex flex-col w-full h-full	items-center">
                            <input
                                type="text"
                                name="name"
                                onChange={handleChangeMask}
                                value={value}
                                placeholder="123.456.789-10"
                                className="w-96 h-11 px-4 py-2 border-b-2 mt-14 bg-transparent border-gray-600 outline-none  focus:border-orange-500 text-gray-200 text-3xl text-center"
                            />

                            <a
                                href="#_"
                                className="relative mt-10 inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-orange-500 rounded-full shadow-md group"
                            >
                                <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-stone-700 group-hover:translate-x-0 ease">
                                    <svg
                                        className="w-6 h-6"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M14 5l7 7m0 0l-7 7m7-7H3"
                                        ></path>
                                    </svg>
                                </span>
                                <span className="absolute flex items-center justify-center w-full h-full text-orange-500 transition-all duration-300 transform group-hover:translate-x-full ease">
                                    VAMOS LÁ!
                                </span>
                                <span className="relative invisible">VAMOS LÁ!</span>
                            </a>
                        </div>
                    </div>
                </main>
            </div>
        </>
    );
}

export default Main;
