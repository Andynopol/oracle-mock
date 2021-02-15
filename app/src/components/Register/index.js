import React from 'react';
import { Grid, TextField, Checkbox, FormControlLabel, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

const useStyles = makeStyles( ( theme ) => ( {
    root: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        position: 'relative'
    },
    glass: {
        position: 'relative',
        '@media screen and (orientation: landscape)': {
            marginTop: '50px',
            height: '630px',
        },
        [ theme.breakpoints.up( 'lg' ) ]: {
            height: '60vh',
        },
        background: 'linear-gradient(to right bottom, rgba(255, 255, 255, 0.4), rgba(255,255,255,0.5))',
        borderRadius: '16px',
        padding: '50px 20px 20px 20px',
        maxWidth: '600px'
    },
    img: {
        position: 'absolute',
        top: '0px',
        left: '-209px',
        width: '-250px',
        height: '250px',
        zIndex: 3,
        display: 'none',
        [ theme.breakpoints.up( 'md' ) ]: {
            display: 'block'
        },

    },
    logo: {
        backgroundColor: 'transparent',
        height: '100px',
        width: '100%',
        fontFamily: 'Agreement',
        color: 'white',
        fontSize: '60px',
        fontWeight: '700',
        userSelect: 'none',
        display: 'flex',
        justifyContent: "center",
        alignItems: 'center',
        transform: 'rotate(-10deg)',
        marginBottom: '60px',
    },
    innerSection: {
        height: '300px',
        backgroundColor: 'red',
    },
    fields: {
        justifyContent: 'space-between'
    },
    wrapper: {
        minHeight: '100%',
    },
    authentificationFields: {

        '&>label': {
            transform: 'translate(14px, 13px) scale(1)',
        },
        '& input': {
            padding: '10px 10px 10px 10px',
        },
    },
    spacer: {
        display: 'none',
        [ theme.breakpoints.up( 'md' ) ]: {
            display: 'flex',
            flexDirection: 'column',
            flex: 1,
        }

    },
    mainContent: {
        width: '100%'
    },
    w100: {
        '&>div': {
            width: '100%',
        }
    },
    controls: {
        paddingTop: '20px',
        marginBottom: '20px',
        '&>div': {
            display: 'flex',
            justifyContent: 'flex-start',
            [ theme.breakpoints.up( 'xs' ) ]: {
                justifyContent: 'center'
            }
        }
    }

} ) );

export default function Login ( props ) {
    const { panther } = props;
    const classes = useStyles();
    return (
        <Grid container>
            <Grid item xs={1} md={2} />
            <Grid item xs={10} md={8}>
                <Grid container className={classes.root}>

                    <Grid item xs={12} className={classes.glass}>
                        <img className={classes.img} src={panther} alt="ceva" />
                        <Grid container direction="column" alignItems="center" className={classes.wrapper}>
                            <Grid item className={classes.logo}>
                                To do app
                            </Grid>
                            <div className={classes.spacer}></div>
                            <Grid item xs={12} className={classes.mainContent}>
                                <Grid container spacing={2}>
                                    <Grid item xs={12} md={6}>
                                        <Grid container className={classes.w100}>
                                            <TextField
                                                id="login-user"
                                                label="Username*"
                                                type="text"
                                                autoComplete="current-password"
                                                variant="outlined"
                                                className={classes.authentificationFields}
                                            />
                                        </Grid>
                                    </Grid>
                                    <Grid item xs={12} md={6}>
                                        <Grid container className={classes.w100}>
                                            <TextField
                                                id="login-user"
                                                label="Email*"
                                                type="mail"
                                                autoComplete="current-password"
                                                variant="outlined"
                                                className={classes.authentificationFields}
                                            />
                                        </Grid>
                                    </Grid>
                                    <Grid item xs={12} md={6}>
                                        <Grid container className={classes.w100}>
                                            <TextField
                                                id="login-user"
                                                label="Password*"
                                                type="password"
                                                autoComplete="current-password"
                                                variant="outlined"
                                                className={classes.authentificationFields}
                                            />
                                        </Grid>
                                    </Grid>
                                    <Grid item xs={12} md={6}>
                                        <Grid container className={classes.w100}>
                                            <TextField
                                                id="login-user"
                                                label="Re-Password*"
                                                type="password"
                                                autoComplete="current-password"
                                                variant="outlined"
                                                className={classes.authentificationFields}
                                            />
                                        </Grid>
                                    </Grid>
                                    <Grid item xs={12} md={6}>
                                        <Grid container className={classes.w100}>
                                            <TextField
                                                id="login-user"
                                                label="Website"
                                                type="text"
                                                autoComplete="current-password"
                                                variant="outlined"
                                                className={classes.authentificationFields}
                                            />
                                        </Grid>
                                    </Grid>
                                    <Grid item xs={12} md={6}>
                                        <Grid container className={classes.w100}>
                                            <TextField
                                                id="login-user"
                                                label="Phone"
                                                type="phone"
                                                autoComplete="current-password"
                                                variant="outlined"
                                                className={classes.authentificationFields}
                                            />
                                        </Grid>
                                    </Grid>

                                    <Grid item xs={12}>
                                        <Grid container className={classes.controls}>
                                            <Grid item xs={false} md={1} />
                                            <Grid item xs={4} md={5}>
                                                <Grid container alignItems="center">
                                                    <Link to="/login" className="router-link">
                                                        <Button color="default">Back</Button>
                                                    </Link>
                                                </Grid>
                                            </Grid>
                                            <Grid item xs={false} md={1} />
                                            <Grid item xs={8} md={5}>
                                                <Link to="/" className="router-link">
                                                    <Button variant="contained" color="primary">Create Account</Button>
                                                </Link>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={1} md={2} />
        </Grid>
    );
}
