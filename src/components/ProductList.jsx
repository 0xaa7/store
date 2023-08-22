import React from 'react'
import { Grid,Card, CardMedia, CardContent, Typography } from '@mui/material'

const ProductList = () => {
  const products = [
  {id:1, name:'product 1', price:'10$', imageUrl: '/images/dress_shirt_PNG8117.png'},
  {id:1, name:'product 1', price:'10$', imageUrl: '/images/dress_shirt_PNG8117.png'},
  {id:1, name:'product 1', price:'10$', imageUrl: '/images/dress_shirt_PNG8117.png'},
  {id:1, name:'product 1', price:'10$', imageUrl: '/images/dress_shirt_PNG8117.png'}

]

  return (
    <Grid marginTop={2} container spacing={2} >
      {products.map((product) => (
        <Grid sx={{ width: '220px' }} item  key={product.id}>
          <Card sx={{ width:'200px', cursor: "pointer",'&:hover': {
                      transform: 'translateY(-2px)',
                      boxShadow: '0px 2px 10px gray',
                   }}}>
            <CardMedia sx={{ objectFit: 'contain'}} component="img" height="200" image={product.imageUrl} alt={product.name} />
            <CardContent>
              <Typography variant='h6'>{product.name}</Typography>
              <Typography variant="body2" color="textSecondary">
                Price: {product.price}
              </Typography>

            </CardContent>

          </Card>

        </Grid>
      ) )}

    </Grid>
  )
}

export default ProductList