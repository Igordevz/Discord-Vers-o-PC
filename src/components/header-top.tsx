import styled from "styled-components";
import hash from '../../img/hash.png'
import sino from '../../img/sino.png'
import fixar from '../../img/fixar.png'
import amigos from '../../img/amigos.png'
import anderline from '../../img/@.png'
import lupa from '../../img/lup2.png'
import duvidas from '../../img/duvidas.png'

export default function HeaderTop(){
    return(
        <Conteudo>
            <Title>
             <h1><img src={hash} alt="" />general </h1>
             </Title>
             <ElementsLeft>
                <img src={sino} alt="" />
                <img src={fixar} alt="" />
                <img src={amigos} alt="" />
             </ElementsLeft>
             <Search>
                <input type="Text" placeholder="Search"/> 
                <img src={lupa} alt="" />
             </Search>
             <EndIcons>
                    <img src={anderline} alt="" />
                    <img src={duvidas} alt="" />
             </EndIcons>
        </Conteudo>

    );
}

export const Conteudo = styled.div`
    position: relative;
    height: 50px;
    border-bottom: 1px solid #303239;
    width: 70%;
`
export const Title = styled.div`
    color: #FFFFFF;
    top: 0;
    position: absolute;

            h1{
                top: 15px;
                position: absolute;
                margin-left: 25px;
                display: flex;
                align-items: center;
                font-size: 15px;
                font-weight: 600;
            }
            img{

                margin-right: 7px;
            }
`
export const ElementsLeft = styled.div`
    position: absolute;
    display: flex;
    align-items: center;
    left: 550px;
    top: 15px;
    img
    {
        cursor: pointer;
        margin-right: 19px;
    }
`
export const Search = styled.div`
    position: absolute;
    top: 15px;
    left: 660px;

    input{
        color: white;
        position: relative;
        border: none;
        border-radius: 7px;
        outline: none;
        padding: 5px;
        background: #202225;
    }
    img{
        cursor: pointer;
        top: 6px;
        right: 10px;
        position: absolute;
    }
`
export const EndIcons = styled.div`
    display: flex;
    align-items: center;
    position: absolute;
    right: 10px;
    top: 15px;
    img{
        cursor: pointer;
        margin-right: 15px;
    }
`