import logo from './logo.svg';
import './App.css';
import About from './components/About';

function App() {


  const [sections] = useState([
    {
      id: '1',
      name: 'About',
    },

  ]);

  const [currentSection, setCurrentSection] = useState('About');

  function renderPage() {
    switch (currentSection) {
      default:
        return <About />;
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <div className='app-container'>
          <div className='content-wrap'>
            <Header
              sections={sections}
              currentSection={currentSection}
              setCurrentSection={setCurrentSection}
            >
            </Header>
            <main>
              {renderPage(currentSection)}
            </main>
          </div>
          <Footer></Footer>
        </div>
      </header>
    </div>
  );
}

export default App;
