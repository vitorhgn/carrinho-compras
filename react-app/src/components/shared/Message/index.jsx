import React from "react";
import './style.css'

import { useSelector } from 'react-redux'

const Message = ()=>{   

    const isShow = useSelector((state)=> state.layout.showMessage)


    return(
        <>
            {isShow && (
                <div className="message-sucess">
                    <div className="container-massage-sucess">
                        Adicionado com sucesso
                    </div>
                </div>
            )}
        </>
)
}

export default Message;