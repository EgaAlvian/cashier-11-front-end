import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import { Button } from '@chakra-ui/react'
import { useToast } from '@chakra-ui/react'
import { addProduct } from '../product/productSlice'

function AddProduct() {
    const [productName, setProductName] = useState('')
    const [category, setCategory] = useState('')
    const [price, setPrice] = useState('')
    const [description, setDescription] = useState('')

    const dispatch = useDispatch()

    const toast = useToast()
    const loginSchema = Yup.object().shape({
        username: Yup.string().email('Format username salah')
            .required('Username tidak boleh kosong'),
        email: Yup.string().email('Format email salah')
            .required('Email tidak boleh kosong'),
        password: Yup.string()
            .min(6, 'Password harus lebih dari 6 character')
            .required('Password tidak boleh kosong')

    })

    const handleSubmitAddProduct = (e) => {
        e.preventDefault()

        dispatch(addProduct({
            productName,
            price,
            description,
            category
        }))
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
                                <Field type="text" name="namaproduct" class="border-2" placeholder="Enter Your Name Product..." onChange={(e) => setProductName(e.target.value)} />
                                <ErrorMessage
                                    component="div"
                                    name='namaproduct'
                                    style={{ color: "red" }} />
                            </div>
                            <div className='flex flex-col p-2 '>
                                <label htmlFor='Category'>Category</label>
                                <Field type="text" name="Category" class="border-2" placeholder="Enter Your Category..." onChange={(e) => setCategory(e.target.value)} />
                                <ErrorMessage
                                    component="div"
                                    name='Category'
                                    style={{ color: "red" }} />
                            </div>
                            <div className='flex flex-col p-2 '>
                                <label htmlFor='Price'>Price</label>
                                <Field type="number" name="Price" class="border-2" placeholder="Enter Your Price..." onChange={(e) => setPrice(e.target.value)} />
                                <ErrorMessage
                                    component="div"
                                    name='Price'
                                    style={{ color: "red" }} />
                            </div>
                            <div className='flex flex-col p-2 '>
                                <label htmlFor='Description'>Description</label>
                                <Field type="text" name="Description" class="border-2" placeholder="Enter Your Description..." onChange={(e) => setDescription(e.target.value)} />
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