import "../styles.css";
import { Link } from 'react-router-dom';
 
export default function Home() {
    return (
    <div className="App">
        <div className="box">
            <h1>Fun with Triangles</h1>
            <div className="container">
                <Link className="feature" to="/angle">Angles and Triangles</Link>
                <Link className="feature" to="/hypotenuse">Calculate Hypotenuse</Link>
                <Link className="feature" to="/area">Area of Triangle</Link>
                <Link className="feature" to="/quiz">Quiz on Triangle</Link>
            </div>
        </div>    
    </div>
    );
    }
