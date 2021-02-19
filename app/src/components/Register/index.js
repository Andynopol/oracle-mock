import React, { useState, useEffect } from 'react';
import { Grid, TextField, Button } from '@material-ui/core';
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
        height: '600px',
        '@media screen and (orientation: landscape)': {
            marginTop: '50px',
            height: '535px'
        },
        background: 'linear-gradient(to right bottom, rgba(255, 255, 255, 0.4), rgba(255,255,255,0.5))',
        borderRadius: '16px',
        padding: '20px 20px 20px 20px',
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
        '@media screen and (orientation: landscape)': {
            marginBottom: '10px'
        },
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
        marginTop: '20px',
        marginBottom: '20px',
        '&>div': {
            display: 'flex',
            justifyContent: 'flex-start',
            [ theme.breakpoints.up( 'xs' ) ]: {
                justifyContent: 'center'
            }
        }
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
    const [ user, setUser ] = useState( { username: null, email: null, password: null, repassword: null, phone: null, site: null } );
    const [ invalidFields, setInvalidFields ] = useState( { username: false, email: false, password: false, repassword: false } );
    const [ registerMessage, setRegisterMessage ] = useState( '' );

    const classes = useStyles();

    const handleFieldOnChange = ( event ) => {
        event.persist();

        user[ event.target.name ] = event.target.value;
        setUser( { ...user } );
    };

    useEffect( () => {
        console.log( user );
    }, [ user ] );


    const handleRegister = async () => {
        console.log( user );
        if ( user.username && user.email && user.password && user.repassword )
        {
            const registerOptions = {
                headers: {
                    'Content-type': 'application/json'
                },
                method: 'POST',
                body: JSON.stringify( user )
            };
            const response = await ( await fetch( '/register-user', registerOptions ) ).json();
            console.log( response );
            if ( response.status === 'success' )
            {
                const loginOptions = {
                    headers: {
                        'Content-type': 'application/json'
                    },
                    method: 'POST',
                    body: JSON.stringify( { username: user.username, password: user.password } )
                };
                setRegisterMessage( '' );
                const loginResponse = await ( await fetch( '/login-user', loginOptions ) ).json();
                console.log( loginResponse );
                if ( loginResponse.status === 'success' )
                {
                    setAuth( { ...loginResponse.userData } );
                    setPath( '/todos' );
                }
            }
            else
            {
                setRegisterMessage( response.message );
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
                                                label="Username*"
                                                type="text"
                                                variant="outlined"
                                                className={`${ classes.authentificationFields } ${ invalidFields.username ? classes.invalidField : '' }`}
                                                name='username'
                                                onFocus={removeInvalid}
                                                onChange={handleFieldOnChange}
                                            />
                                        </Grid>
                                    </Grid>
                                    <Grid item xs={12} md={6}>
                                        <Grid container className={classes.w100}>
                                            <TextField
                                                label="Email*"
                                                type="mail"
                                                variant="outlined"
                                                className={`${ classes.authentificationFields } ${ invalidFields.email ? classes.invalidField : '' }`}
                                                name='email'
                                                onFocus={removeInvalid}
                                                onChange={handleFieldOnChange}
                                            />
                                        </Grid>
                                    </Grid>
                                    <Grid item xs={12} md={6}>
                                        <Grid container className={classes.w100}>
                                            <TextField
                                                label="Password*"
                                                type="password"
                                                variant="outlined"
                                                className={`${ classes.authentificationFields } ${ invalidFields.password ? classes.invalidField : '' }`}
                                                name="password"
                                                onFocus={removeInvalid}
                                                onChange={handleFieldOnChange}
                                            />
                                        </Grid>
                                    </Grid>
                                    <Grid item xs={12} md={6}>
                                        <Grid container className={classes.w100}>
                                            <TextField
                                                label="Re-Password*"
                                                type="password"
                                                variant="outlined"
                                                className={`${ classes.authentificationFields } ${ invalidFields.repassword ? classes.invalidField : '' }`}
                                                name="repassword"
                                                onFocus={removeInvalid}
                                                onChange={handleFieldOnChange}
                                            />
                                        </Grid>
                                    </Grid>
                                    <Grid item xs={12} md={6}>
                                        <Grid container className={classes.w100}>
                                            <TextField
                                                label="Website"
                                                type="text"
                                                variant="outlined"
                                                className={classes.authentificationFields}
                                                name="site"
                                                onChange={handleFieldOnChange}
                                            />
                                        </Grid>
                                    </Grid>
                                    <Grid item xs={12} md={6}>
                                        <Grid container className={classes.w100}>
                                            <TextField
                                                label="Phone"
                                                type="phone"
                                                variant="outlined"
                                                className={classes.authentificationFields}
                                                name="phone"
                                                onChange={handleFieldOnChange}
                                            />
                                        </Grid>
                                    </Grid>

                                    <Grid item xs={12}>
                                        <Grid container className={classes.controls}>
                                            <Grid item xs={false} md={1} />
                                            <Grid item xs={2} md={5}>
                                                <Grid container alignItems="center">
                                                    <Button color="default" onClick={() => { setPath( '/login' ); }}>Back</Button>
                                                </Grid>
                                            </Grid>
                                            <Grid item xs={2} md={1} />
                                            <Grid item xs={8} md={5}>
                                                <Button
                                                    variant="contained"
                                                    color="primary"
                                                    className={classes.register}
                                                    onClick={handleRegister}
                                                >Create Account</Button>
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
