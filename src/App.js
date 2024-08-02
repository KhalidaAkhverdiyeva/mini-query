import { RouterProvider } from 'react-router-dom';
import { routers } from './routers';
import '../src/index.css'

function App() {
  return (
    <div className="App">
      <RouterProvider router={routers} />
    </div>
  );
}

export default App;
