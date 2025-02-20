import { useState } from 'react';

const TextInput = ({ data }) => {
    const [inputText, setInputText] = useState('');
    const [submittedTexts, setSubmittedTexts] = useState([]);

    const handleInputChange = (event) => {
        setInputText(event.target.value);
    };

    const handleSubmit = () => {
        setSubmittedTexts([...submittedTexts, inputText]);
        setInputText('');
    };

    const handleClear = () => {
        setInputText('');
    };

    const handleDelete = (index) => {
        const newSubmittedTexts = submittedTexts.filter((_, i) => i !== index);
        setSubmittedTexts(newSubmittedTexts);
    };

    console.log('data from TextInput:', data);
    return (
        <>
            <div className="text-section">
                <h3>Comments</h3>
                <input
                    type="text"
                    value={inputText}
                    onChange={handleInputChange}
                    placeholder="Enter text here"
                />
                <button onClick={handleSubmit}>Submit</button>
                <button onClick={handleClear}>Clear</button>
                <div className="submitted-texts">
                    {submittedTexts.map((text, index) => (
                        <div key={index} className="submitted-text">
                            <p>{text}</p>
                            <button onClick={() => handleDelete(index)}>Delete</button>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default TextInput;








// const TextInput = ({ data }) => {  
//     console.log('data from TextInput:', data)
// return (
//     <>
//     <div className="text-section">
//     <h3>
//     <p>{data.text}</p>
//     </h3>
// </div>
//     </>
// ); 
    
// }

// export default TextInput;