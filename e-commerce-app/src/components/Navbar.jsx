import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <>
            <div class="flex justify-between items-center p-5 navbar bg-blue-400">
                <div class="navbar-start">
                    <div class="dropdown">
                        <div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                class="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                    </div>
                    <a class="btn btn-ghost text-xl">daisyUI</a>
                </div>
                <div class="navbar-center lg:flex">
                    <ul class="flex menu menu-horizontal px-1 gap-10 text-lg font-bold">
                        <li><Link to="">Home</Link></li>
                        <li><Link to="about">About</Link></li>
                        <li><Link to="contact">Contact</Link></li>
                        <li><Link to="services">Services</Link></li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Navbar