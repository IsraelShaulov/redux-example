import CakeContainer from './components/CakeContainer';
import IceCreamContainer from './components/IceCreamContainer';
import NewCakeContainerPayload from './components/NewCakeContainerPayload';
import UserContainerFetch from './components/UserContainerFetch';
import './App.css';

const App = () => {
  return (
    <div className='App'>
      <CakeContainer />
      <IceCreamContainer />
      <NewCakeContainerPayload />
      <UserContainerFetch />
    </div>
  );
};
export default App;
