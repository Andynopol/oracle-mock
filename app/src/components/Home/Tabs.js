import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

const useStyles = makeStyles( {
    root: {
        backgroundColor: 'transparent',
        boxShadow: 'none',
        marginBottom: '1rem'
    },
} );

export default function CenteredTabs ( props ) {
    const classes = useStyles();
    const { value, setValue } = props;

    const handleChange = ( event, newValue ) => {
        setValue( newValue );
    };

    return (
        <Paper className={classes.root}>
            <Tabs
                value={value}
                onChange={handleChange}
                indicatorColor="primary"
                textColor="primary"
                centered
            >
                <Tab label="All" />
                <Tab label="Incompleted" />
                <Tab label="Completed" />
            </Tabs>
        </Paper>
    );
}