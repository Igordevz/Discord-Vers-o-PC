import './App.css'
import Chat from './components/Call';
import HeaderLeft from './components/header-left';
import HeaderTop from './components/header-top';
import Main from './components/Main';

function App() {
  return(
    <div className="root">
    <HeaderLeft/>
    <Chat/>
    
    <HeaderTop/>
    
    <Main/>

    </div>
  );
}

export default App
