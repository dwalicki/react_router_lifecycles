import React, { PureComponent } from 'react';

class Life extends PureComponent {
    
    // 1 get default props
    // 2 set default state

    state = {
        title:'Life cycles'
    };

    // 3 before render
    // componentWillMount(){
    //     console.log('3 before render')
    // };

    // componentWillUpdate(){
    //     console.log('Before Update')
    // };

    // componentDidUpdate(){
    //     console.log('After Update')
    // };
    
    // shouldComponentUpdate(nextProps,nextState){
    //     console.log(this.state.title)
    //     console.log(nextState.title)
    //     if(this.state.title === 'something else'){
    //         return false
    //     }else{
    //     return true;
    //     }
    // };

    // componentWillReceiveProps(){
    //     console.log('Before receive props')
    // };
    
    // componentWillUnmount(){
    //     console.log('Unmount')
    // };

    // 4 render jsx
    render(){
        console.log('4 render')
        return(
            <div>
                <h3>{this.state.title}</h3>
                <div onClick={
                    ()=> this.setState({
                        title:'something else'
                    })}
                    >Click to Change</div>
            </div>
        )
    };

    // 5 after jsx
    componentDidMount(){
        console.log('5 after render')
        document.querySelector('h3').style.color='red'
    };    
};

export default Life; 