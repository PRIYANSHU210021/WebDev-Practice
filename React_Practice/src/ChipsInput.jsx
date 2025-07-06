import React, { useState } from 'react';
// import './App.css'


function ChipsInput() {
  const [inputText, setInputText] = useState("")
  // console.log(inputText)

  const handleDelete = (index) => {
      const copyChips = [...chips];
      copyChips.splice(index,1)
      setChips(copyChips);
  }

  const [chips, setChips] = useState([])
  const handleKeyDown = (e) => {
    if (e.key == 'Enter') {
        setChips(prev => [...prev,inputText]);
        setInputText("");
    }
  }

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", margin: "40px 0" }}>
      <h2>Chips Input</h2>
      <input
        type="text"
        placeholder="Type a chip and press tag"
        value={inputText}
        style={{ padding: "8px", width: "200px" }}
        onChange={(e) => setInputText(e.target.value)}
        onKeyDown={(e) => handleKeyDown(e)}
      />

      <div style={{display:"flex"}}>
        {chips.map((chip,index) => <div style={{display:"flex", gap:"15px",background:"gray", margin:"10px", padding:"8px", color:"white"}}>
            {chip}
            <button style={{ background:"white",color:"black", padding:"2px"}} 
              onClick={() => handleDelete(index)}
            >X</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default ChipsInput;