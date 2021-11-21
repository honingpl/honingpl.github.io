import React from "react";
import { Switch, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import Header from "./components/Header";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Start from "./pages/Start";
import Contacts from "./pages/Contacts";
import { basicTheme } from "./theme";

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={basicTheme}>
        <Header />
        <NavBar />
        <main>
          <Switch>
            <Route exact path="/" component={Start} />
            <Route path="/contacts" component={Contacts} />
            {/* <Route path="/products" component={Products} /> */}
          </Switch>
        </main>
        <Footer />
      </ThemeProvider>
    </div>
  );
}

export default App;
