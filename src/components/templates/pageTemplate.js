import './../../App.css'
import LookForUser from '../molecules/lookForUser';
import Header from '../organisms/header';

const PageTemplate = ({children}) => {
  return (
    <div className="App">
      <Header />
      <main>
        <section>
          <LookForUser />
        </section>
        <section>
          {children}
        </section>
      </main>
    </div>
  );
}

export default PageTemplate
