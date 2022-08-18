import logo from "./logo.svg";
import "./App.css";
import HelloWorld from "./components/HelloWorld.js"
import Count from "./components/Count.js"
import Form from "./components/Form.js"


function createMarkup() {
    return {__html: `<h2>h2</h2>`};
}


function App() {
	return (
		<div className="App">
			<div className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<div>{2 * 3}</div>
                <div dangerouslySetInnerHTML={createMarkup()}></div>
                <HelloWorld></HelloWorld>
                <Count></Count>
                <Form></Form>
			</div>
		</div>
	);
}

export default App;
