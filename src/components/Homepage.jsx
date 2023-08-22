import { Typography, Container, Box } from '@mui/material';

function Homepage() {
  const heroImageStyle = {
    backgroundImage: `url('/images/young-woman-with-shopping-bags-beautiful-dress-hat.jpg')`, 
    backgroundSize: '100% auto',
    backgroundPosition: 'center top',
    minHeight: '500px', 
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    textAlign: 'center',
    
  };

  return (
    <div>
      <Box sx={heroImageStyle}>
        <Container>
          <Typography variant="h4" component="h1" gutterBottom>
            Welcome to our Clothing Store!
          </Typography>
          <Typography variant="subtitle1" color="inherit">
            Discover the latest fashion trends for men and women.
          </Typography>
        </Container>
      </Box>

    
    </div>
  );
}

export default Homepage;
