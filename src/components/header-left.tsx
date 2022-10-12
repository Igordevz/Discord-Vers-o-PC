import styled from "styled-components"
import Logo from '../../img/logo.png'
import Adicionar from '../../img/+.png'
import lupa from '../../img/lupa.png'

export default function HeaderLeft(){
    return(
       <Headerleft>
        <Log>
            <img src={Logo} alt="" width={28}/>
            </Log>
            <Contents>
                    <img src={Adicionar} alt="" />
                    <img src={lupa} alt="" id="lupa" />
            </Contents>
       </Headerleft>
    )
}
 
export const Headerleft = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    background: #202225;
    height: 100vh;
    width: 72px;
` 
export const Log = styled.div`
    cursor: pointer;
    position: absolute;
    left: 5px;
    top: 15px;
    background: #36393F;
    border-radius:50%;
    padding: 15px;
    margin-left: 2px;

`
export const Contents = styled.div`
cursor: pointer;
    position: absolute;
    left: 5px;
    top: 15px;
    background: #36393F;
    border-radius:55%;
    padding: 19px;
    margin-left: 2px;
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 90px;
    #lupa{ 
        cursor: pointer;
        position: absolute;
    left: -2px;
    top: 15px;
    background: #36393F;
    border-radius:55%;
    padding: 19px;
    margin-left: 2px;
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 65px;
        position: absolute;

    }
`