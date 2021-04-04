import React, {useState} from 'react';
import {
    AlertaExitosa,
    ButoonSuscribed,
    FormularioInput,
    FormularioSuscribe, SucribedContent,
    SuscribedContainer,
    SuscribedDescription,
    SuscribedTitle
} from "./SuscribedElements";


const Suscribed = () => {


    const [email, setEmail] = useState('');
    const [isSuccess, setIsSuccess] = useState(false);
    const [isFailure, setIsFailure] = useState(false)
    const enviarSuscribed = (e) => {
        e.preventDefault();

        if (email.trim() === '') {

            setIsFailure(true)
            setTimeout(() => {
                setIsFailure(false)

            }, 3000)
            return;
        }

        setIsSuccess(true)
        setEmail('')
        setTimeout(() => {

            setIsSuccess(false)
        }, 3000)

    }
    return (
        <SuscribedContainer>
            <SucribedContent>
                <SuscribedTitle>Stay in the loop</SuscribedTitle>
                <SuscribedDescription>Be the first to know when new products drop
                    and get behind-the-scenes content
                    straight from RachelSon’s founder.</SuscribedDescription>
                <FormularioSuscribe onSubmit={enviarSuscribed}>
                    <FormularioInput value={email} onChange={(e) => setEmail(e.target.value)} type="email"
                                     placeholder="write your Email"/>
                    <ButoonSuscribed>Send</ButoonSuscribed>

                    <AlertaExitosa isSuccess={isSuccess} isFailure={isFailure}>
                        {isFailure ? <p>Email is Empty , Please try again</p> : null}
                        {isSuccess ? <p>Email Successfully</p> : null}

                    </AlertaExitosa>


                </FormularioSuscribe>

            </SucribedContent>

        </SuscribedContainer>
    );
};

export default Suscribed;
