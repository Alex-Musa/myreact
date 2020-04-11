import React from 'react';
import { makeStyles } from '@material-ui/styles';
import {BottomNavigation, BottomNavigationAction} from '@material-ui/core';
import FacebookIcon from '@material-ui/icons/Facebook';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';


const useStyle = makeStyles({
    root: {
        "& .MuiBottomNavigationAction-root":{
            minWidth: 0,
            maxWidth: 250,
        },
        "& .MuiSvgIcon-root": {
            fill: "tan",
            "&:hover": {
                fill: "tomato",
                fontSize: "1.8rem"
            },
        },
    },
});


const Footer = () => {

    const classes = useStyle()

    return (
        <BottomNavigation width="auto" style={{background: "#222"}}>
            <BottomNavigationAction 
            className={classes.root}
            style={{padding:0}}
            icon={<FacebookIcon/>}
            />
            <BottomNavigationAction
            className={classes.root}
            style={{padding:0}}
            icon={<GitHubIcon/>}
            />
            <BottomNavigationAction
            className={classes.root}
            style={{padding:0}}
            icon={<LinkedInIcon/>}
            />
        </BottomNavigation>
    )
}

export default Footer
            