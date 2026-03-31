
import './App.css'
import Regform from './components/RegForm.jsx'

function App(){
  return <>
     <div>hi this is my first react</div>
     <p>hello world</p>
     <Text text="hi this from the text"></Text>
     <Regform regforms={{name:"prava",email:"prava@gmailcom"}}></Regform>
     
  </>
}
function Text({text}){
  return <div>
    <p>{text}</p>
  </div>
}


export default App

