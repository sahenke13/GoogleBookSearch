import React, { component } from 'react';

import NavBar from "./Navbar";
import Saved from "../pages/Saved";
import Search from "../pages/Search";

class MainPage extends Component {
    state = {
        currentPage: "Home"
    };


    hanglePageChange = page => {
        this.setState({ currentPage: page});

};

renderPage = () => {
    if (this.state.currentPage === "Saved"){
        return <Saved />;
    }else if (this.state.currentPage === "Search"){
        return <Search />
    }
}
}

render() {
    return(
        <div>
            <NavBar

        </div>
    )
}