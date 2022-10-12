import styled from "styled-components";
import Banner from "../../img/banner.png"
import Mais from "../../img/mais.png"
import presentt from "../../img/presentt.png"
import gif from "../../img/gif.png"
import emojis from "../../img/emojis.png"
export default function Main() {
  return (
    <TopMain>
        <div className="banner">
            <img src={Banner} alt="" />
        </div>
        <Inputs>
        <input type="text" placeholder="Message #General"/>
        <img src={Mais} alt="" id="Mais"/>
            <div className="img-left">
            <img src={presentt} alt="" />
        <img src={gif} alt="" />
        <img src={emojis} alt="" />
            </div>
        </Inputs>
  </TopMain>
  );
}

export const TopMain = styled.div`
    height: 91.4vh;

    width: 66%;
    position: absolute;
    top: 55px;
    left: 430px;

    .banner{
        img{
            bottom: 80px;
            position: absolute;
            max-width: 100%;
        }
    }
`
export const Inputs = styled.div`
    bottom: 10px;
    position: absolute;
        input{
            display: flex;
            align-items: center;
            font-size: 15px;
            outline: none;
            border:none;
            background: #40444B;
            padding-top:15px ;
            padding-bottom: 15px;
            position: relative;
            padding-left: 50px;
            padding-right: 660px;
        }
        #Mais{
            cursor: pointer;
            margin-right: 15px;
            left: 0;
            top: 1px;
            position: absolute;
        }
        .img-left{
            img{
                cursor: pointer;
                margin-right: 10px;
            }
            right: 15px;
            top: 10px;
            position: absolute;
        }
`