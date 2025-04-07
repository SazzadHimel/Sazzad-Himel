import Header from '../Header/Header.jsx';
import Animation from "../../Animation.json";
import Lottie from "lottie-react"; 
import './Home.css';
import PropTypes from "prop-types";

const Home = ({ navigate }) => {
return (
    <div><Header navigate={navigate} />
        <div className="container space">
            <div className="about">
                <div className="about-left">
                    <Lottie animationData={Animation} />
                </div>
                <div className="about-right">
                    <h2 className="about-title">
                    Full-Stack Developer | MERN | Data Science | Laravel | Python | JavaScript
                    </h2>
                    <p className="about-intro">Hello! I'm <strong>Sazzad Hossen</strong>.</p>
                    <p>
                    A dedicated undergraduate student in the Computer Science & Engineering department at <strong>BRAC University</strong>.
                    I am committed to excellence, and my versatile skills as a <strong>Web Developer</strong> enable me to craft innovative digital solutions.
                    With a deep passion for <strong>Web Design</strong> (Laravel-PHP, MERN-JavaScript), <strong>Machine Learning</strong> (Python), and <strong>Data Science</strong> (Excel, MySQL, NumPy, Seaborn, Pandas),
                    I strive to explore and master advancements in these fields, creating impactful and elegant solutions that push boundaries.
                    </p>
                </div>
            </div>
            <div className='skills-heading'>
                <h2 className="skills-heading">Want to see my works?</h2>
                <p className="tech-title">Explore the projects I've built using some technologies.</p>
                <button className="btn">
                    View Projects
                </button>
            </div>
        </div>
    </div>
    );
};

Home.propTypes = {
    navigate: PropTypes.func.isRequired,
};

export default Home;
