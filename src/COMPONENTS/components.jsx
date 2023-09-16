import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

export default function Navigation() {
    useEffect(() => {
        const handleScroll = () => {
            console.log(window.scrollY);
            console.log("yo")
        };

        window.addEventListener("scroll", handleScroll);

        // Cleanup
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <>
            <nav>
                <img src="/images/logo.png" alt="logo" className='logo'/>
                <div className="pages">
                    <Link to="#">Home</Link>
                    <Link to="#">Services</Link>
                    <Link to="#">About</Link>
                    <div to="#" className='drop-menu'>pages
                        <i className="fa fa-angle-down" id='dropdown' aria-hidden="true"></i>
                        <div className='dorp-main'>
                            <Link to="#">About Us</Link>
                            <Link to="#">Our Services</Link>
                            <Link to="#">Contact Us</Link>
                        </div>
                    </div>
                    <Link to="#">Testimonials</Link>
                    <button className='greenbutton'>contact support</button>
                </div>
            </nav>
        </>
    );
}

export function Card(props) {
    return (
        <>
            <div className='card'>
                <div className='card-description-container'>
                    {/*<!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --> */}
                    <svg xmlns="http://www.w3.org/2000/svg" className='icons' height="4em" viewBox="0 0 640 512"><path d={props.path}/></svg>
                    <h4>{props.topic}</h4>
                    {/* className='icons' height="4em" */}
                    <p>{props.description}</p>
                </div>
            </div>
        </>
    );
}
