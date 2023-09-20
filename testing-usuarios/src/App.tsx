import './App.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './utils/router';
import './assets/css/global.css';

function App() {
  return <RouterProvider router={router} />;
}

export default App;
