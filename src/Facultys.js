import React, {Component} from 'react'

export class Facultys extends Component{

    constructor(){
        super();
        var today= new Date()
       let date=   today.getDate()+ "-"+ today.getMonth()+'-'+today.getFullYear() +'-'+today.getHours
        this.state={
            msg: "Hello Madhan u can do this",
            count:0,
            cdate: date
        }
    }
    Changemsg(){
        this.setState ({
            msg:"Yeah, Madhan u done this well done"
        })
    }
    onIncrement(){
        this.setState({
            count: this.state.count+1
        }, ()=>{(console.log(this.state.count))})
    }
    render(){
        return <div>
            <h2>{this.state.msg}</h2>
            <button onClick={()=>this.Changemsg()} className='btn btn-primary'> Click</button>
           <h1> Counter -{this.state.count}</h1>
           <button className='btn btn-info' onClick={()=>this.onIncrement()}>Count</button>
            <h1>Time- {this.state.cdate}</h1>
        </div>
    }
}
export default Facultys