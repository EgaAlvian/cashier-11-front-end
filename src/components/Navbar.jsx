import React from 'react'
import { useNavigate } from 'react-router-dom'

function Navbar() {
    const navigate = useNavigate()
    return (
        <div className='bg-[#1695ef] flex flex-row justify-between gap-12 p-5 text-white font-extrabold'>
            <div className='flex flex-auto text-xl'>
                Cashierku
            </div>
            <div className='flex flex-auto flex-row justify-evenly '>

                <div>
                    <button className='hover:font-normal font-medium' onClick={() => navigate("/home")}>
                        Home
                    </button>
                </div>

                <div>
                    <button className='hover:font-normal font-medium ' onClick={() => navigate("/add-product")}>
                        Add Product
                    </button>
                </div>

                <div>
                    <button className='hover:font-normal font-medium ' onClick={() => navigate("/edit-product")}>
                        Edit Product
                    </button>
                </div>
                <div>
                    <button className='hover:font-normal font-medium ' onClick={() => navigate("/dashboard")}>
                        Dashboard
                    </button>
                </div>

                <div>
                    <input className='font-normal bg-clip-border p-1' placeholder='Search'></input>
                </div>
            </div>
            <div className='flex flex-auto flex-row justify-evenly'>

                <div>
                    <button className='hover:font-normal font-medium' onClick={() => navigate("/register")}>
                        Register
                    </button>
                </div>
                <div>
                    <button className='hover:font-normal font-medium' onClick={() => navigate("login")}>
                        Login
                    </button>
                </div>
            </div>

        </div >
    )
}

export default Navbar