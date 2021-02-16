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
        height: '550px',
        '@media screen and (orientation: landscape)': {
            marginTop: '50px',
        },
        background: 'linear-gradient(to right bottom, rgba(255, 255, 255, 0.4), rgba(255,255,255,0.5))',
        borderRadius: '16px',
        padding: '50px 20px 70px 20px',
        maxWidth: '400px'
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
        height: '100px',
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
        display: 'flex',
        flexDirection: 'column',
        flex: 1,
    },
    mainContent: {
        width: '100%'
    },
    w100: {
        '&>div': {
            width: '100%',
        }
    }

} ) );

export default function Login ( props ) {
    const { panther } = props;
    const classes = useStyles();
    return (
        <Grid container>
            <Grid item xs={1} md={4} />
            <Grid item xs={10} md={4}>
                <Grid container className={classes.root}>

                    <Grid item xs={12} className={classes.glass}>
                        <img className={classes.img} src={panther} alt="ceva" />
                        <Grid container direction="column" alignItems="center" className={classes.wrapper}>
                            <Grid item className={classes.logo}>
                                To do app
                            </Grid>
                            <div className={classes.spacer}></div>
                            <Grid item xs={12} className={classes.mainContent}>
                                <Grid container direction="column" spacing={2} className={classes.fields}>
                                    <Grid item xs={12} className={classes.w100}>
                                        <Grid container justify="center">
                                            <TextField
                                                id="login-user"
                                                label="Username"
                                                type="text"
                                                autoComplete="current-password"
                                                variant="outlined"
                                                className={classes.authentificationFields}
                                            />
                                        </Grid>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Grid container justify="center">
                                            <TextField
                                                id="login-password"
                                                label="Password"
                                                type="password"
                                                autoComplete="current-password"
                                                variant="outlined"
                                                className={classes.authentificationFields}
                                            />
                                        </Grid>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Grid container justify="flex-start">
                                            <Grid item xs={3} />
                                            <Grid item xs={9}>
                                                <FormControlLabel
                                                    value="end"
                                                    control={<Checkbox color="primary" />}
                                                    label="Remember me"
                                                    labelPlacement="end"
                                                />
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Grid container justify="center">
                                            In construction
                                        </Grid>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Grid container>
                                            <Grid item xs={2} />
                                            <Grid item xs={4}>
                                                <Grid container justify="center" alignItems="center">
                                                    <Link to="/" className="router-link">
                                                        <Button variant="contained" color="primary">Login</Button>
                                                    </Link>
                                                </Grid>
                                            </Grid>
                                            <Grid item xs={2} />
                                            <Grid item xs={4}>
                                                <Link to="/register" className="router-link">
                                                    <Button color="default">Register</Button>
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
            <Grid item xs={1} md={4} />
        </Grid>
    );
}
