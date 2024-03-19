import styled from "styled-components";

// Media Query
import { useMediaQuery } from "@/Common/useMediaQuery";

// components
import MediumLarge from "./MediumLarge";
import Small from "./Small";

const Header = () => {
    const { isMediumAndUp } = useMediaQuery();

    return (
        <HeaderStyled>
            {isMediumAndUp ? <MediumLarge /> : <Small />}
        </HeaderStyled>
    );
};

export default Header;

const HeaderStyled = styled.header`
    background-color: #ffff;

    .SiteLogo {
        height: 300px;
        display: inline;
        align-items: left;
        padding: 0px;
        max-width: 330px;
    }
`;
