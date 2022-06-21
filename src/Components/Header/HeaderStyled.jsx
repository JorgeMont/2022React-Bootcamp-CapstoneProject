import styled from "styled-components";

const HeaderContainer = styled.header`
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        background-color: rgba(62,62,62,255);
        color: white;
        padding: 0.5rem 0;
        margin: 0;
        flex: 0 0 auto;

        section{
            display: flex;
            flex-direction: row;
            align-items: center;
        }

        .imgContainer{
            padding: 0 1.5rem;
            img{
                width: 4rem;
                &:hover{
                cursor: pointer;
            }
            }
        }

        .searchBarContainer{
            display: flex;
    align-items: center;
    margin-right: 8rem;

    form{
        padding: 0 0.7rem;

        input{
            height: 2rem;
            width: 40rem;
            padding: 0 0.5rem;
            border-radius: 5px 0 0 5px;
            border-style: none;
            text-align: right;
        }
    }

    @media(max-width: 1046px){
        margin: 0;
        form{
            input{
                width: 20rem;
            }
        }
    }

    @media(max-width: 606px){
        form{
            input{
                width: 12rem;
            }
        }
    }

    @media(max-width: 468px){
        form{
            input{
                width: 5rem;
            }
        }
    }
        }

        .buttonSearch{
            height: 2rem;
            width: 3rem;
            border-style: none;
            border-radius: 0 5px 5px 0;
            background-color: #febd69;

            &:hover{
                cursor: pointer;
            }
        }

        .cardContainer{
            padding: 0 2rem;

            i{
                font-size: 1.5rem;
            }

            &:hover{
             cursor: pointer;
             }
        }
    `;

export default HeaderContainer;