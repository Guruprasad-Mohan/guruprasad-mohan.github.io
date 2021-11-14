import './App.css';
import AboutMe from './components/about/aboutme';
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
                        <h2>TITLE HEADING</h2>
                        <h5>Title description, Nov 14, 2021</h5>
                        <div className="fakeimg">Fake Image</div>
                        <p>Some text..</p>
                        <p>Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>

                        <h2 className="mt-5">TITLE HEADING</h2>
                        <h5>Title description, Sep 2, 2020</h5>
                        <div className="fakeimg">Fake Image</div>
                        <p>Some text..</p>
                        <p>Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>

                        <h2 className="mt-5">TITLE HEADING</h2>
                        <h5>Title description, Sep 2, 2020</h5>
                        <div className="fakeimg">Fake Image</div>
                        <p>Some text..</p>
                        <p>Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>

                        <h2 className="mt-5">TITLE HEADING</h2>
                        <h5>Title description, Sep 2, 2020</h5>
                        <div className="fakeimg">Fake Image</div>
                        <p>Some text..</p>
                        <p>Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>

                        <h2 className="mt-5">TITLE HEADING</h2>
                        <h5>Title description, Sep 2, 2020</h5>
                        <div className="fakeimg">Fake Image</div>
                        <p>Some text..</p>
                        <p>Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>

                        <h2 className="mt-5">TITLE HEADING</h2>
                        <h5>Title description, Sep 2, 2020</h5>
                        <div className="fakeimg">Fake Image</div>
                        <p>Some text..</p>
                        <p>Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
                    </div>

                    <div className="col-sm-2">
                        <h3 className="mt-4">Some Links</h3>
                        <p>Lorem ipsum dolor sit ame.</p>
                        <ul className="nav nav-pills flex-column">
                            <li className="nav-item">
                                <a className="nav-link active" href="#">Active</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Link</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Link</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link disabled" href="#">Disabled</a>
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
