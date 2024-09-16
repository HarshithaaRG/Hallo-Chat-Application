import {ChatEngine} from 'react-chat-engine'
import ChatFeed from './components/ChatFeed'
import LoginForm from './components/LoginForm'


import './App.css'

const App=()=>{
  if(!localStorage.getItem('username')) return <LoginForm/>
  return(
    <ChatEngine height='100vh' projectID="2d5ec70b-05b8-4eef-a102-8a8f432b54e3" userName={localStorage.getItem('username')} userSecret={localStorage.getItem('password')}
    renderChatFeed ={(chatAppProps)=><ChatFeed{...chatAppProps}/>}/>
  )

}



export default App
