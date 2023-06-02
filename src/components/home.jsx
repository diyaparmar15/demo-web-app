import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import "../style/main.css";

export default function HomeScreen() {
    const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
	};

	// The nav element contains a Link component for each page of the application, 
	// and a button component that triggers the showNavbar function when clicked, 
	// causing the navigation bar to expand or collapse depending on its current state.
	// Return Nav Bar

	return (
		<header>
			<h1>Demo Web App Petco</h1>
			<nav ref={navRef}>
				<Link to="/">Home</Link>
				<Link to="/dog">Dogs</Link>
				<Link to="/cat">Cats</Link>
				<Link to="/bird">Birds</Link>
                <Link to="/fish">Fish</Link>
				<button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<FaTimes />
				</button>
			</nav>
			<button
				className="nav-btn"
				onClick={showNavbar}>
				<FaBars />
			</button>
            {/* <div className="homePet">
                <img src= "images/homePets.png" alt="Pets" />
            </div> */}
		</header>

	);
}