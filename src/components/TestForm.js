import React , {useState} from 'react';



export default function TestForm(props) {
    const handleUpClick = () => {
    
        let newText = text.toUpperCase();
        setText(newText);
        
    };

    const handleClrClick = () => {
        setText('');
        
        
    };

    const handleLoClick = () => {
    
        let newText = text.toLowerCase();
        setText(newText);
        
    };


    const handleOnChange = (event) => {
        
        setText(event.target.value);
    };
 const [text, setText] = useState('');
  return <div className="container">
      <>
        
     <div >
     <h1>{props.heading} </h1>
    
     <textarea rows="12" value = {text} onChange={handleOnChange} className="form-control , mb-3" id="myBox" ></textarea>
    </div>
    <row ClassName="Container">
     <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Upper Case</button>       
     <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to Lower Case</button>
     <button className="btn btn-primary mx-2" onClick={handleClrClick}>Clear Text</button>
        </row>

    <div className="container">

    <h2>Your Text Summary </h2>
     <p>
       <ul>
         <li> Number of Words = {text.split(" ").length} </li>
         <li> Number of Characters = {text.length} </li>
         <li> Number of Sentences = {text.split(".").length} </li>
         <li> Number of Paragraphs = {text.split("\n").length} </li>
         <li> Time to Read = {0.008*text.split(" ").length} Minutes  </li>
       </ul>
       </p>
       <h2>Preview</h2>
       <p>{text}</p>

    </div>

      </>
  </div>;
}
