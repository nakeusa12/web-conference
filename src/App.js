import './App.css';
import About from './Components/About/About';
import Hero from './Components/Hero/Hero';
import Navbar from './Components/Navbar';
import Schedule from './Components/Schedule/Schedule';
import Speaker from './Components/Speaker/Speaker';

function App() {
	return (
		<>
			<Navbar />
			<Hero />
			<About />
			<Speaker />
			<Schedule />
		</>
	);
}

export default App;
