import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import { Button, Select } from '@chakra-ui/react'
import { useToast } from '@chakra-ui/react'
import { addProduct } from '../reducers/productSlice'
import { fetchCategories } from '../reducers/categorySlice'

function AddProduct() {
    const [productName, setProductName] = useState('')
    const [categoryId, setCategoryId] = useState(null)
    const [price, setPrice] = useState('')
    const [description, setDescription] = useState('')

    const dispatch = useDispatch()

    const categoryList = useSelector((state) => state.categories.categoryList)

    useEffect(() => {
        dispatch(fetchCategories())
    }, [])

    const toast = useToast()
    const loginSchema = Yup.object().shape({
        product: Yup.string()
            .required('Format Product tidak boleh kosong'),
        category: Yup.string()
            .required('Format Category tidak boleh kosong'),
        price: Yup.string()
            .required('Format Price tidak boleh kosong'),
        description: Yup.string()
            .required('Format Description tidak boleh kosong')

    })

    const handleSubmitAddProduct = (e) => {
        e.preventDefault()

        dispatch(addProduct({
            name: productName,
            price,
            description,
            categoryId
        }))

        alert('success')
    }

    return (
        <div className='flex flex-row justify-center items-center p-10 font-semibold'>
            <Formik initialValues={{ email: "", password: "" }}
                validationSchema={loginSchema}
                onSubmit={handleSubmitAddProduct}
            >

                {(props) => {
                    return (
                        <Form onSubmit={handleSubmitAddProduct}>
                            <div className='flex flex-col p-2'>
                                <label htmlFor='namaproduct'>Name Product</label>
                                <Field type="text" name="namaproduct" class="border-2" onChange={(e) => setProductName(e.target.value)} />
                                <ErrorMessage
                                    component="div"
                                    name='namaproduct'
                                    style={{ color: "red" }} />
                            </div>
                            <div className='flex flex-col p-2 '>
                                <label htmlFor='Category'>Category</label>
                                <Select onChange={(e) => setCategoryId(e.target.value)}>
                                    <option value="" selected disabled hidden>Select category</option>
                                    {
                                        categoryList.map((category, i) => {
                                            return (
                                                <option value={category.id}>
                                                    {category.name}
                                                </option>
                                            )
                                        })
                                    }
                                </Select>
                                <ErrorMessage
                                    component="div"
                                    name='Category'
                                    style={{ color: "red" }} />
                            </div>
                            <div className='flex flex-col p-2 '>
                                <label htmlFor='Price'>Price</label>
                                <Field type="number" name="Price" class="border-2" onChange={(e) => setPrice(e.target.value)} />
                                <ErrorMessage
                                    component="div"
                                    name='Price'
                                    style={{ color: "red" }} />
                            </div>
                            <div className='flex flex-col p-2 '>
                                <label htmlFor='Description'>Description</label>
                                <Field type="text" name="Description" class="border-2" onChange={(e) => setDescription(e.target.value)} />
                                <ErrorMessage
                                    component="div"
                                    name='Description'
                                    style={{ color: "red" }} />
                            </div>
                            <div className=' flex flex-row p-3 '>
                                <Button type='submit' colorScheme='twitter'>Add</Button>
                            </div>

                        </Form>
                    )
                }}

            </Formik>
        </div>
    )

}

export default AddProduct