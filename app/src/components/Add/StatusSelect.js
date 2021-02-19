import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles( ( theme ) => ( {
    formControl: {
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing( 2 ),
    },
} ) );

export default function SelectLabels ( props ) {
    const classes = useStyles();
    const { setComplete } = props;
    const [ value, setValue ] = useState( 'incomplete' );


    const handleChange = ( event ) => {
        setComplete( event.target.value === "complete" );
        setValue( event.target.value );
    };

    return (
        <FormControl className={classes.formControl}>
            <Select
                value={value}
                onChange={handleChange}
                displayEmpty
                className={classes.selectEmpty}
                inputProps={{ 'aria-label': 'Without label' }}
            >
                <MenuItem value={"complete"}>Complete</MenuItem>
                <MenuItem value={"incomplete"}>Incomplete</MenuItem>
            </Select>
        </FormControl>
    );
}