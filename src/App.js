import "./App.css";
import { useContext } from "react";
import { ErrorBoundary } from "./components/Erroor";
import MovieList from "./components/MovieList";
import MovieDetails from "./components/MovieDetails";
import Error from "./components/Error";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ScrollTop from "./components/ScrollTop";
import LottieFile from "./components/LottieFile";
import useData from "./Hooks/useData";
import { GlobalProvider, GlobalContext } from "./store/GlobalCtx";

import Fallback from "./components/Fallback";
function App() {
  const { data, error } = useData();

  return (
    <GlobalProvider>
      <Router>
        <ScrollTop />
        <div className="">
          <Switch>
            <Route exact path="/">
              <MovieList error={error} />
            </Route>
            <Route exact path="/movie/:id">
              <MovieDetails />
            </Route>
          </Switch>
        </div>
      </Router>
    </GlobalProvider>
  );
}

export default App;
