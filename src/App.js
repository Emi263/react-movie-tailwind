import "./App.css";
import MovieList from "./components/MovieList";
import MovieDetails from "./components/MovieDetails";
import Error from "./components/Error";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ScrollTop from "./components/ScrollTop";

function App() {
  return (
    <Router>
      <ScrollTop />
      <div className="">
        <Switch>
          <Route exact path="/">
            <MovieList />
          </Route>
          <Route exact path="/movie/:id">
            <MovieDetails />
          </Route>
          <Route path="*">
            <Error />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
