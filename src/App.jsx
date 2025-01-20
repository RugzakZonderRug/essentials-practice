import Header from './components/Header.jsx';
import InputGroup from './components/InputGroup.jsx';

function App() {
  return (
    <>
      <Header />
      <div id='user-input'>
        <InputGroup label='Initial investment' />
        <InputGroup label='Annual investment' />
        <InputGroup label='Expected return' />
        <InputGroup label='Duration' />
      </div>
    </>
  )
}

export default App
