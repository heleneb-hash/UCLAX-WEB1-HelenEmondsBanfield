import styled from "styled-components";
import PropTypes from "prop-types";

import { breakpoints } from "@/Common/useMediaQuery";

const TabContent = ({ curTab }) => {
    const { title, image, text } = curTab;

    return (
        <TabContentStyled>
            <div>
                <img src={image} alt={title} />
            </div>
            <div>
                <h3>{title}</h3>
                <p>{text}</p>
            </div>
        </TabContentStyled>
    );
};

export default TabContent;

// prop-types
TabContent.propTypes = {
    curTab: PropTypes.object.isRequired,
};

const TabContentStyled = styled.div`
    padding: 20px;
    background-color: #c1abce;

    @media ${breakpoints.isMediumAndUp} {
        display: grid;
        grid-template-columns: 1fr 2fr;
        gap: 1rem;
    }

    img {
        max-width: 100%;
        display: block;
        margin: 20px auto 15px;
        margin-bottom: none;
    }

    h3 {
        font-size: 30px;
        color: white;
        margin-top: 20px;
        margin-left: 20px;
    }

    p {
        font-size: 18px;
        color: #5b4e62;
        margin-bottom: 20px;
        margin-left: 20px;
    }
`;
