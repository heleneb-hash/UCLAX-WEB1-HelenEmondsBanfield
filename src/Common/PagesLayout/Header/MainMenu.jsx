import styled from "styled-components";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

const MainMenu = ({ onClick }) => {
    return (
        <MainMenuStyled onClick={onClick}>
            <nav className="mainMenu">
                <NavLink to={"/"} end>
                    Home
                </NavLink>
                <NavLink to={"/staff"}>Menu</NavLink>
                <NavLink to={"/contact"}>Contact</NavLink>
                <NavLink to={"/course-work"}>Course</NavLink>
            </nav>
        </MainMenuStyled>
    );
};

// prop-types
MainMenu.propTypes = {
    onClick: PropTypes.func,
};

export default MainMenu;

const MainMenuStyled = styled.nav`
    .mainMenu {
        width: 100%;
        align: right;
    }
    .mainMenu a {
        color: #5b4e62;
    }
    .mainMenu a.active {
        color: #29232c;
    }
`;
