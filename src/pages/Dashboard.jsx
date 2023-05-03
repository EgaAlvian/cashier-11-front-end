import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts } from '../reducers/productSlice'
import { Card, CardHeader, CardBody, CardFooter, Stack, Heading, Text, Divider, ButtonGroup, Button, Image } from '@chakra-ui/react'
import { deleteProduct } from '../reducers/productSlice'

function Dashboard() {
    const dispatch = useDispatch()
    const productList = useSelector((state) => state.products.productList)

    useEffect(() => {
        dispatch(fetchProducts())
    }, [])

    const handleDeleteProduct = (id) => {
        dispatch(deleteProduct(id))
    }

    return (
        <div className='grid grid-cols-4 p-4'>{productList.map((product, i) => {
            return (
                <div>
                    {/* <div className='m-10'>
                        <h4>{product.productName}</h4>
                        <h4>{product.category}</h4>
                        <h4>{product.price}</h4>
                        <h4>{product.description}</h4>
                    </div> */}
                    <div className='flex p-3'>
                        <Card maxW='sm'>
                            <CardBody>
                                <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMSnRJ_gz2BtSIOJsUi4q4mkaHhfqAb7EPIA&usqp=CAU" borderRadius="lg"

                                />
                                <Stack mt='6' spacing='3'>
                                    <Heading size='md'>{product.name}</Heading>
                                    <Text>
                                        {product.category.name}
                                    </Text>
                                    <Text>
                                        {product.description}
                                    </Text>
                                    <Text color='blue.600' fontSize='2xl'>
                                        {product.price}
                                    </Text>
                                </Stack>
                            </CardBody>
                            <Divider />
                            <CardFooter>
                                <ButtonGroup spacing='2'>
                                    <Button variant='solid' colorScheme='twitter'>
                                        Edit
                                    </Button>
                                    <Button variant='solid' colorScheme='red' onClick={() => handleDeleteProduct(product.id)} >
                                        Delete
                                    </Button>
                                </ButtonGroup>
                            </CardFooter>
                        </Card>
                    </div>


                </div>
            )
        })}</div>
    )
}

export default Dashboard