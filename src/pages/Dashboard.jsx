import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts } from '../product/productSlice'

function Dashboard() {
    const dispatch = useDispatch()
    const productList = useSelector((state) => state.products.productList)

    useEffect(() => {
        dispatch(fetchProducts())
    }, [])

    return (
        <div className='flex flex-row'>{productList.map((product, i) => {
            return (
                <div className='m-10'>
                    <h4>{product.productName}</h4>
                    <h4>{product.category}</h4>
                    <h4>{product.price}</h4>
                    <h4>{product.description}</h4>
                </div>
            )
        })}</div>
    )
}

export default Dashboard