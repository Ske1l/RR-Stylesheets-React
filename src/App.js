import './App.css';
import Container from './Container';
import Footer from './Footer';
import Item from './Item';
import Menu from './Menu';
import Section from './Section';
import StyleContext from './StyleContext';
import { DEFAULT_STYLE } from './StyleContext';

const menuStyle = {
  width: '10%',
  backgroundColor: 'grey',
  height: '200px'
}

function App() {
  return (
    <StyleContext.Provider value={DEFAULT_STYLE}>
      <div className="App my-style">
        <h1>Hello World</h1>
        <div className='left-side'>
          <Menu menuStyle={menuStyle} />
        </div>
        <Container />
        <div>
          <Section />
          <Item />
          <Item />
          <Item />
          <Item />
        </div>
        <div className='bottom-area'>
          <Footer />
        </div>
      </div>
    </StyleContext.Provider>

  );
}

export default App;
