import Axios from 'axios'
import { createSlice } from '@reduxjs/toolkit'

export const productSlice = createSlice({
    name: "products",
    initialState: {
        productList: [],
        product: {
            id: 0,
            productName: "",
            price: 0,
            description: "",
            productImage: "",
            category: ""
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
        let response = await Axios.get("http://localhost:3001/products")
        // console.log(response)
        dispatch(setProductList(response.data))
    }
}

export function addProduct(productInfo) {
    return async (dispatch) => {
        let response = await Axios.post("http://localhost:3001/products", productInfo)
        dispatch(setProduct(response.data))
        console.log(response.data)

    }
}