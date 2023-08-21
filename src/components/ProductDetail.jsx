import React from 'react';
import { Typography, Card, CardMedia, CardContent } from '@mui/material';

function ProductDetail(props) {
  const productId = props.match.params.id;

  const products = [
    { id: 1, name: 'Product 1', imageUrl: '/images/product1.jpg', price: '$19.99', description: 'Lorem ipsum dolor sit amet...' },
    { id: 2, name: 'Product 2', imageUrl: '/images/product2.jpg', price: '$29.99', description: 'Lorem ipsum dolor sit amet...' },
  ];

  const product = products.find(product => product.id === Number(productId));

  if (!product) {
    return <Typography variant="h6">Product not found</Typography>;
  }

  return (
    <div>
      <Card>
        <CardMedia component="img" height="400" image={product.imageUrl} alt={product.name} />
        <CardContent>
          <Typography variant="h5">{product.name}</Typography>
          <Typography variant="subtitle1" color="textSecondary">
            Price: {product.price}
          </Typography>
          <Typography variant="body1">{product.description}</Typography>
        </CardContent>
      </Card>
    </div>
  );
}

export default ProductDetail;
