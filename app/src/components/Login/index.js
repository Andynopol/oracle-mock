import React, { useState, useEffect } from 'react';
import { Grid, TextField, Checkbox, FormControlLabel, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles( ( theme ) => ( {
    main: {
        [ theme.breakpoints.up( 'md' ) ]: {
            minHeight: '100vh'
        },
        minHeight: '600px',
        // background: 'linear-gradient(to right top,#ffbff6,#f58ade)',
        width: '100%',
    },
    root: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        position: 'relative'
    },
    glass: {
        position: 'relative',
        height: '500px',
        '@media screen and (orientation: landscape)': {
            marginTop: '20px',
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
    },
    failLogin: {
        color: 'red',
    },
    invalidField: {
        '&>label': {
            color: 'red',
        },
        '& fieldset': {
            borderColor: 'rgba(255, 0, 0, 0.5)',
        }
    }

} ) );

export default function Login ( props ) {
    const { panther, setAuth, setPath } = props;
    const classes = useStyles();



    const [ user, setUser ] = useState( { username: null, password: null } );
    const [ failLoginMessage, setFailLoginMessage ] = useState( '' );
    const [ invalidFields, setInvalidFields ] = useState( { username: false, password: false } );



    useEffect( () => {
        console.log( user );
    }, [ user ] );


    const handleOnChange = ( event ) => {
        event.persist();
        user[ event.target.name ] = event.target.value;
        setUser( { ...user } );
    };


    const handleClickLogin = async () => {
        console.log( user );
        if ( user.username && user.password )
        {
            const options = {
                headers: {
                    'Content-type': 'application/json'
                },
                method: 'POST',
                body: JSON.stringify( user )
            };
            const response = await ( await fetch( '/login-user', options ) ).json();
            if ( response.status === 'success' )
            {
                setFailLoginMessage( '' );
                setAuth( { ...response.userData } );
                setPath( '/todos' );
            }
            else
            {
                setFailLoginMessage( response.message );
            }
        }
        else
        {
            for ( let key in user )
            {
                console.log( !user[ key ] );
                if ( !user[ key ] )
                {
                    console.log( invalidFields[ key ] );
                    invalidFields[ key ] = true;
                }
            }
            setInvalidFields( { ...invalidFields } );
        }
    };

    const removeInvalid = ( event ) => {
        event.persist();
        invalidFields[ event.target.name ] = false;
        setInvalidFields( { ...invalidFields } );
    };


    return (
        <Grid container className={classes.main}>
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
                                                variant="outlined"
                                                className={`${ classes.authentificationFields } ${ invalidFields.username ? classes.invalidField : '' }`}
                                                name="username"
                                                onChange={handleOnChange}
                                                onSelect={removeInvalid}
                                            />
                                        </Grid>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Grid container justify="center">
                                            <TextField
                                                id="login-password"
                                                label="Password"
                                                type="password"
                                                variant="outlined"
                                                className={`${ classes.authentificationFields } ${ invalidFields.password ? classes.invalidField : '' }`}
                                                name="password"
                                                onChange={handleOnChange}
                                                onSelect={removeInvalid}
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
                                        <Grid container justify="center" className={classes.failLogin}>
                                            {failLoginMessage}
                                        </Grid>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Grid container>
                                            <Grid item xs={1} />
                                            <Grid item xs={4}>
                                                <Grid container justify="center" alignItems="center">
                                                    <Button variant="contained" color="primary" onClick={handleClickLogin}>Login</Button>
                                                </Grid>
                                            </Grid>
                                            <Grid item xs={1} />
                                            <Grid item xs={1} />
                                            <Grid item xs={4}>
                                                <Button color="default" onClick={() => { setPath( '/register' ); }}>Register</Button>
                                            </Grid>
                                            <Grid item xs={1} />
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
