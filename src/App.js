import './App.css';
import injectContext from './js/store/appContext';
import Layout from './js/components/Layout';


function App() {
  return (
    <Layout />
  );
}

export default injectContext(App);
