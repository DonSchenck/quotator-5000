import './App.css';

function Quote(props) {
  return (
    <div className="App">
        Host: {props.hostname} | Quote: {props.quoteText}
    </div>
  );
}

export default Quote;
