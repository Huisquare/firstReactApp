// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import React, { Component } from "react";
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Link,
    Redirect,
} from "react-router-dom";
//import "./App.css";

// class App extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             items: [],
//             isLoaded: false,
//         };
//     }

//     componentDidMount() {
//         fetch("https://jsonplaceholder.typicode.com/users")
//             .then((res) => res.json()) //convert the data to json format
//             .then((json) => {
//                 this.setState({
//                     isLoaded: true,
//                     items: json,
//                 });
//             });
//     }
//     //componentDidMount method runs after the render method
//     //render method is what is given back to the webpage
//     render() {
//         var { isLoaded, items } = this.state;
//         if (!isLoaded) {
//             return <div>Loading...</div>;
//         } else {
//             return (
//                 <div className="App">
//                     Data has been loaded
//                     <ul>
//                         <li>
//                             <ul>
//                                 {items.map((item) => (
//                                     <li key={item.id}>
//                                         Name: {item.name} | Email: {item.email}
//                                     </li>
//                                 ))}
//                             </ul>
//                         </li>
//                     </ul>
//                 </div>
//             );
//         }
//         return <div className="App"></div>;
//     }
// }

// export default App;

import MainPage from "./pages";
import NotFoundPage from "./pages/404";
import UsersPage from "./pages/users";
import FormSubmission from "./pages/form";
class App extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path="/" component={MainPage} />
                    <Route exact path="/Users" component={UsersPage} />
                    <Route exact path="/404" component={NotFoundPage} />
					<Route exact path="/form" component = {FormSubmission}/>
                    <Redirect to="/404" />
                </Switch>
            </Router>
        );
    }
}
export default App;
