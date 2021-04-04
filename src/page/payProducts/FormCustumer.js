import React from 'react';
import {TextField} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'center',
    },
    margin: {
        margin: theme.spacing(1),
    },
    withoutLabel: {
        marginTop: theme.spacing(3),
    },
    textField: {
        width: '50ch',
        margin: theme.spacing(1),
    },
}));

const FormCustumer = () => {

    const clasess = useStyles()
    return (
        <form className={clasess.root}>
            <div>

                <TextField className={clasess.textField} id="filled-basic" label="firstName" variant="outlined"/>
                <TextField className={clasess.textField} id="filled-basic" label="Lastname" variant="outlined"/>

            </div>
            <div>

                <TextField className={clasess.textField} id="filled-basic" label="email" variant="outlined"/>
                <TextField className={clasess.textField} id="filled-basic" label="shippingName" variant="outlined"/>

            </div>
            <div>

                <TextField className={clasess.textField} id="filled-basic" label="shippingStreet" variant="outlined"/>
                <TextField className={clasess.textField} id="filled-basic" label="shippingCity" variant="outlined"/>

            </div>
            <div>

                <TextField className={clasess.textField} id="filled-basic" label="shippingStateProvince"
                           variant="outlined"/>
                <TextField className={clasess.textField} id="filled-basic" label="shippingPostalZipCode"
                           variant="outlined"/>

            </div>
            <div>

                <TextField fullWidth className={clasess.textField} id="filled-basic" label="shippingCountry"
                           variant="outlined"/>


            </div>


        </form>
    );
};

export default FormCustumer;

