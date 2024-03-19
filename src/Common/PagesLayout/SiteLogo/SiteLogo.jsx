import React from "react";
import styled from "styled-components";

/* Images ---------------------------*/
import logoUrl from "./ParnassusLogo.png";

const SiteLogo = () => {
    return (
        <SiteLogoStyled className="SiteLogo">
            <img src={logoUrl} alt="Parnassus Logo" />
        </SiteLogoStyled>
    );
};

export default SiteLogo;

const SiteLogoStyled = styled.div`
    color: #dcdcdc;
    width: 100%;
    height: 100%;

    img {
        width: auto;
        height: auto;
    }
`;
