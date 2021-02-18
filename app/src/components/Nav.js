import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, Menu, Typography, MenuItem } from '@material-ui/core';
import { AccountCircle } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles( () => ( {
    appbar: {
        backgroundColor: 'transparent',
        boxShadow: 'none',
        position: 'fixed'
    },
    toolbar: {
    },
    logo: {
        fontFamily: 'Agreement',
        color: 'white',
        fontSize: '45px',
        fontWeight: '700',
        userSelect: 'none',
        transform: 'rotate(-10deg)',
    },
    spacer: {
        display: 'flex',
        flex: 1,
    },
    menu: {
        transform: 'translate(0, 40px)',
    },
} ) );

export default function Nav ( props ) {
    const { setAuth } = props;
    const classes = useStyles();

    const [ anchorEl, setAnchorEl ] = useState( null );
    const open = Boolean( anchorEl );

    const handleMenu = ( event ) => {
        if ( anchorEl )
        {
            return handleClose();
        }
        setAnchorEl( event.currentTarget );
    };

    const handleClose = () => {
        setAnchorEl( null );
    };

    const signOutHandler = () => {
        handleClose();
        setAuth( null );
    };

    return (
        <AppBar position="static" className={classes.appbar}>
            <Toolbar className={classes.toolbar}>
                <Typography className={classes.logo}>
                    To do app
                </Typography>
                <div className={classes.spacer}></div>
                <IconButton
                    id="account"
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    onClick={handleMenu}
                    color="inherit"
                >
                    <AccountCircle />
                </IconButton>
                <Menu
                    id="menu-appbar"
                    anchorEl={anchorEl}
                    anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                    keepMounted
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'left',
                    }}
                    open={open}
                    onClose={handleClose}
                    className={classes.menu}
                >
                    <MenuItem onClick={signOutHandler}>Sign out</MenuItem>
                </Menu>
            </Toolbar>
        </AppBar>
    );
}
