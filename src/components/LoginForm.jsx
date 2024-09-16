import { useState } from "react"
import axios from 'axios'
const LoginForm=()=>{
    const [username, setUsername]=useState('')
    const [password, setpassword]=useState('')
    const [error,seterror]=useState('')
    const handleSubmit= async (e)=>{
        e.preventDefault();
        const authObject={'Project-ID':"2d5ec70b-05b8-4eef-a102-8a8f432b54e3","User-Name":username, 'User-Secret':password}
        try{
            await axios.get('https://api.chatengine.io/chats',{headers:authObject});
            localStorage.setItem('username',username);
            localStorage.setItem('password',password);
            window.location.reload();
            seterror('')
        }catch(error){
            seterror('Incorrect credentials')            

        }

    }
    return (
        <div className='wrapper'>
            <div className='form'>
                <h1 className="title">Chat Application</h1>
                <form onSubmit={handleSubmit}>
                    <input type='text' value={username} onChange={(e)=>setUsername(e.target.value)} className="input" placeholder="Username" required/>
                    <input type='password' value={password} onChange={(e)=>setpassword(e.target.value)} className="input" placeholder="Password" required/>
                    <div align='center'>
                        <button type='submit' className='button'>
                            <span>Start Chatting </span>
                        </button>

                    </div>
                    <div>
                        <h2 className='error'>{error}</h2>
                    </div>
                </form>

            </div>
        </div>
    )
}
export default  LoginForm