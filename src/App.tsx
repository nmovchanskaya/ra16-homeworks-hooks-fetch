import { TestStatus } from './components/TestStatus';
import './App.css';

function App() {

  const urlOK = 'http://localhost:7070/data';
  const urlError = 'http://localhost:7070/error';
  const urlLoading = 'http://localhost:7070/loading';

  return (
    <div className='container'>
      <TestStatus url={urlOK}/>
      <TestStatus url={urlError}/>
      <TestStatus url={urlLoading}/>
    </div>
  )
}

export default App;
