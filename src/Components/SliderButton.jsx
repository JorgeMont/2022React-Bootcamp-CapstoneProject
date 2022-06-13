import styled from "styled-components";

const ControlButton = styled.div`

            .ControlButton{
                background-color: white;
                padding: 2rem;
                border-radius: 50%;
                opacity: 0.4;
                margin: 0 1rem;

                &:hover{
                opacity: 1.0;
                cursor: pointer;
            }
            }
`;

const SliderButton = ({ icon }) => {
    return (
        <ControlButton>
            <div className="ControlButton" onClick={() => { console.log('click en izquierda'); }}>
                <i className={icon} />
            </div>
        </ControlButton>
    )
}

export default SliderButton;