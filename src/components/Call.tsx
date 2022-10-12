import styled from "styled-components";
import "../App.css";
import CetaBaixo from "../../img/ceta-baixo.png";
import miniceta from "../../img/miniceta.png";
import pret from "../../img/+pret.png";
import hash from "../../img/hash.png";
import adicionar from "../../img/adicionar.png";
import config from "../../img/config.png";
import avatar from "../../img/avatar.png";
import on from "../../img/on.png";
import fone from "../../img/fone.png";
import settings from "../../img/settings.png";
import mic from "../../img/mic.png";

export default function Chat() {
  return (
    <div className="content">
      <InfoServer>
        <h1>Guild</h1> <img src={CetaBaixo}  alt="" />
      </InfoServer>
      <Calls><h1><img src={miniceta} alt=""/> Text Channels</h1>
        <img src={pret} alt="" id="mais"/>
        <CallsObject>
            <h1><img src={hash} alt="" />General <img src={adicionar} alt="" 
              id="adicionar" 
            />
              <img src={config} alt="" id="config" />
            </h1>
      </CallsObject>

        <MyPerfil>
          <h1><img src={avatar} alt="" /> <img src={on} alt="" id="on" />IgorDevx</h1>
          <p>#4342</p>

      <div className="elements">
          <img src={mic} alt="" />
          <img src={fone} alt="" />
          <img src={settings} alt="" />
          </div>
        </MyPerfil>

      </Calls>
     
    </div>
  );
}
export const InfoServer = styled.div`
  position: relative;

  background: #2e3036;
  width: 350px;
  height: 50px;
  border-bottom: 1px solid #24252A;
  h1 {
    cursor: pointer;
    left: 25px;
    top: 15px;
    position: absolute;
    color: #ffffff;
    font-size: 15px;
    font-weight: 500;
  }
  img {
    cursor: pointer;
    top: 22px;
    position: absolute;
    right: 20px;
  }
`;
export const Calls = styled.div`
    
    background: #2E3036;
    position: relative;
    height: 92.4vh;

    h1
    {   
        position: absolute;
        top: 25px;
    
        left: 15px;
        display: flex;
        align-items: center;
        color: #8E9297;
        font-size: 15px;

        img{
            margin-right: 15px;
        }
    }
    #mais{
        top: 28px;
        right: 20px;
        position: absolute;
    }
`

export const CallsObject = styled.div`
 top: 35px;
  
  background: #4F545C;
  width: 100%;
  position: absolute;

      h1
      {
        position: absolute;
        font-weight: 400;
        color: white;
        background: #4F545C;
        padding: 10px;
        border-radius: 5px;
        padding-right: 200px;
    
        #adicionar{

          right: 20px;
          position: absolute;
          cursor: pointer;
        }
        
        #config{
          cursor: pointer;
          position: absolute;
          right: 0px;
        }
        img{
          display: flex;
          align-items: center;
        }
      }
 
 
`
export const MyPerfil = styled.div`

  position: absolute;
  bottom: 0;
  width: 100%;
  background: #292B2F;
  height: 58px;
 
      h1
      {
        margin-left: 3px;
        margin-top: -4px;
        top: 15px;
        position: absolute;
        display: flex;  
        justify-content: center;
        align-items: center;
      }
      img{
        cursor: pointer;
        position: relative;
      }
      #on{
        left: 23px;
        bottom: 0;
        position: absolute;
      }

      p{
        left: 65px;
        top: 35px;
        position: absolute;
        font-size: 10px;
       color: #B9BBBE;
      }
      .elements{
        right: 0;
        position: absolute;

        img{
          top: 18px;
          margin-right: 15px;
        }
      }
` 
