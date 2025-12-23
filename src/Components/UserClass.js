import React from "react";
import Shimmer from "./Shimmer";
class UserClass extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            userInfo : []
            
        };
        console.log(this.props.name + "Child Constructor");
    }

   async componentDidMount () {
        // API call
        console.log(this.props.name + "Child Component Did Mount");
        const data= await fetch("https://api.github.com/users/akshaymarch7");
        const json = await data.json();
        this.setState({
            userInfo: json,
        });

    }
    componentDidUpdate () {
        console.log(this.props.name + "Child Component Did Update");
    }

    componentWillUnmount () {
        console.log(this.props.name + "Child Component Will Unmount");
    }

    render() {
        console.log(this.props.name +"Child Render");
        const {name, location, avatar_url } = this.state.userInfo;
        return ( this.state.userInfo.length === 0 ? <Shimmer /> :
            <div className="user-card">
                <div >
                <img src={avatar_url} alt="avatar" className="about-img" />
                </div>
                <h2>Name: {name} </h2>
                <h2>Location: {location}</h2>
            </div>
        )
    }
}

export default UserClass;