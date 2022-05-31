import React, { useState } from 'react'

export default function TextForm(props) {
    const handleUpClick = () => {
        // console.log("uppercase was clicked");
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Coverted to Uppercase!","success");
    }
    const handleLoClick = () => {
        // console.log("Lowercase was clicked");
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Coverted to Lowercase!","success");
    }
    const handleCopy = () => {
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text copied!","success");
    }
    const handleClear = () => {
        // console.log("Clear text");
        let newText = "";
        setText(newText);
        props.showAlert("Text cleared!","success");
    }
    const handleSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces removed!","success");
    }
    const handleOnChange = (event) => {
        // console.log("On Change");
        setText(event.target.value)
    }
    const [text, setText] = useState('')
    return (
        <>
            <div className='container' style={{color: props.mode==='dark'?'white':'#13173a'}}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text}  style={{backgroundColor: props.mode==='dark'?'transparent':'white', color: props.mode==='dark'?'white':'#13173a'}} onChange={handleOnChange} id="myBox" rows="8"></textarea>
                </div>
                <button className="btn btn-primary my-1 mx-2" disabled={text.length===0} onClick={handleUpClick}>Convert to Uppercase</button>
                <button className="btn btn-primary my-1 mx-2" disabled={text.length===0} onClick={handleLoClick}>Convert to Lowercase</button>
                <button className="btn btn-primary my-1 mx-2" disabled={text.length===0} onClick={handleCopy}>Copy Text</button>
                <button className="btn btn-primary my-1 mx-2" disabled={text.length===0} onClick={handleSpaces}>Remove Extra Spaces</button>
                <button className="btn btn-primary my-1 mx-2" disabled={text.length===0} onClick={handleClear}>Clear</button>
            </div>
            <div className="container my-3" style={{color: props.mode==='dark'?'white':'grey'}}>
                <h2>Your Text Summary</h2>
                <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
                <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes Read</p>
                <h2>Preview</h2>
                <p>{text.length>0?text:"Nothing to preview."}</p>
            </div>
        </>
    )
}
