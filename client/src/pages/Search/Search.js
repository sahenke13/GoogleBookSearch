import React, { Component } from "react";
import Form from "../../components/Form";
import JumboTron from "../../components/Jumbotron";
import BookCard from "../../components/BookCard"
import API from "../../utils/API"

class Search extends Component {
    state = {
        result: {},
        search: ""
    };

    componentDidMount(){
        console.log("State Search: ", this.state.search)
        this.searchBooks("The Lord of the Flies");
       
    };

    searchBooks = query => {
        API.search(query)
            .then(res => {
                console.log("API search result: ", res.data)
                this.setState({result: res.data})
            })
            
            .catch(err => console.log(err));
    };

    handleInputChange = event => {
        const value = event.target.value;
        console.log(value)
            this.setState({
                search: value
            });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        this.searchBooks(this.state.search);
        console.log("handleFormSubmit" + this.state.search)
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