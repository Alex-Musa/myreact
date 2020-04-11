import React, {useState} from 'react';
import {Link} from "react-router-dom"

// import make stayle
import { makeStyles } from '@material-ui/core/styles';
import MobileRightMenuSlider from '@material-ui/core/Drawer'

// import material ui
import {AppBar, Toolbar, ListItem, IconButton, ListItemText , Avatar, Divider, List, Typography, Box, ListItemIcon} from '@material-ui/core';
import {ArrowBack, AssignmentInd, Home, Apps, ContactMail} from '@material-ui/icons';

import Footer from "./Footer";

// import Imgae
// import avatar from '../avatar.png'
import alex from '../alex.jpg'


// CSS Styles
const useStyles = makeStyles(theme => ({
    menuSliderContainer:{
        width: 250,
        background: "#511",
        height: "100%",
        color: "tan"
    },

    avatar: {
        display: "block",
        margin: "0.5rem auto",
        width: theme.spacing(13),
        height: theme.spacing(13)
    },

    ListItem: {
        color: "tan"
    },
}));


// اضافة الايقونات
const menuItems = [
    {
        listItemIcon: <Home />,
        listText: "Home",
        listPath: "/"
    },
    {
        listItemIcon: <AssignmentInd/>,
        listText: "Resume",
        listPath: "/resume"
    },
    {
        listItemIcon: <Apps />,
        listText: "Protfolio",
        listPath: "/protfolio"
    },
    {
        listItemIcon: <ContactMail />,
        listText: "Contacts",
        listPath: "/contacts"
    }
]


const NavBar = () => {
    const [state, setState] = useState({
        right: false
    });

    const toggleSlider = ((slider, open) => () => {
        setState({...state, [slider]: open });

    });
    
    const classes = useStyles();

    const sideList = slider => (
            <Box 
            className={classes.menuSliderContainer}
             component="div" 
                onClick={toggleSlider(slider, false)}
            >
                <Avatar className={classes.avatar} src={alex} alt="ALEX MUSA"/>
                    <Divider />
                        <List>{menuItems.map((lsItem, key)=>(
                            <ListItem button key={key} component={Link} to={lsItem.listPath}>
                            <ListItemIcon className={classes.ListItem}>{lsItem.listItemIcon}</ListItemIcon>
                            <ListItemText primary={lsItem.listText}/>
                            </ListItem>
                        ))}
                </List>
            </Box>
    );
    
    return (
        <>
        <Box component="nav">
            <AppBar position="static" style={{background: '#222'}}>
                <Toolbar>
                    <IconButton onClick={toggleSlider("right", true)}>
                        <ArrowBack style={{color: 'tomato'}} />
                    </IconButton>
                    <Typography variant="h5" style={{color:"tan"}}>ALEX MUSA</Typography>
                    <MobileRightMenuSlider anchor="left"
                    open={state.right}
                    onClose={toggleSlider("right", false)}
                    >{sideList('right')}
                    <Footer />
                    </MobileRightMenuSlider>
                </Toolbar>
            </AppBar>
        </Box>
        </>
    )
}

export default NavBar
