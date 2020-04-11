import React from 'react';
import NavBar from './NavBar';
import Header from './Header';

// import Particles npm
import Particles from 'react-particles-js';
// import make stayle
import { makeStyles } from '@material-ui/styles';

import user from '../user.png'

const useStyles = makeStyles({
    particlesCanva: {
        position: 'absolute',
        opacity: "0.3",
    },
});


const Home = () => {

    const classes = useStyles();

    return (
        <>
            <NavBar />
            <Header />
            <Particles 
            canvasClassName={classes.particlesCanva}
                params={{
                    particles: {
                        number: {
                            value: 50,
                            density: {enable: true, value_area: 900}
                        },
                        shape:{
                            type: "image",
                            image:{
                                src: user,
                            },
                            stroke: {
                                width: 1,
                                color: "#ccc"
                                
                            }
                        },
                        size: {
                            value: 8,
                            random: true,
                            anim: {
                                enable: true,
                                speed: 6,
                                size_min: 0.1,
                                sync: true
                            }
                        },
                        opacity:{
                            value: 1,
                            random: true,
                            anim: {
                                enable: true,
                                speed: 1,
                                opacity_min: 0.1,
                                sync: true
                            }

                        }
                       
                        
                    }
                }}
            />

        </>
    )
}

export default Home
