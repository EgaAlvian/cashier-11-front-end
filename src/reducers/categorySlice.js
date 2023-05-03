import Axios from "axios";
import { createSlice } from "@reduxjs/toolkit"

export const categorySlice = createSlice({
    name: "categories",
    initialState: {
        categoryList: [],
        category: {
            id: 0,
            name: ""
        }
    },
    reducers: {
        setCategory: (state, action) => {
            state.categoryList = action.payload
        }
    }

})

export const { setCategory } = categorySlice.actions
export default categorySlice.reducer

export function fetchCategories() {
    return async (dispatch) => {
        let response = await Axios.get("http://localhost:4000/categories")
        dispatch(setCategory(response.data.categories))
    }
}