import React from 'react';
import Meny from '../components/meny.js';
import Header from '../components/header.js';

const About = () => {
    const goBack = () =>{
        window.history.back();
    }

    return(
        <>
            <Header/>
            <Meny/>
            <center>
                <table style={{width: "700px"}}>
                    <tbody>
                        <tr>
                            <td><h2 style={{color: "#db3131"}}>About:</h2></td>
                        </tr>
                        <tr>
                            <td>
                                <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed volutpat ultricies 
                                erat in facilisis. Praesent accumsan sapien ullamcorper placerat viverra.
                                Phasellus justo quam, eleifend et arcu a, auctor sagittis diam. Integer
                                vel ex ipsum. Ut fringilla dignissim semper. Nam eget efficitur nisl.
                                Vivamus et elit vitae neque auctor viverra. Mauris tincidunt est dapibus,
                                ornare ante eu, hendrerit turpis. In vitae elit sit amet nisi aliquet dignissim.
                                Aliquam eu congue ligula, hendrerit sollicitudin nunc. Aenean pellentesque eget
                                turpis dapibus faucibus. Cras in nibh purus. Pellentesque commodo sodales euismod. 
                                Integer faucibus dui non odio posuere tempor. Vivamus lobortis nisl hendrerit dui
                                convallis, sit amet tristique libero fringilla. Sed auctor fringilla convallis.
                                </p>
                                <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed volutpat ultricies 
                                erat in facilisis. Praesent accumsan sapien ullamcorper placerat viverra.
                                Phasellus justo quam, eleifend et arcu a, auctor sagittis diam. Integer
                                vel ex ipsum. Ut fringilla dignissim semper. Nam eget efficitur nisl.
                                Vivamus et elit vitae neque auctor viverra. Mauris tincidunt est dapibus,
                                ornare ante eu, hendrerit turpis. In vitae elit sit amet nisi aliquet dignissim.
                                Aliquam eu congue ligula, hendrerit sollicitudin nunc. Aenean pellentesque eget
                                turpis dapibus faucibus. Cras in nibh purus. Pellentesque commodo sodales euismod. 
                                Integer faucibus dui non odio posuere tempor. Vivamus lobortis nisl hendrerit dui
                                convallis, sit amet tristique libero fringilla. Sed auctor fringilla convallis.
                                </p>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <button onClick={goBack} className="navBtn">Back</button>
            </center>
        </>
    );
}

export default About;