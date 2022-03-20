import {Route,Routes} from 'react-router-dom'
import { GetWiki } from './getwiki';

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
