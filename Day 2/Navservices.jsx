import { Grid, Card, CardActions, CardContent, CardMedia, Button, Typography } from '@mui/material';
import '../../assets/css/Navservices.css'
import { Link } from 'react-router-dom';

export default function MediaCard() {
  return (
    <div className='jd'>
    <Grid container spacing={1} direction="row">
      <Grid item xs={4}>
        <Card className="zoomCard" sx={{ maxWidth: 400 ,boxShadow: '10px 4px 30px rgba(0, 0, 0, 0.1)', borderRadius: 4 }}>
          <CardMedia
            sx={{ height: 180 }}
            image="/src/assets/images/even.avif"
            title="green iguana"
            />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
            Entertainment Events  
            </Typography>
            <Typography variant="body2" color="text.secondary">
            At Purple Fox, we believe that each event is unique, deserving of personalized attention and creative flair. Our seasoned event planners work closely with you to understand your vision, preferences, and objectives. Whether youre envisioning a grand corporate gala, an intimate social gathering, or a themed celebration, we have the expertise to bring your ideas to life.
            </Typography>
          </CardContent>
          <CardActions>
            <Link to='/form'>
            <Button size="small">Book Now</Button>
            </Link>
            <Button size="small">Details</Button>
          </CardActions>
        </Card>
      </Grid>
      <Grid item xs={4}>
        <Card className="zoomCard" sx={{ maxWidth: 400 ,boxShadow: '10px 4px 30px rgba(0, 0, 0, 0.1)', borderRadius: 4}}>
          <CardMedia
            sx={{ height: 180 }}
            image="/src/assets/images/bud.avif"
            title="green iguana"
            />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
            Themed Gala Dinners
            </Typography>
            <Typography variant="body2" color="text.secondary">
            we specialize in Budget Planning and Financial Management to ensure that every event, regardless of size or scope, is executed seamlessly within your financial parameters. Our seasoned professionals work closely with you to develop comprehensive event budgets, taking into account all aspects of your vision while maintaining a keen eye on cost efficiency.
            </Typography>
          </CardContent>
          <CardActions>
          <Link to='/form'>
            <Button size="small">Book Now</Button>
            </Link>
            <Button size="small">Details</Button>
          </CardActions>
        </Card>
      </Grid>
      <Grid item xs={4}>
        <Card className="zoomCard" sx={{ maxWidth: 400  ,boxShadow: '10px 4px 30px rgba(0, 0, 0, 0.1)', borderRadius: 4}}>
          <CardMedia
            sx={{ height: 190 }}
            image="/src/assets/images/decor.jpeg"
            title="green iguana"
            />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
            Product Launch Parties
            </Typography>
            <Typography variant="body2" color="text.secondary">
            At Purple Fox, we understand that the right decor and theme can transform an event from ordinary to extraordinary. Our team of skilled designers collaborates closely with you to conceptualize themes that resonate with your vision and encapsulate the essence of your occasion.From elegant weddings to corporate functions and themed parties, we bring your dreams to life.
            </Typography>
          </CardContent>
          <CardActions>
          <Link to='/form'>
            <Button size="small">Book Now</Button>
            </Link>
            <Button size="small">Details</Button>
          </CardActions>
        </Card>
      </Grid>



      <div className='col-card'>
      <Grid container spacing={21.2} direction="row">
      <Grid item xs={4}>
        <Card className="zoomCard" sx={{ maxWidth: 400 ,boxShadow: '10px 4px 30px rgba(0, 0, 0, 0.1)', borderRadius: 4}}>
          <CardMedia
            sx={{ height: 190 }}
            image="/src/assets/images/mark.jpeg"
            title="green iguana"
            />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
            Corporate Conferences
            </Typography>
            <Typography variant="body2" color="text.secondary">
            At Purple Fox, we understand the power of effective event branding and marketing strategies. Whether youre organizing a corporate conference, a product launch, or a social celebration, our team of creative minds is committed to elevating your event to new heights. We work closely with you to develop a unique brand identity for your event, ensuring that every aspect aligns seamlessly with your vision and goals.
            </Typography>
          </CardContent>
          <CardActions>
          <Link to='/form'>
            <Button size="small">Book Now</Button>
            </Link>
            <Button size="small">Details</Button>
          </CardActions>
        </Card>
      </Grid>
      <Grid item xs={4}>
        <Card className="zoomCard" sx={{ maxWidth: 400 ,boxShadow: '10px 4px 30px rgba(0, 0, 0, 0.1)', borderRadius: 4 }}>
          <CardMedia
            sx={{ height: 200 }}
            image="/src/assets/images/virt.png"
            title="green iguana"
            />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
            Experiential Marketing Events
            </Typography>
            <Typography variant="body2" color="text.secondary">
            In todays dynamic world, the need for impactful virtual experiences is more significant than ever, and Purple Fox is at the forefront of this evolution. Our dedicated team of professionals leverages cutting-edge technology to seamlessly transform your events into immersive virtual journeys.he need for impactful virtual experiences is more significant than ever, and Purple Fox is at the forefront of this evolution.
            </Typography>
          </CardContent>
          <CardActions>
          <Link to='/form'>
            <Button size="small">Book Now</Button>
            </Link>
            <Button size="small">Details</Button>
          </CardActions>
        </Card>
      </Grid>
      <Grid item xs={4}>
        <Card className="zoomCard" sx={{ maxWidth: 400 ,boxShadow: '10px 4px 30px rgba(0, 0, 0, 0.1)', borderRadius: 4 }}>
          <CardMedia
            sx={{ height: 200 }}
            image="/src/assets/images/vendor.webp"
            title="green iguana"
            />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
            Birthday Party
            </Typography>
            <Typography variant="body2" color="text.secondary">
            Our approach to Vendor Management goes beyond the conventional, as we meticulously select and coordinate with a network of trusted partners to enhance every aspect of your event. Whether its sourcing high-quality catering, securing cutting-edge audio-visual equipment, or collaborating with talented decorators, Purple Fox is dedicated to delivering a comprehensive and stress-free vendor experience.
            </Typography>
          </CardContent>
          <CardActions>
          <Link to='/form'>
            <Button size="small">Book Now</Button>
            </Link>
            <Button size="small">Details</Button>
          </CardActions>
        </Card>
      </Grid>
      </Grid>
            </div>
    </Grid><br></br><br></br>
   </div>
  );
}

