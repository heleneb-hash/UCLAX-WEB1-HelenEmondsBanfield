import { useState } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { v4 as uuid } from "uuid";
import axios from "axios";

//components
import Input from "./Input";
import TextArea from "./TextArea";

const Form = ({ getSubmissions }) => {
    const [inputName, setinputName] = useState("");
    const [inputEmail, setinputEmail] = useState("");
    const [inputMessage, setinputMessage] = useState("");

    const inputNameOnChange = (e) => {
        setinputName(e.target.value);
    };
    const inputEmailOnChange = (e) => {
        setinputEmail(e.target.value);
    };
    const inputMessageOnChange = (e) => {
        setinputMessage(e.target.value);
    };

    const onSubmit = async (e) => {
        e.preventDefault();

        const postData = {
            id: uuid(),
            name: inputName,
            email: inputEmail,
            message: inputMessage,
        };

        await axios.post("http://localhost:4059/submissions", postData);

        getSubmissions();

        console.log("submitted form");
    };

    return (
        <FormStyled onSubmit={onSubmit}>
            <Input
                id="name"
                labelText="Name"
                onChange={inputNameOnChange}
                value={inputName}
            />
            <Input
                id="email"
                labelText="Email"
                inputType="email"
                onChange={inputEmailOnChange}
                value={inputEmail}
            />
            <TextArea
                id="message"
                labelText="Message"
                onChange={inputMessageOnChange}
                value={inputMessage}
            />
            <button type="submit">Send</button>
        </FormStyled>
    );
};

export default Form;

// prop-types
Form.propTypes = {
    getSubmissions: PropTypes.func.isRequired,
};

const FormStyled = styled.form`
    .input-group {
        margin-bottom: 20px;
    }

    label {
        font-weight: bold;
        display: block;
        margin-bottom: 5px;
    }

    input,
    textarea {
        font-size: 20px;
        padding: 10px;
        width: 100%;
        background-color: #eee;
        border: solid 1px #999;
    }

    &:focus {
        background-color: #fff;
    }
    button {
        background-color: #a18bad;
        padding: 10px 5px;
        color: #fff;
        border: none;
        width: 150px;
        outline: none;

        cursor: pointer;

        &:hover,
        &:focus {
            background-color: #75647e;
        }

        &:active {
            background-color: #29232c;
        }
    }
`;
