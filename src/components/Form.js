import {useState} from 'react'
import './Form.css';

export default function Form({mystyle}){
  const[text,settext]=useState('');
  const[color,setcolor]=useState('black');

  const handleuppercase=()=>{
    settext(text.toUpperCase());
  }

  const handlelowercase=()=>{
    settext(text.toLowerCase());
  }

  const handlClear=()=>{
    settext('');
  }

  const Changecolor=()=>{
    let usercolor=prompt("Enter the name of color")
    setcolor(usercolor);
  }

  const handlespeech=()=>{
    const speech=new SpeechSynthesisUtterance();
    speech.text=text;
  speech.lang = 'en-US';
  window.speechSynthesis.speak(speech);
  }

  const handleonchange=(event)=>{
    settext(event.target.value);
  }

  
const handlePause = () => {
  window.speechSynthesis.pause();
};

const handleResume = () => {
  window.speechSynthesis.resume();
};

const handleStop = () => {
  window.speechSynthesis.cancel();
};

const handlnumbers = () => {
  const numbersregex = /\d+/g;
  const nomatch = text.match(numbersregex);
  if (nomatch && nomatch.length > 0) {
    navigator.clipboard.writeText(nomatch.join('\n'));
    alert("Numbers have been extracted and copied to clipboard");
  } else {
    alert("No number found");
  }
};

const specialregex = /[^a-zA-Z0-9\s]/g;
const removespecialchar = () => {
  const cleantext= text.replace(specialregex,'');
  settext(cleantext)
}

const handlereverse = () => {
  const reverstext= text.split("").reverse().join("");
  settext(reverstext);
}


const handleUrl = (text) => {
  const urlregex = /\b(https?:\/\/[^\s<>()]+|www\.[^\s<>()]+)\b/g;
  const match = text.match(urlregex);
  if (match && match.length > 0) {
    navigator.clipboard.writeText(match.join(" "));
    alert("The link(s) have been extracted and copied to clipboard");
  } else {
    alert("No matches");
  }
};


const handleCopy = () => {
  if(text.trim()===''){
    alert("Can not copy the text!")
  }else{
    try {
      navigator.clipboard.writeText(text);
      alert("Text copied to clipboard")
    } catch (error) {
      alert("Failed to copy text")
    }
  }
};


  return (
    <>
    <div style={mystyle}>
      <div className="form">
        <h1 style={mystyle}>Enter Your Text Here:</h1>
        <textarea name="textbox" id="text-box" value={text} onChange={handleonchange} cols={120} rows={10} style={{mystyle,color:color}} placeholder="Enter text here:">Enter text here:</textarea>
        <br /> 
        <button onClick={handleuppercase}>Convert to UpperCase</button>
        <button onClick={handlelowercase}>Convert to LowerCase</button>
        <button onClick={handlClear}>Clear Text</button>
        <button onClick={handlnumbers}>Extract numbers</button>
        <button onClick={removespecialchar}>Remove special characters</button>
        <button onClick={handlereverse}>reverse text</button>
        <br />
        <button onClick={Changecolor}>Change Color</button>
        <button onClick={handlespeech}>🔊 Start Listening</button>
        <button onClick={handlePause}>⏸️ Pause</button>
        <button onClick={handleResume}>▶️ Resume</button>
        <button onClick={handleStop}>⏹️ Stop</button>
        <button onClick={handleCopy}>Copy to clipborad</button>
        <button onClick={()=>handleUrl(text)}>find url</button>
        <div className="summary" >
        <h2>Summary</h2>
        <p>No. of words: {text.trim().split(/\s+/).filter(word => word.length > 0).length} <br />No. of characters: {text.length} <br /> No. of special characters:{(text.match(/[^a-zA-Z0-9\s]/g)||[]).length} </p>
        <p>Time needed:  {0.004 * text.split(" ").length} minutes read</p>
        <h3>Preview</h3>
        {text===''?<p>Nothing to preview</p> :<p>{text}</p>}
      </div>
      </div>
    </div>
    </>   
  )
}
