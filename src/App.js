import './App.css';
import About from './Components/About/About';
import Hero from './Components/Hero/Hero';
import Navbar from './Components/Navbar';
import Pricing from './Components/Pricing/Pricing';
import Schedule from './Components/Schedule/Schedule';
import Speaker from './Components/Speaker/Speaker';
import Sponsor from './Components/Sponsor/Sponsor';

function App() {
	return (
		<>
			<Navbar />
			<Hero />
			<About />
			<Speaker />
			<Schedule />
			<Pricing />
			<Sponsor />
		</>
	);
}

export default App;
