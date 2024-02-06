import styled from "styled-components";
import { breakpoints, useMediaQuery } from "@/Common/useMediaQuery.jsx";

const ResonsiveDesign = () => {
    const { isMediumAndUp } = useMediaQuery();
    return (
        <ResonsiveDesignStyled>
            <h2>ResonsiveDesign</h2>

            <div className="boxes">
                {isMediumAndUp && <div className="box box1">1</div>}
                <div className="box box2">2</div>
                <div className="box box3">3</div>
            </div>
        </ResonsiveDesignStyled>
    );
};

export default ResonsiveDesign;

const ResonsiveDesignStyled = styled.div`
    @media ${breakpoints.isMediumAndUp} {
        .boxes {
            display: flex;
            justify-content: center;
        }
    }
    .box {
        width: 100%;
        max-width: 200px;
        height: 200px;
        font-size: 50px;
        line-height: 200px;
        text-align: center;
        color: white;
        background: teal;
        margin: 10px;
    }
    .box2 {
        border-radius: 40px;
    }
    .box3 {
        border-radius: 100px;
    }
    @media ${breakpoints.isMediumAndUp} {
        .box {
            background-color: indigo;
        }
    }
    @media ${breakpoints.isLargeAndUp} {
        .box {
            background-color: green;
        }
    }
`;
