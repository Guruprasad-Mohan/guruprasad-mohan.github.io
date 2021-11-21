import React from "react";
import { Route, Switch } from "react-router-dom";
import './App.css';
import AboutMe from './components/about/aboutme';
import BlogNov212021 from './components/blogs/blog-Nov21-2021';
import BlogNov292021 from './components/blogs/blog-Nov29-2021';
import Footer from './components/common/footer';
import Header from './components/common/header';

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
                            <Route exact path="/" component={BlogNov212021} />
                            <Route path="/blogNov2921" component={BlogNov292021} />
                        </Switch>
                    </div>

                    <div className="col-sm-2">
                        <h6 className="mt-4">Links to previous blogs</h6>
                        <ul className="flex-column">
                            <li className="nav-item">
                                <a className="nav-link active" href="/blogNov2921">Blog Nov29, 2021</a>
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
