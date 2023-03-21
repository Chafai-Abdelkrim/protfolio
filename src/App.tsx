import { About, Home, Projects } from './components';
import background from './assets/stacked-waves-haikei.svg';

function App() {
  return (
    <div
      className="App"
      style={{
        backgroundRepeat: 'no-repeat',
        backgroundImage: `url(${background})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
      }}
    >
      <Home />
      <About />
      <Projects />
    </div>
  );
}

export default App;
