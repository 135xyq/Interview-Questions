import logo from "./logo.svg";
import "./App.css";
// import HelloWorld from "./components/HelloWorld.js"
// import Count from "./components/Count.js"
// import Form from "./components/Form.js"
// import FunctionDefaultProps from "./components/FunctionDefaultProps.js"
// import PropType from "./components/PropTypes.js"
// import WithHocTest from "./components/TestHoc.js"
// import TestA from "./components/TestA.js"
// import TestB from "./components/TestB.js"


// const CompA = WithHocTest(TestA)
// const CompB = WithHocTest(TestB)

import TestRef from "./components/TestRef.js"


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
                {/* <HelloWorld></HelloWorld>
                <Count></Count>
                <Form></Form> */}
                {/* <FunctionDefaultProps age="19"></FunctionDefaultProps>
                <PropType a="1" b={2} c={true}></PropType> */}

                {/* <CompA number={1}></CompA>
                <CompB number={2}></CompB> */}

                <TestRef></TestRef>
			</div>
		</div>
	);
}

export default App;
