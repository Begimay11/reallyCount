import Avatar from './components/Avatar';
import './App.css';


const comment = {
  date: new Date(),
  text: 'I hope enjoy learning React!',
  author: {
      name: 'Hello Kitty',
      avatarUrl: 'http://placekitten.com/g/64/64'
  }
}

function App() {
  return (
    <div className="App">
      <Avatar author={comment.author} text ={comment.text} date={comment.date}/>
    </div>
  );
}

export default App;
