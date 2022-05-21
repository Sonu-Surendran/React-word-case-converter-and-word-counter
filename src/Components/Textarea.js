import React,{ useState } from 'react'


export default function Textarea() {
    const [text,setText] = useState("Enter the text here");

    const changeText = (event)=>{
        setText(event.target.value);
    }

    const upperCase = ()=>{
        let newText = text.toUpperCase();
        setText(newText);
    }

    const textAreaClick = ()=>{
        let blankText = "";
        setText(blankText);
    }

    const lowerCase= ()=>{
        let lowerText = text.toLowerCase();
        setText(lowerText);
    }
  return (
    <div>
         <div>
             <h1>A simply website to change-case/count/summarise word</h1>
        <div className="textContainer">
            <label htmlFor="exampleFormControlTextarea1" className="label my-2">Enter the text to convert into upperCase</label>
            <textarea className="form-control" id="Textarea1" value={text} rows="8" onChange={changeText} onClick={textAreaClick}></textarea>
        </div>
        <div className="btn-text my-2">
            <button className="btn btn-primary mx-2" onClick={upperCase}>Convert to UpperCase</button>
            <button className="btn btn-primary mx-2" onClick={lowerCase}>Convert to LowerCase</button>
        </div>

        <div></div>
    </div>
    </div>
  )
}
