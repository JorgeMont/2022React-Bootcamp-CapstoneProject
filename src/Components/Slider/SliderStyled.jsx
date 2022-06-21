import styled from "styled-components";

// .slideshow-container
const SliderContainer = styled.div`
    .imageContainer{
        width: 100%;
        height: 30rem;

        img{
            width: 100%;
            height: 100%;
            object-fit: cover;   
        }
    }

    .ButtonsContainer{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        position: absolute;
        width: 100%;
        top: 30%;

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
        
    }
    
`;

export default SliderContainer;