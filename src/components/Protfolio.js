import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Box, Grid, Card, CardActionArea, CardActions, CardContent, CardMedia, Button, Typography} from '@material-ui/core';
import Navbar from "./NavBar";

// import images 
import Project1 from '../images/html-css-javascript-lg.jpg';
import Project2 from '../images/javascript-fullstack.jpg';
import Project3 from '../images/react-redux.jpg';
import Project4 from '../images/mern-stack.jpg';
// import classes from "*.module.css";

const useStyles = makeStyles({
    mainContainer:{
        background: "#233",
        height:"100%",
    },

    cardContainer: {
        maxWidth: 345,
        margin: '3rem auto 5rem',
    },


});


const Protfolio = () => {
    const classes = useStyles();
    return (
        <Box component="div" className={classes.mainContainer}>
            <Navbar />
            <Grid container justify="center" alignItems='center'>
                {/* Project1 */}
                <Grid item xs={12} sm={8} md={6}>
                 <Card className={classes.cardContainer}>
                    <CardActionArea>
                        <CardMedia component='img' alt="Project 1" height="140" image={Project1}/>
                        <CardContent>
                            <Typography gutterBottom variant="h5">
                                Project1
                            </Typography>
                            <Typography gutterBottom variant="body1" color="textSecondary" component="p">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                        <CardActions>
                            <Button size="small" color="primary">
                                GitHub
                            </Button>
                            <Button size="small" color="primary">
                                Live Demo
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>
                     {/* Project 2 */}
                <Grid item xs={12} sm={8} md={6}>
                 <Card className={classes.cardContainer}>
                    <CardActionArea>
                        <CardMedia component='img' alt="Project 2" height="140" image={Project2}/>
                        <CardContent>
                            <Typography gutterBottom variant="h5">
                                Project2
                            </Typography>
                            <Typography gutterBottom variant="body1" color="textSecondary" component="p">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                        <CardActions>
                            <Button size="small" color="primary">
                            GitHub
                            </Button>
                            <Button size="small" color="primary">
                                Live Demo
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>

                {/* Project 3 */}
                <Grid item xs={12} sm={8} md={6}>
                 <Card className={classes.cardContainer}>
                    <CardActionArea>
                        <CardMedia component='img' alt="Project 2" height="140" image={Project3}/>
                        <CardContent>
                            <Typography gutterBottom variant="h5">
                                Project3
                            </Typography>
                            <Typography gutterBottom variant="body1" color="textSecondary" component="p">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                        <CardActions>
                            <Button size="small" color="primary">
                            GitHub
                            </Button>
                            <Button size="small" color="primary">
                                Live Demo
                            </Button>
                        </CardActions>
                    
                    </Card>
                </Grid>

                {/* Project4 */}
                <Grid item xs={12} sm={8} md={6}>
                 <Card className={classes.cardContainer}>

                    <CardActionArea>
                        <CardMedia component='img' alt="Project 4" height="140" image={Project4}/>
                        <CardContent>
                            <Typography gutterBottom variant="h5">
                                Project 4
                            </Typography>
                            <Typography gutterBottom variant="body1" color="textSecondary" component="p">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic
                            </Typography>
                        </CardContent>
                    </CardActionArea>

                        <CardActions>
                            <Button size="small" color="primary">
                            GitHub
                            </Button>
                            <Button size="small" color="primary">
                                Live Demo
                            </Button>
                        </CardActions>

                    </Card>
                </Grid>
            </Grid>
        </Box>
    )
}

export default Protfolio
