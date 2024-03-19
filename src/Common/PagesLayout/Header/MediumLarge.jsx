import styled from "styled-components";

/* Components ---------------------------*/
import Inset from "../Inset.jsx";
import SiteLogo from "../SiteLogo/SiteLogo.jsx";
import MainMenu from "./MainMenu.jsx";

const MediumLarge = () => {
    return (
        <MediumLargeStyled className="MediumLarge">
            <Inset>
                <div className="row">
                    <div className="column">
                        <SiteLogo />
                    </div>
                    <div className="column">
                        <MainMenu className="mainMenu" />
                    </div>
                </div>
            </Inset>
        </MediumLargeStyled>
    );
};

export default MediumLarge;

const MediumLargeStyled = styled.header`
    color: white;

    .logo {
        .SiteLogo {
            width: 270px;
            padding: 8px 0px;
        }
        border: 5px solid red;
    }

    .mainMenu {
        margin-top: 160px;
    }

    .column {
        float: left;
        width: 50%;
    }

    /* Clear floats after the columns */
    .row:after {
        content: "";
        display: table;
        clear: both;
    }

    nav {
        text-align: center;
        a {
            width: 80px;
            display: inline-block;
            line-height: 30px;
            margin: 0px 0px 20px 5px;
            text-align: center;
            font-size: 12px;
            opacity: 0.8;
            color: #84d4d4;
            font-weight: bold;
            text-decoration: none;
            text-transform: uppercase;

            &:hover,
            &:active,
            &:focus {
                opacity: 1;
            }

            &.active {
                color: white;
                text-decoration: underline;
            }
        }
    }
`;
