import { Typography, List, ListItem, ListItemText } from '@mui/material';

function ShoppingCart() {
  const cartItems = [
    { id: 1, name: 'Product 1', price: '$19.99' },
  ];

  return (
    <div>
      <Typography variant="h5">Shopping Cart</Typography>
      {cartItems.length === 0 ? (
        <Typography>Your cart is empty.</Typography>
      ) : (
        <List>
          {cartItems.map(item => (
            <ListItem key={item.id}>
              <ListItemText primary={item.name} secondary={`Price: ${item.price}`} />
            </ListItem>
          ))}
        </List>
      )}
    </div>
  );
}

export default ShoppingCart;
