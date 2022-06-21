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
        top: 40%;        
    }
    
`;

export default SliderContainer;