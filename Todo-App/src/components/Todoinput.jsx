import React, { useState } from 'react'

const Todoinput = (props) => {

    const [inputText, setInputText] = useState('')
    const handleEnterPress = (e)=>{
        if(e.keyCode==13){
            props.addList(inputText)
            setInputText("")
        }
    }

    return (
        <div className='input-container'>
            <input type="text" placeholder='Please Fill Me' className='input-box-todo' 
            value={inputText}
            onChange={(e) => {setInputText(e.target.value
            )}} 
            onKeyDown={handleEnterPress}
            />

            <button className='add-btn'
            onClick={() => {
                if(inputText == ""){
                    alert("List Should Not Be Empty");
                }
                else{
                    props.addList(inputText)
                }
            setInputText("")
            }}>+</button>
        </div >
    )
}

export default Todoinput
