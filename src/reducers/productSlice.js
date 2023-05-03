import Axios from 'axios'
import { createSlice } from '@reduxjs/toolkit'

export const productSlice = createSlice({
    name: "products",
    initialState: {
        productList: [],
        product: {
            id: 0,
            name: "",
            price: 0,
            description: "",
            categoryId: ""
        }
    },
    reducers: {
        setProductList: (state, action) => {
            state.productList = action.payload
        },
        setProduct: (state, action) => {
            state.product = action.payload
        }
    }
})

export const { setProductList, setProduct } = productSlice.actions
export default productSlice.reducer

export function fetchProducts() {
    return async (dispatch) => {
        let response = await Axios.get("http://localhost:4000/products")
        // console.log(response)
        dispatch(setProductList(response.data.products))
    }
}

export function addProduct(productInfo) {
    return async (dispatch) => {
        let response = await Axios.post("http://localhost:4000/products", productInfo)
        dispatch(setProduct(response.data.product))
        // console.log(response.data)

    }
}
export function deleteProduct(id) {
    return async (dispatch) => {
        let response = await Axios.delete(`http://localhost:3001/products/${id}`)
        // dispatch(setProduct(response))
        console.log(response)

    }
}
