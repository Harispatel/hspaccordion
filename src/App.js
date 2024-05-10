import logo from './logo.svg';
import './App.css';
import CustomAccordion from './pages/accordion';

function App() {
  const panels = [
    { id: 1, title: 'What is React?', content: 'React is a JavaScript library for building user interfaces, developed by Facebook. It is used for building single-page applications (SPAs) and handling the view layer of web and mobile applications.' },

    { id: 2, title: 'What are the key features of React?', content: 'Virtual DOM for efficient rendering, component-based architecture for reusability and maintainability, JSX for declarative UI, and unidirectional data flow for predictable state management.' },
    
    { id: 3, title: 'What is JSX?', content: 'JSX (JavaScript XML) is a syntax extension for JavaScript used with React to describe what the UI should look like. It allows writing HTML-like code within JavaScript, making it easier to write and understand React components.' },
    
    { id: 4, title: 'What are React components?', content: 'React components are reusable, self-contained blocks of code that represent a part of the UI. They can be either functional components (stateless) or class components (stateful), encapsulating their own logic and UI.' },
    
    { id: 5, title: 'What is the difference between state and props in React?', content: 'State is managed internally by a component and can be changed by the component itself using setState(). Props (short for properties) are passed to a component from its parent and are immutable within the component.' },
    
    { id: 6, title: 'What is the purpose of setState() method in React?', content: 'The `setState()` method is used to update the state of a component. When setState() is called, React re-renders the component and its children with the updated state.' },
    
    { id: 7, title: 'What is the significance of keys in React lists?', content: 'Keys are used to uniquely identify elements in a list of React components. They help React identify which items have changed, are added, or are removed, ensuring efficient updates of the UI.' },
    
    { id: 8, title: 'What are React Hooks?', content: 'React Hooks are functions that let you use state and other React features in functional components. They allow you to use state and lifecycle methods without writing a class.' },
    
    { id: 9, title: 'What are useEffect and useState Hooks used for?', content: '`useEffect` is a Hook used for side effects in functional components, such as data fetching, subscriptions, or manually changing the DOM. useState is a Hook that allows functional components to use component-local state.' },
    
    { id: 10, title: 'What is the purpose of ReactDOM.render()?', content: 'ReactDOM.render() is used to render React elements into the DOM. It takes two arguments: the React element to render and the DOM element where the component will be rendered.' },
    

  ];
  return (
    <div className="App">
      <CustomAccordion panels={panels} />
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
