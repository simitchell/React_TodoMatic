import React, { useState } from "react";

const [name, setName] = useState("Use hooks!");

function handleSubmit(e) {
	e.preventDefault();
	props.addTask("Say hello!");
}

function Form(props) {
	return (
		<form onSubmit={handleSubmit}>
			<h2 className="label-wrapper">
				<label htmlFor="new-todo-input" className="label_lg">
					What needs to be done?
				</label>
			</h2>
			<input
				type="text"
				id="new-todo-input"
				className="input input__lg"
				name="text"
				autoComplete="off"
				value={name}
			/>
			<button type="submit" className="btn btn_primary btn_lg">
				Add
			</button>
		</form>
	);
}

export default Form;
