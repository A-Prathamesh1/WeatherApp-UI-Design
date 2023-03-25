import './App.css';
import { Home } from './Components/Home/Home';
import { Cities } from './Components/Cities/Cities';
import { News } from './Components/News/News';
import { Earth } from './Components/Earth';
import { Footer } from './Components/Footer/Footer';

function App() {
        return (
                <>
                        <Home />
                        <Cities />
                        <Earth />
                        <News />
                        <Footer />
                </>
        );
}

export default App;
