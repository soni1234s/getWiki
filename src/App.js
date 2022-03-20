import {Route,Routes} from 'react-router-dom'
import { GetWiki } from './Components/getwiki';

function App() {
  return (
    <>
  <Routes>
    <Route path="/" element={<GetWiki/>}/>
  </Routes>
    </>
  );
}

export default App;
