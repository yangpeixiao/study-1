import React,{Component,PropTypes} from 'react';

class App extends Component{
  constructor(props){
    super(props);
  }


  render(){
    return(
      <div>
       <h4>这是导航组件</h4>
       {this.props.children}
      </div>
    )
  }


}

export default App;