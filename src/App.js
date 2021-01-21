import React, { useEffect, useState } from 'react';

function App() {

    const [text, setText] = useState('');
    const [checkBox, setCheckBox] = useState(false);
    const [textArea, setTextArea] = useState('');

    return (
        <div className="container">
            <div className="containerChild"> 
            <form>
                <input
                    type="text"
                    name="text"
                    onChange={e => setText(e.target.value)}
                    value={text}>
                </input> <br />
                <input
                    type="checkBox"
                    name="checkBox"
                    onChange={e => setCheckBox(e.target.checked)}
                    checked={checkBox}>
                </input> <br />
                <textarea
                    type="textarea"
                    name="textArea"
                    onChange={e => setTextArea(e.target.value)}
                    value={textArea}>
                </textarea> <br />
            </form>
            </div>
            <div className="containerChild">
            <form>
                <input
                    type="text"
                    name="text"
                    value={text}
                    readOnly={true}>
                </input> <br />
                <input
                    type="checkBox"
                    name="checkBox"
                    checked={checkBox}
                    readOnly={true}>
                </input> <br />
                <textarea
                    type="textarea"
                    name="textArea"
                    value={textArea}
                    readOnly={true}>
                </textarea> <br />
            </form>
            </div>
            
            
        </div>
    )
}

export default App;