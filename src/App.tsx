import Header from './Components/Header';
import Sidenav from './Components/Sidenav';
import Resumo from './Pages/Resumo';
import './Style.css';

function App() {
  return (
    <div>
      <Sidenav />
      <main>
        <Header />
      </main>
      <Resumo />
    </div>
  )
}

export default App