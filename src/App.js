import './App.css';
import Header from './components/organisms/header';
import BestSellers from './components/organisms/bestSellers';

import BOOKS from './apis/books'

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <section>
          <BestSellers books={BOOKS} />
        </section>
      </main>
    </div>
  );
}

export default App;
