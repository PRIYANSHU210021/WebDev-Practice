import React, { useState } from 'react'

const Note = () => {

    const [matter, setMatter] = useState("");
    const [suchi, setSuchi] = useState(["Gopi", "Priyanshu"]);

    const handleKeyDown = (e)=> {
        if(e.key == 'Enter' && matter != ""){
            setSuchi(prev => [...prev,matter]);
            setMatter("")
        }
    }

    const handleBtn = ()=>{
        if(matter != ""){
            setSuchi(prev => [...prev,matter]);
            setMatter("")
        }
    }
    const handleDelete = (idx) =>{
        const copySuchi = [...suchi];
        copySuchi.splice(idx,1);
        setSuchi(copySuchi);
    }

    return (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", margin: "40px 0" }}>

            <h1>Enter Your wishes</h1>
            <input type="text"
                value={matter}
                placeholder='ab daaalo bhi'
                onChange={(e) => setMatter(e.target.value)}
                onKeyDown={(e) => handleKeyDown(e)}
                style={{ padding: "8px" }}
            />
            <button onClick={()=> handleBtn()}>Add</button>
            {/* {matter} */}

            <div style={{display:"flex", flexDirection:"column", gap:"2px", margin:"8px",  }}>
                {suchi.map((item,idx) =>
                    <div style={{display:"flex", gap:"18px",justifyContent:"center",background:"blue" ,padding:"18px", color:"yellow"}}>
                        {item}
                        <button onClick={(idx) => handleDelete(idx)}>Delete</button>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Note
