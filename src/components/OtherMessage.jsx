const OtherMessage=({lastMessage, message})=>{
    const isFirstMessageByUser=!lastMessage || lastMessage.sender.userName !== message.sender.userName;
    return(
        <div className='message-row'>
            {isFirstMessageByUser && (
                <div 
                className='message-avatar'
                style={{backgroundImage:`url(${message?.sender?.avatar})`}}
                />

            )}
            {
                message?.attachments?.length>0
                    ?(
                        <img src={message.attachements[0].file}
                        alt='message-attachement'
                        className="message-image"
                        style={{marginLeft:isFirstMessageByUser?'4px':'48px'}}/>
                    ):(
                        <div className='message' style={{float :'left',backgroundColor:'#CABCDC',marginLeft:isFirstMessageByUser?'4px':'48px'}}>
                            {message.text}
                        </div>
                    )
                
            }
            
        </div>
    )
}

export default OtherMessage;