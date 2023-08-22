import { AppBar, Stack, Tab, Tabs, Toolbar, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import ShoppingCartTwoToneIcon from '@mui/icons-material/ShoppingCartTwoTone';
import './custom-styles.css';

function Header() {
  return (
    <Stack display='flex' direction='row' justifyContent='start' alignContent="space-between">
    <AppBar sx={{
      backgroundColor:'White',
    }} position="static">
        <Toolbar>
          <Link to='/' style={{ textDecoration: 'none' }} >
          <Typography variant="h6" sx={{color:'black', fontWeight:'bold'}}>Favrrel</Typography>
          </Link>
          
          <Tabs sx={{marginLeft:'auto'}}  textColor='black' className="header-tabs" >
            <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }} >
              <Tab label='Home' active />
            </Link>
            <Link to="/products" style={{ textDecoration: 'none', color: 'inherit' }}>
              <Tab label='Products' active />
            </Link>
            <Link to="/cart" style={{ textDecoration: 'none', color: 'inherit' }}>
              <Tab icon={<ShoppingCartTwoToneIcon />} />
            </Link>
          </Tabs>
       
        </Toolbar>  
      </AppBar>
    </Stack>
    
  );
}

export default Header;
