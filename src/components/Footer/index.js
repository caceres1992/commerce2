import React from 'react';
import {
    FooterContainer,
    FooterContent, FooterCopyright,
    FooterDisplay,
    FooterDisplayImg,
    FooterDisplayTitle, FooterLi, FooterMenu,
    FooterUl
} from "./FooterElements";
import imageAndroid from '../../img/appstoreaplle.png'
import {FaFacebook, FaInstagram, FaSnapchat, FaTwitter} from "react-icons/all";

const Footer = () => {
    return (
        <FooterContainer>
            <FooterContent>
                <div>
                    <FooterDisplay>
                        <FooterDisplayTitle>Encuentranos en</FooterDisplayTitle>
                        <FooterDisplayImg src={imageAndroid}/>
                    </FooterDisplay>
                </div>

                <div>
                    <FooterDisplay>
                        <FooterDisplayTitle>Menu</FooterDisplayTitle>
                        <FooterMenu>
                            <FooterLi>Home</FooterLi>
                            <FooterLi>Feature</FooterLi>
                            <FooterLi>New</FooterLi>
                            <FooterLi>Suscribed</FooterLi>

                        </FooterMenu>

                    </FooterDisplay>
                </div>

                <div>
                    <FooterDisplay>
                        <FooterDisplayTitle>Social Media</FooterDisplayTitle>
                        <FooterMenu>
                            <FooterLi><FaFacebook/></FooterLi>
                            <FooterLi><FaTwitter/></FooterLi>
                            <FooterLi><FaSnapchat/></FooterLi>
                            <FooterLi><FaInstagram/></FooterLi>

                        </FooterMenu>

                    </FooterDisplay>
                </div>
            </FooterContent>

            <FooterCopyright>&copy; No copyright CACERES {new Date().getFullYear() === 2021 ? <span>2021</span>
                : <span>2021 ?{new Date().getFullYear()}</span>

            }{}</FooterCopyright>
        </FooterContainer>
    );
};

export default Footer;
