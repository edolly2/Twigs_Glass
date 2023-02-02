import './App.css';
import Navbar from './components/Navbar';
import SubscribeBar from './components/SubscribeBar';
import Layout from './layout/Layout';

function App() {
  return (
    <div className="App">
      <SubscribeBar />
      <Layout>
        <Navbar />
      </Layout>
    </div>
  );
}

export default App;
