import Header from './components/Header';
import Card from './components/Card.jsx';
import data from "./data.js";
import './App.css';

function App() {
    const cards = data.map(item => {
        return (
            <Card
                key={item.id}
                {...item}
            />
        )
    })

  return (
      <>
          <Header/>
          <div className="cards-list">
              {cards}
          </div>
      </>
  )
}

export default App
