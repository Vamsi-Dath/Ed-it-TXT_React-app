import React,{useState} from 'react'

export default function TextForm(props) {
    const changeToUpper =()=>{
        let newText = text.toUpperCase();
        setText(newText);
        props.setMsg("success","Text is converted to upper case.")
    }

    const changeToLower =()=>{
        let newText = text.toLowerCase();
        setText(newText);
        props.setMsg("success","Text is converted to lower case.")
    }

    const clearText = ()=>{
        setText('');
        props.setMsg("warning","Text is cleared!")
        props.setProg(0)
    }

    const copyText = ()=>{
        var cTxt = document.getElementById('textareaForm');
        cTxt.select();
        navigator.clipboard.writeText(cTxt.value);
        props.setMsg("success","Copied text to clipboard!")
    }
    const remExtSpacesText = ()=>{
        var arr = text.split(/[ ]+/)
        setText(arr.join(" "))
        props.setMsg("success","Text is free of extra spaces.")
        props.setProg(text.split(/\s+/).filter((element)=>{return element.length!==0}).length>=100?100:text.split(" ").length);
    }

    const textHandle = (event)=>{
        setText(event.target.value);
        props.setProg(text.split(/\s+/).filter((element)=>{return element.length!==0}).length>=100?100:text.split(/\s+/).filter((element)=>{return element.length!==0}).length);
    }

    const [text, setText] = useState("")

  return (
    <>
    <div className='container'>
        <button onClick= {clearText}>Clear</button>
        <button onClick= {copyText}>Copy</button>
        <button onClick= {remExtSpacesText}>Remove Extra spaces</button>
        <textarea value={text} onChange={textHandle} id ='textareaForm'></textarea>
        <button onClick= {changeToUpper}>Convert to Upper Case</button>
        <button onClick= {changeToLower}>Convert to Lower Case</button>
    </div>
    <div className="container">
        <h2>Your Text Summary :</h2>
        <p>
            No. of characters : {text.length} <br/>
            No. of Words : {text.split(/\s+/).filter((element)=>{return element.length!==0}).length} /100
        </p>
        {/* <div className="btn btn-primary">
            Hello world
        </div> */}
        <h3>Text preview : </h3>
        <p>
            {text}
        </p>
    </div>
    </>
  )
}
