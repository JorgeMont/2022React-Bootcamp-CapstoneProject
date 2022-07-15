import styled from "styled-components";

const ProductCardStyled = styled.div`
    text-align: left;
    background-color: #FFF5EE;
    width: 16rem;
    height: 29rem;
    padding: 1rem;
    border-radius: 5px;
    box-shadow: 6px 13px 10px 0px rgba(0,0,0,0.2);
    -webkit-box-shadow: 6px 13px 10px 0px rgba(0,0,0,0.2);
    -moz-box-shadow: 6px 13px 10px 0px rgba(0,0,0,0.2);
    margin-bottom: 1.5rem;

    .imageContainer{
        width: 100%;
        height: 60%;
        object-fit: cover;
        border-radius: 5px;

        img{
            width: 100%;
            height: 100%;
        }
    }

    .prodInfo{
        .productName{
            padding: 0.2rem 0;
            font-size: 1.3rem;
            height: 4rem;
            margin-bottom: 0.3rem;
        }

        .botones{
            display: flex;
            flex-direction: row;
        }

        @media(max-width: 394px){
            .productName{
                font-size: 1.2rem;
            }
        }
    }
`;

export default ProductCardStyled;