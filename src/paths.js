import React from 'react';
import { useHistory } from "react-router-dom";

function HomePage(){
    const history = useHistory();

    return (
        <div>
            <button onClick={()=>history.push("/about", {from: "HomePage"})}>
                About
            </button>
            <button onClick={()=>history.push("/contact", {from: "HomePage"})}>
                Contact
            </button>
            <p>Welcome Home</p>
        </div>
        
    )
}

function About({ location }){
    const history = useHistory();
    console.log('history', history)
    return (
        <div>
            <p>About Page</p>
            <button onClick={()=>history.goBack()}>
                Go back
            </button>
            <p>You were redirected from {location.state.from}</p>
        </div>
        
    )
}

function Contact({ location }){
    const history = useHistory();
    console.log('history', history)

    return (
        <div>
            <p>Contact Page</p>
            <button onClick={()=>history.goBack()}>
                Go back
            </button>
            <p>You were redirected from {location.state.from}</p>
        </div>
        
    )
}

function Foo(){
    return <p>Contact Bar</p>
}

export {HomePage, About, Contact, Foo}