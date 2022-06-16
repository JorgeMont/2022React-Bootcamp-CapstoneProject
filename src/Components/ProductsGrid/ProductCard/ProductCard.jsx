import styled from "styled-components";

const CardContainer = styled.div`
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
        background-color: red;

        img{
            width: 100%;
            height: 100%;
        }
    }

    .prodInfo{
        h1{
            padding: 0.2rem 0;
            font-size: 1.5rem;
            height: 4rem;
        }
        .productTitle{ 
            border: 1px solid #c1c6c7;
            border-radius: 5px;
            display: inline-block;
            padding:  0 0.5rem;

            h2{
            font-size: 0.8rem;
            text-align: left;
            padding: 0.2rem 0;
            color: #2a8bfc;
            }

        }

        .priceTag{
            font-size: 1.8rem;
            margin: 0.5rem;
        }

        .botones{
            display: flex;
            flex-direction: row;
            /* position: relative;
            bottom: 0px; */

            .buyButton{
                background-color: #27c9a4;
                border-radius: 5px;
                padding: 0.5rem 2rem;
                color: white;
                margin-right: 1rem;

                &:hover{
                    cursor: pointer;
                }
            }

            .addCartButton{
                background-color: #fab330;
                color: white;
                display: flex;
                align-items: center;
                padding: 0.5rem;
                border-radius: 5px;
                &:hover{
                    cursor: pointer;
                }
            }
        }
    }
`;

const ProductCard = ({imgUrl, altImg, prodCategory, prodPrice, prodName}) => {
    return(
    <CardContainer>
        <div className="imageContainer">
            <img src={imgUrl} alt={altImg} />
        </div>
        <div className="prodInfo">
            <h1>{prodName}</h1>
            <div className="productTitle">
                <h2>{prodCategory}</h2>
            </div>
            <p className="priceTag">${prodPrice}</p>
            <div className="botones">
                <div className="buyButton">
                    Buy
                </div>
                <div className="addCartButton">
                    <i className="fa-solid fa-cart-plus" />
                </div>
            </div>
        </div>
    </CardContainer>);
}

export default ProductCard;