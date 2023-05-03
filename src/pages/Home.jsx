import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from '@chakra-ui/react'
import { useToast } from '@chakra-ui/react'

function Home() {
    const toast = useToast()
    const navigate = useNavigate()
    return (
        <div className='flex flex-row mt-[105px] m-14'>
            <div className='p-5 font-medium max-w-md'>
                <h1 className='text-5xl'>
                    <b>Mari berbisnis Jadi lebih mudah</b>
                </h1>
                <h3 className='text-3xl mt-[70px]'>memperkenalkan perangkat kasir paling mutakhir dan pastinya mudah dan aman untuk operasi bisnis anda</h3>
                <Button className='mt-6' colorScheme='twitter' onClick={() => navigate("/register")} >Register Now</Button>
            </div>
            <div className='flex-auto p-5 font-medium'>

                <img src='https://asset.kompas.com/crops/6Hj-Addb3gAB2o3k7BcwpAX0KB8=/0x1:1000x668/750x500/data/photo/2018/01/31/3910093161.jpg' className='ml-80 mt-10' width="400px">
                </img>
            </div>


        </div>
    )
}

export default Home