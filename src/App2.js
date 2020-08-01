import  React,{Component} from 'react';
import {CardList} from './components/card-list/card-list.component.jsx';
import {SearchBox} from './components/searchBox/search.component.jsx';
import './App.css';


class App2 extends Component{

    constructor(){
        super();

        this.state={
            streamers:[],
            searchField:''
        };

 
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response=>response.json())
        .then(listado=>this.setState({streamers:listado}));
    }


    handleChange=(e)=>{
        this.setState({searchField:e.target.value});
    }

    render(){

        const { streamers, searchField }= this.state;
        
        const filteredStreamers= streamers.filter(streamer=>
            streamer.name.toLowerCase().includes(searchField.toLowerCase()));
        return (
            <div className="App">

            <h1>Prueba React</h1>
             <SearchBox
             placeholder='Buscar streamers'
             handleChange= {this.handleChange}/>
             <CardList streamers={filteredStreamers}/ > 
            
            </div>
          );
    }
}


export default App2;