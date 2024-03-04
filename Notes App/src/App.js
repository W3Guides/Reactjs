// App.js

import "./App.css";
import { useState } from "react";

function App() {
	const [title, setTitle] = useState("");
	const [des, setDes] = useState("");
	const [notes, setNotes] = useState(data);
	const [count, setCount] = useState(4);

	function remove(id) {
		setNotes(notes.filter((e) => e.key !== id));
	}

	function handle() {
		if (!title || !des) {
			window.alert("Incomplete input");
			return;
		}
		setNotes([...notes, { key: count, title: title, des: des }]);
		setCount(count + 1);
		setTitle("");
		setDes("");
		console.log(notes);
	}

	return (
		<div className="App">
			<div className="card">
				<div className="head">
					<h1>React notes</h1>
				</div>
				<div className="notes">
					{notes.map((e) => (
						<div className="notes-item">
							<div style={{ width: "90%" }}>
								<h4>Title: {e.title}</h4>
								<p>Note: {e.des}</p>
							</div>
							<button
								type="input"
								style={{
									fontSize: "20px",
									width: "8%",
									height: "35px",
									padding: "0 2% 0 2%",
									color: "black",
									backgroundColor:"#ff9f31",
								}}
								onClick={() => remove(e.key)}
							>
								X
							</button>
						</div>
					))}
					<div className="add">
						<h3>Add Notes</h3>
						<input
							type="text"
							id="title"
							placeHolder="Note title"
							value={title}
							onChange={(e) => setTitle(e.target.value)}
						></input> <br/>
						<input
							type="text"
							id="description"
							placeholder="lorem ipsum dolor sit amit"
							value={des}
							onChange={(e) => {
								setDes(e.target.value);
							}}
						></input>
						<button type="submit" onClick={handle}>
							+ Create
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}

// Dummy data
const data = [


];

export default App;
