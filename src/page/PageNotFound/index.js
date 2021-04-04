import React from 'react';
import {FoundButtonReturn, FoundContent, FoundErrorTitle, FoundImg, NotFoundContainer} from "./PageNotFound";
import error404 from '../../img/error404.svg';
import {BsArrowLeftShort} from "react-icons/bs";

const PageNotFound = () => {
    return (
        <NotFoundContainer>
            <FoundContent>
                <div>
                    <FoundErrorTitle>Not Found Page</FoundErrorTitle>
                    <FoundImg src={error404}/>
                </div>
                <div>
                    <FoundButtonReturn to={'/'}> <BsArrowLeftShort/> return Home </FoundButtonReturn>
                </div>

            </FoundContent>

        </NotFoundContainer>
    );
};

export default PageNotFound;
