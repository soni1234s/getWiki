import {Route,Routes} from 'react-router-dom'
import { GetWiki } from './getwiki';

function App() {
  return (
    <div>
  <Routes>
    <Route path="/" element={<GetWiki/>}/>
  </Routes>
    </div>
  );
}

export default App;
