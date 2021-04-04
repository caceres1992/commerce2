import React, {useContext, useEffect, useState} from 'react'

import CartContext from "../../context/car/CartContext";
import CheckoutContext from "../../context/checkout/CheckoutContext";

import '../../App.css'
import {Button, Card, Container, Step, StepLabel, Stepper} from "@material-ui/core";
import FormCustumer from "./FormCustumer";

const getStepsTitles = () => {
    return ["Paso 01", "Paso 02", "Paso 03"];
};

const getStepContent = (step) => {
    switch (step) {
        case 0:
            return <FormCustumer/>;
        case 1:
            return <h3>Este es un texto largo.</h3>;
        case 2:
            return <h3>Este es otro texto un poco más largo.</h3>;
        default:
            return <p>Step no encontrado.</p>;
    }
}

const PayProducts = () => {
    const cartContext = useContext(CartContext)

    const {getCarrito} = cartContext


    const [activeStep, setActiveStep] = useState(0);
    const stepsTitles = getStepsTitles();

    const backStep = () => {
        setActiveStep(activeStep - 1);
    };

    const nextStep = () => {
        setActiveStep(activeStep + 1);
    };

    const resetStep = () => {
        setActiveStep(0);
    };
    useEffect(() => {
        getCarrito();
    }, [])


    return (
        <>

            <div>
                <Stepper activeStep={activeStep}>
                    {stepsTitles.map((titleStep) => (
                        <Step>
                            <StepLabel>{titleStep}</StepLabel>
                        </Step>
                    ))}
                </Stepper>

                <Container>
                    {activeStep === stepsTitles.length ? (
                        <div>
                            <p>Finalizado</p>
                            <Button onClick={resetStep} variant="contained" color="secondary">
                                Reiniciar
                            </Button>
                        </div>
                    ) : (
                        <div>
                            <Card>{getStepContent(activeStep)}</Card>
                            <Button
                                onClick={backStep}
                                disabled={activeStep === 0}
                                style={{marginRight: "10px"}}
                            >
                                Atrás
                            </Button>
                            <Button
                                onClick={nextStep}
                                disabled={activeStep === stepsTitles.length}
                                variant="contained"
                                color="primary"
                            >
                                {activeStep === stepsTitles.length - 1
                                    ? "Finalizar"
                                    : "Siguiente"}
                            </Button>
                        </div>
                    )}
                </Container>
            </div>
        </>)
}

export default PayProducts;
