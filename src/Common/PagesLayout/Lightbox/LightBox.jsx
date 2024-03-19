import styled from "styled-components";
import ModalImage from "react-modal-image";
import PropTypes from "prop-types";

const LightBox = ({ lightbox }) => {
    const closeLightbox = () => {
        this.state.open = true;
    };
    return (
        <ModalImage
            small="./images/lightboxtext.jpg"
            large="./images/Popup.jpg"
        />
    );
};

export default LightBox;

LightBox.propTypes = {
    lightbox: PropTypes.object.isRequired,
};

const LightBoxStyled = styled.div``;
