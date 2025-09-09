import React,{Component} from "react";
class  RandomNumber extends Component{
    constructor(){
        super();
        this.state = {number:0};
    }
    generateNumber = () => {
        const random = Math.floor(Math.random()* 100) + 1;
        this.setState({number: random});
    };
    render(){
        return(
            <div style={({textAlign: "center",marginTop: "50px"})}>
                <h1>Generate Random Numbers</h1>
                <h2>{this.state.number}</h2>
                <button onClick={this.generateNumber}>Generate</button> 
         </div>
        )
    }
}
export default RandomNumber;