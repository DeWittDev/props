import './App.css';
import PersonCard from './components/Person';

function App() {
  return (
    <div className='App'>
      <PersonCard  
        firstName = { 'Andrew' }
        lastName = { 'DeWitt' }
        age = { '27' }
        hair = { 'brown' }
      />
      <PersonCard  
        firstName = { 'Raqueli' }
        lastName = { 'DeWitt' }
        age = { '27' }
        hair = { 'brown' }
      />
      <PersonCard  
        firstName = { 'Samuel' }
        lastName = { 'DeWitt' }
        age = { '3' }
        hair = { 'sandy brown' }
      />
      <PersonCard  
        firstName = { 'Shira' }
        lastName = { 'DeWitt' }
        age = { '1' }
        hair = { 'sandy brown' }
      />
      <PersonCard  
        firstName = { '??' }
        lastName = { 'DeWitt' }
        age = { '-.6' }
        hair = { 'sandy brown' }
      />

    </div>
  );
}  

export default App;
