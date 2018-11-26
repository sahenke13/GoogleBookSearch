import React, { Component } from "react";
import Form from "../../components/Form";
import JumboTron from "../../components/Jumbotron";
// import BookCard from "../../components/BookCard"
import API from "../../utils/API"

class Search extends Component {
    state = {
        result: [],
        search: ""
    };

    componentDidMount(){
        
        this.searchBooks("Madame Bovary");
       
    };

    searchBooks = query => {
        console.log("query", query)
        API.search(query)
            .then(res => {
                console.log("API search result: ", res.data)
                this.setState({result: res.data})
            })        
            .catch(err => console.log(err));
    };

    handleInputChange = event => {
        const value = event.target.value;
        const name = event.target.name;

        console.log("value is: ", value)  
        console.log("name is: ", name)
        this.setState({
            [name]: value
        });
        
          
    };

    handleFormSubmit = event => {
        event.preventDefault();
       
        console.log("handleFormSubmit ",this.state.search)
        this.searchBooks(this.state.search);
    };
    

    render() {
        return (
            <div>
                <JumboTron />
                <Form 
                    value={this.state.search}
                    handleInputChange={this.handleInputChange}
                    handleFormSubmit={this.handleFormSubmit}
                    />
            </div>


        );
    }

}
    
   


export default Search;