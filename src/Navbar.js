import {Link  } from "react-router-dom";
const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>React Blog</h1>
            <section className="links">
                <Link to="/">Home</Link>
                <Link to="/create">New Blog</Link>
            </section>
        </nav>
    );
}
 
export default Navbar ;