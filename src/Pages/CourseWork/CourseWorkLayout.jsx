import styled from "styled-components";
import Inset from "../../Common/PagesLayout/Inset.jsx";
import { Outlet, NavLink } from "react-router-dom";

const CourseWorkLayout = () => {
    return (
        <CourseWorkLayoutStyled>
            <Inset>
                <h1>Course Work</h1>
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

const CourseWorkLayoutStyled = styled.div``;

export default CourseWorkLayout;
