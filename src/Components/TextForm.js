import React, { useState } from 'react';

export default function TextForm(props) {
    const [text, setText] = useState("Enter Text Here");
    const handleChange = (event) => {
        setText(event.target.value);
    }
    const handleUpCase = () => {
        setText(text.toUpperCase());
        props.showAlert("Text Converted to UPPERCASE!!!","success");
    }
    const handleLoCase=()=>{
        setText(text.toLowerCase());
        props.showAlert("Text Converted to lowercase!!!","success");
    }
    const handleSentCase=()=>{
        let modifiedText = text.charAt(0).toUpperCase() +text.slice(1).toLowerCase();
        setText(modifiedText);
        props.showAlert("Text Converted to Sentence case!!!","success");
    }
    const handleCapCase=()=>{
        let modifiedText ;
        let completeSent = "";
        if(text===""){
            modifiedText ="";
        }
        else{
            modifiedText = text.split(/\s+/);
            for(let word of modifiedText){
                completeSent = completeSent + word.charAt(0).toUpperCase() + word.slice(1).toLowerCase() + " ";
            }
        }
        setText(completeSent);
        props.showAlert("Text Converted to Capitalize Case!!!","success");
    }
    const handleAltCase= ()=>{
        // let modifiedText = text.split(/\s+/);
        let completeSent="";
        for(let letter of text){
            if(letter===letter.toUpperCase()){
                completeSent = completeSent + letter.toLowerCase();
            }
            else{
                completeSent = completeSent + letter.toUpperCase();
            }
        }
        setText(completeSent);
        props.showAlert("Text Converted to aLTERNATING cASE!!!","success");
    }
    const handleCopyCase = ()=>{
        navigator.clipboard.writeText(text);
        props.showAlert("Text Copied!!!","success");
    }
    const handleClearCase = ()=>{
        setText("");
        props.showAlert("Text Cleared!!!","success");
    }
    function wordCounter(countingArray){
        let totalWord=0;
        for(let word of countingArray){
            if(word===""){
                continue;
            }
            else{
                totalWord++;
            }
        }
        return totalWord;
    }
    return (
        <>
            <div className="container">
                <h1 className='mt-4'>{props.heading}</h1>
                <div className="mb-3">
                    <label htmlFor="myBox" className='form-label'></label>
                    <textarea className="form-control" value={text} id="myBox" rows="8" onChange={handleChange} style={{backgroundColor: props.mode==="dark"?"#9a9797":"white",color: props.mode==="dark"?"white":"black"}}></textarea>
                </div>
                <button type="button" className="btn btn-primary mx-2 my-2" onClick={handleUpCase} >UPPERCASE</button>
                <button type="button" className="btn btn-primary mx-2 my-2" onClick={handleLoCase}>lowercase</button>
                <button type="button" className="btn btn-primary mx-2 my-2" onClick={handleSentCase}>Sentence case</button>
                <button type="button" className="btn btn-primary mx-2 my-2" onClick={handleCapCase}>Capitalize Case</button>
                <button type="button" className="btn btn-primary mx-2 my-2" onClick={handleAltCase}>aLTERNATING cASE</button>
                <button type="button" className="btn btn-primary mx-2 my-2" onClick={handleCopyCase}>Copy to Clipboard</button>
                <button type="button" className="btn btn-primary mx-2 my-2" onClick={handleClearCase}>Clear Text</button>
                
            </div>
            <div className="container my-4">
                <h2>Your Text Summary</h2>
                <p>{wordCounter(text.split(/\s+/))} words and {text.length} characters</p>
                <p>{0.008 * wordCounter(text.split(/\s+/))} minutes to read</p>
                <h3>Preview</h3>
                <p className='height: 200px'>{text.length>0?text:"Enter the text to preview"}</p>
            </div>

        </>
    )
}