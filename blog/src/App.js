import React from "react";
import { Route, Switch } from "react-router-dom";
import './App.css';
import AboutMe from './components/about/aboutme';
import BlogNov212021 from './components/blogs/blog-Nov21-2021';
import BlogNov282021 from './components/blogs/blog-Nov28-2021';
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
                            {/*<Route path="/blogNov2821" component={BlogNov282021} />*/}
                            {/*<Route exact path="/" component={BlogNov212021} />*/}

                            <Route path="/blogNov2821">
                                <BlogNov282021 />
                            </Route>
                            <Route exact path="/">
                                <BlogNov212021 />
                            </Route>
                            
                        </Switch>
                    </div>

                    <div className="col-sm-2">
                        <h6 className="mt-4">Links to previous blogs</h6>
                        <ul className="flex-column">
                            <li className="nav-item">
                                <a className="nav-link active" href="/">Blog Nov21, 2021</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" href="/blogNov2821">Blog Nov28, 2021</a>
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
