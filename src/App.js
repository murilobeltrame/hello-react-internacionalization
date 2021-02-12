import logo from './logo.svg';
import './App.css';
import { FormattedMessage } from "react-intl";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <FormattedMessage 
            id="app.header" 
            defaultMessage="Edit the files and save to reload"
            values={{fileName:'src/App.js', code: (word) => <code>{word}</code>}} />
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FormattedMessage id="app.content" defaultMessage="Learn React" />
        </a>
        <FormattedMessage 
          id="app.channel.plug" 
          defaultMessage="Tutorial brought to you by Lokalise"
          values={{blogName:"Murilo"}} />
      </header>
    </div>
  );
}

export default App;
