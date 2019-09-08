import React, {useRef} from 'react';
import Meny from '../components/meny.js';
import Header from '../components/header.js';



const Contact = () => {
    const inputText = useRef(null);
    const inputTextarea = useRef(null);
    const goBack = () =>{
        window.history.back();
    }
    const resetForm = () =>{
        inputText.current.value = "";
        inputTextarea.current.value = "";
    }

    return(
        <>
            <Header/>
            <Meny/>
            <center>
                <table style={{width: "700px"}}>
                    <tbody>
                        <tr>
                            <td><h2>Contact:</h2></td>
                        </tr>
                        <tr>
                            <td><label>Namn:</label><br/><input ref={inputText} style={{width: "100%", outline: "none", border: "1px solid black"}} type="text"/></td>
                        </tr>
                        <tr>
                            <td><label>Message:</label><br/><textarea ref={inputTextarea} style={{width: "100%", height: "200px", outline: "none", border: "1px solid black"}}/></td>
                        </tr>
                        <tr>
                            <button onClick={resetForm} className="navBtn">Send</button>
                        </tr>
                        <tr>
                            <td><h3>Adress:</h3></td>
                        </tr>
                        <tr>
                            <td>
                                Pizza Shop<br/>
                                Grönavägen 5<br/>
                                <a href="mailto:pizza@shop.se">pizza@shop.se</a><br/>
                                010-1234567
                            </td>
                        </tr>
                    </tbody>
                </table>
                <br/>
                <button onClick={goBack} className="navBtn">Back</button>
            </center>
        </>
    );
}

export default Contact;