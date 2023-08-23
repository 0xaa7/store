import { Typography, Container, Box } from '@mui/material';
import CategoryHero from './CategoryHero';
import './custom-styles.css';

function Homepage() {
  const heroImageStyle = {
    backgroundImage: `url('/images/background.jpg')`,
    backgroundSize: '100% auto',
    backgroundPosition: 'top left',
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    textAlign: 'center',
    zIndex: 0,
  };

  return (
    <Box sx={{ position: 'relative' }}>
      <Box sx={heroImageStyle}>
        <Container sx={{marginBottom:'250px'}}>
          <Typography variant="h4" component="h1" color="black" gutterBottom>
            Welcome to our Clothing Store!
          </Typography>
          <Typography variant="subtitle1" color="black">
            Discover the latest fashion trends for men and women.
          </Typography>
        </Container>
      </Box>

      <Box className="landing-page" sx={{ position: 'absolute', left: 0, right: 0, bottom: 0 }}>
        <Container sx={{ display: 'flex', justifyContent: 'center', gap: '20px', marginBottom: '100px' }}>
          <CategoryHero title="Men" imageUrl="/images/men.jpg" />
          <CategoryHero title="Women" imageUrl="/images/women.jpg" />
          <CategoryHero title="Kids" imageUrl="/images/kids.jpg" />
        </Container>
      </Box>
    </Box>
  );
}

export default Homepage;
