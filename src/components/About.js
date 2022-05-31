import React from 'react'

export default function About(props) {
    
    // const [myStyle, setMyStyle] = useState({
    //     color : 'black',
    //     backgroundColor : 'white'
    // })
    let myStyle = {
        color : props.mode==='dark'?'white':'#13173a',
        backgroundColor : props.mode==='dark'?'rgb(36, 74, 104)':'white'
    }    


    return (
        <>
            <div className="container" style={{backgroundColor : props.mode==='dark'?'#13173a':'white', color : props.mode==='dark'?'white':'#13173a'}}>
                <h1 className="my-3">About Us</h1> 
                <div className="accordion" style={myStyle} id="accordionExample">
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingOne">
                            <button className="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            <strong>Analyze your text</strong>
                            </button>
                        </h2>
                        <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                            <div className="accordion-body" style={myStyle}>
                                 It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingTwo">
                            <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            <strong>Free to use</strong>
                            </button>
                        </h2>
                        <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                            <div className="accordion-body" style={myStyle}>
                                This is the second item's accordion body.It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. 
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingThree">
                            <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            <strong>Browser Compatible</strong>
                            </button>
                        </h2>
                        <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                            <div className="accordion-body" style={myStyle}>
                                This is the third item's accordion body. It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions.
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div className="container my-4">
                    <button onClick={toggleStyle} type="button" className="btn btn-primary">{btntext}</button>
                </div> */}
                
            </div>
        </>
    )
}
