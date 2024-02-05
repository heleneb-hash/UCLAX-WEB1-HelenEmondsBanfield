import styled from "styled-components";
import Inset from "../../Common/PagesLayout/Inset.jsx";
import { Outlet, NavLink } from "react-router-dom";

const CourseWorkLayout = () => {
    return (
        <CourseWorkLayoutStyled>
            <h1>Course Work</h1>
            <Inset>
                <nav className="sublinks">
                    <NavLink to="/course-work">Essays</NavLink>
                    <NavLink to="/course-work/sun-and-moon">
                        Sun And Moon
                    </NavLink>
                    <NavLink to="/course-work/responsive">Responsive</NavLink>
                </nav>
                <Outlet />
            </Inset>
        </CourseWorkLayoutStyled>
    );
};

const CourseWorkLayoutStyled = styled.div`
    /* Add your styles for the CourseWorkLayoutStyled component here */
`;

export default CourseWorkLayout;
