import User from "./User";
import UserClass from "./UserClass";
import { Component } from "react";

class About extends Component {
    constructor (props) {
        super (props);
       // console.log("Parent Constructor");
    }
    componentDidMount () {
       // console.log("Parent Component Did Mount");
    }
    render () {
     //   console.log("Parent Reander");
        return (
        <div>
           <UserClass name={"Prithvik" + 1} location={"Bangalore"} />
        </div>

        )
    }

}

/*
output:
Parent Constructor
Parent Render
Child1 Constructor
Child1 Render 
Child2 Constructor
Child2 Render   
Child1 Component Did Mount
Child2 Component Did Mount
Parent Component Did Mount      

*/

export default About;