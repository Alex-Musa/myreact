import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Typography, Avatar, Grid, Box} from '@material-ui/core';
import Typed from 'react-typed';
// import Imgae
import avatar from '../avatar.png'

// CSS Styles
const useStyles = makeStyles(theme => ({
    avatar: {
        width: theme.spacing(15),
        height: theme.spacing(15),
        margin: theme.spacing(1),
    },

    title:{
        color: 'tomato',
    },
    subtitle:{
        color: 'tan',
        marginBottom: '3rem',
    },

    typedContainer: {
        position: "absolute",
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '100vw',
        textAlign: 'center',
        zIndex: 1
    }
}));


const Header = () => {
    const classes = useStyles();
    return (
        <Box className={classes.typedContainer}>
            <Grid container justify="center">
                <Avatar className={classes.avatar} src={avatar} alt="Alex Musa"/>
            </Grid>
            <Typography className={classes.title} variant='h4'>
                <Typed strings={["ALEX MUSA"]} typeSpeed={40}/>
            </Typography>
            <br />
            <Typography className={classes.subtitle} variant='h5'>
                <Typed
                strings={["MERN Stack Developer","Front-end Developer","Back-end Developer","Full Stack Web Developer"]}
                typeSpeed={40}
                backSpeed={60}
                loop={1}
                />
            </Typography>

            <Typography className={classes.subtitle} variant='h6'>
            <Typed strings={["Full stack web developer with 5 years’ experience in desktop software development A detail-oriented, organized problem-solver with good listening skills. Enjoys developing defect free software, collaborating with others, meeting deadlines and exceeding customer expectations."]}
            typeSpeed={5}
            />
            </Typography>
            <Typography className={classes.title} variant='h4'>
                <Typed strings={["Technical Skills"]} typeSpeed={40}/>
            </Typography>
            <Typography className={classes.subtitle} variant='div'> Languages: <Typed strings={["HTML, CSS, JavaScript, Visual Basic.Net"]} typeSpeed={50}/></Typography>
            <br/>
            <Typography className={classes.subtitle} variant='div'>Freamwork: <Typed strings={["React JS, Vue.js, JQuery, Node JS, Express JS, BootStrap, Material-UI, SASS"]} typeSpeed={50}/></Typography>
            <br/>
            <Typography className={classes.subtitle} variant='div'> Database: <Typed strings={["MySQL, MongoDB, Microsoft SQL Server, Google-Firebase"]} typeSpeed={50}/></Typography>
            <br/>
            <Typography className={classes.subtitle} variant='div'> Others: <Typed strings={["FullRest API, GitBash, Heroku"]} typeSpeed={50}/></Typography>
        
            
            
            
        </Box>
        
 
    );
}

export default Header
