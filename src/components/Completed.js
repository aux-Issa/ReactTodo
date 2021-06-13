import React from 'react' 
class Completed extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            show: true,
        };
    }    
    render(){
        const {completedTodos} = this.props
        console.log(this.state.show)
        if(this.state.show && completedTodos.length > 0){
            return(
                <div>
                  <button onClick={this.handleClick}>完了済みリスト非表示</button>
                  {completedTodos.map((completedTodo) => (
                    <li key={completedTodo.id}>
                      {completedTodo.text}
                    </li>  ))}
                </div>
                );} 
        else if(!this.state.show || completedTodos.length === 0) {return(
                <div>
                  <button onClick={this.handleClick}>完了済みリスト表示</button>
                </div>
            );}
    }
    handleClick = (e) => {
        e.preventDefault();
        if(this.state.show){
          this.setState({show: false});
        }else{
          this.setState({show: true})    
        }
    } 

    
}
export default Completed;