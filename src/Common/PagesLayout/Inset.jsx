import PropTypes from "prop-types";
import styled from "styled-components";

const InsetStyled = styled.div`
    max-width: 1200px;
    margin: auto;
    padding: 0px 10px;
`;

const Inset = ({ children }) => {
    return <InsetStyled className="Inset">{children}</InsetStyled>;
};

Inset.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Inset;
