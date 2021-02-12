import logo from './logo.svg';
import './App.css';
import { FormattedDate, FormattedMessage, FormattedNumber, FormattedTime } from "react-intl";
import { useContext } from 'react';
import { Context } from './components/Wrapper';

function App(props) {

  const context = useContext(Context);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <select value={context.locale} onChange={context.selectLanguage}>
            <option value='en'>English</option>
            <option value='fr'>French</option>
            <option value='ar'>Arabic</option>
          </select>
        </p>
        <p>
          <FormattedMessage 
            id="app.header" 
            defaultMessage="Edit the files and save to reload"
            values={{fileName:'src/App.js', code: (word) => <code>{word}</code>}} />
        </p>
        <p>
          <FormattedDate
            value={props.date}
            year='numeric'
            month='long'
            day='numeric'
            weekday='long' />, 
          <FormattedTime
            value={new Date()}
            hour='numeric'
            minute='numeric'
            second='numeric'
            timeZoneName='long' />
        </p>
        <p>
          <FormattedNumber 
            value={10.99}
            style='currency'
            currencyDisplay='symbol'
            currency='USD' />
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
