import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
// import PageNotFound from "./components/PageNotFound/PageNotFound";
import MovieDetail from "./components/MovieDetail/MovieDetail";
import "./App.scss";
import FilmPage from "./pages/FilmPage";

function App() {
  return (
    <div className="app">
      <Router>
        <Header></Header>
        
        <div className="container">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/movie/:imdbID" component={MovieDetail} />
            <Route path="/film" component={FilmPage} />
            {/* <Route component={PageNotFound} /> */}
          </Switch>
        </div>
        
        <Footer />
      </Router>
    </div>
  );
}

export default App;






























// import React from 'react';
// import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
// import Home from "./components/Home/Home";
// import Header from "./components/Header/Header";
// import Footer from "./components/Footer/Footer";
// import PageNotFound from './components/PageNotFound/PageNotFound';
// import MovieDetail from "./components/MovieDetail/MovieDetail";
// import "./App.scss";


// const App = () => {
//   return (
//     <div className='App'>
//       <Router>
//         <Header></Header>
//         <Switch>
//           <Route path='/' component={Home} />
//         <Route path='/movie/:imdbID' component={MovieDetail} />
//         <Route component={PageNotFound} />
//         </Switch>
        
//         <Footer />
//       </Router>
//     </div>
//   );
// };

// export default App;