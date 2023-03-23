import React, { useState, useEffect } from 'react';
import chatService from '../services/chatService';

const ChatList = props => {
    let initialMessage = "";

    const [chats, setChats] = useState([]);
    const [messages, setMessages] = useState([]);
    const [text, setText] = useState(initialMessage);

    useEffect(() => {
        retrieveChats();
        retrieveMessages();
    }, [localStorage.token]);


    const retrieveChats = () => {
        chatService.api_v1_chats_list(localStorage.token)
            .then(response => {
                setChats(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    }

    const retrieveMessages = () => {
        chatService.api_v1_messages_list(localStorage.token)
            .then(response => {
                setMessages(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    }


    return (
        <div>
            <h1>Chat from Django</h1>
            {chats.map((chat) => {
                return (
                    <div key={chat.id}>
                        <div>
                            <>
                            <h2>{chat.user}</h2>
                            <p>{chat.title}</p>
                            </>
                        </div>
                    </div>
                );
            })}
        </div>     
    );
}

export default ChatList;