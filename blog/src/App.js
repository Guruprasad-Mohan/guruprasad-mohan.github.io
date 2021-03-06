import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import AboutMe from "./components/about/aboutme";
import BlogNov212021 from "./components/blogs/blog-Nov21-2021";
import BlogNov282021 from "./components/blogs/blog-Nov28-2021";
import BlogDec062021 from "./components/blogs/blog-Dec06-2021";
import Footer from "./components/common/footer";
import Header from "./components/common/header";
import BlogFeb062022 from "./components/blogs/blog-Feb06-2022";

function App() {
  return (
    <div className="container-fluid">
      <Header />
      <div className="container mt-5">
        <div className="row">
          <div className="col-sm-2">
            <AboutMe />
          </div>

          <div className="col-sm-8">
            <Switch>
              <Route exact path="/">
                <BlogFeb062022 />
              </Route>
              <Route path="/blogNov2121">
                <BlogNov212021 />
              </Route>
              <Route path="/blogNov2821">
                <BlogNov282021 />
              </Route>
              <Route path="/blogDec0621">
                <BlogDec062021 />
              </Route>
              <Route path="/blogFeb0622">
                <BlogFeb062022 />
              </Route>
            </Switch>
          </div>

          <div className="col-sm-2">
            <h6 className="mt-4">Links to previous blogs</h6>
            <ul className="flex-column">
              <li className="nav-item">
                <a className="nav-link active" href="/blogFeb0622">
                  Blog Feb06, 2022
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="/blogDec0621">
                  Blog Dec06, 2021
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="/blogNov2821">
                  Blog Nov28, 2021
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="/blogNov2121">
                  Blog Nov21, 2021
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
