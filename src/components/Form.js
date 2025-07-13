import React, { useState } from 'react';

export default function Form(props) {
    const [text, setText] = useState("");

    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
    }
    const handleClearClick = () => {
        setText("");
    }
    const speak = () => {
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.speak(msg);
    }
    const handleOnChange = (event) => {
        setText(event.target.value);
    }

    // Dynamic style for dark/light mode
    const formStyle = {
        backgroundColor: props.mode === 'dark' ? '#23272b' : '#fff',
        color: props.mode === 'dark' ? '#f8f9fa' : '#212529',
        borderRadius: "8px",
        padding: "20px"
    };

    const textareaStyle = {
        backgroundColor: props.mode === 'dark' ? '#343a40' : '#fff',
        color: props.mode === 'dark' ? '#f8f9fa' : '#212529',
        border: props.mode === 'dark' ? '1px solid #555' : '1px solid #ccc'
    };

    return (
        <>
            <div style={formStyle}>
                <h3>{props.heading}</h3>
                <div className="mb-3">
                    <textarea
                        className="form-control"
                        style={textareaStyle}
                        value={text}
                        onChange={handleOnChange}
                        id="mybox"
                        rows="8"
                    ></textarea>
                </div>
                <button className='btn mx-2 my-2' onClick={handleUpClick}>Convert to UpperCase </button>
                <button className='btn mx-2 my-2' onClick={handleLoClick}>Convert to LowerCase </button>
                <button className='btn ' onClick={handleClearClick}>Clear </button>
                <button type="submit" onClick={speak} className="btn btn-warning mx-2 my-2">Speak</button>
            </div>
            <div className="container my-3" style={formStyle}>
                <h3>Text Summary~</h3>
                <p>{text.split(" ").length} Words ,  {text.length} Characters</p>
                <p>{0.008 * text.split(" ").length}mins Required to Read</p>
            </div>
            <div className="container my-3" style={formStyle}>
                <h3>Text Preview~</h3>
                <h6>{text}</h6>
            </div>
        </>
    )
}