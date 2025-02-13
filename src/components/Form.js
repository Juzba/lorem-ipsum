import { useState } from "react";
import Functions from "./Functions";
import "./Form.scss";

const Form = () => {
	const [number, setNumber] = useState("");
	const [string, setString] = useState([]);

	const submitFunc = (e) => {
		e.preventDefault();
		console.log("spusteno");
		setString(Functions.paragrafGenerator(number));
	};

	return (
		<section className='form-div'>
			<form className='form' onSubmit={submitFunc}>
				<h2>Lorem ipsum generator</h2>
				<label htmlFor='inpnumber'>Odstavce:</label>
				<input type='number' id='inpnumber' value={number} onChange={(e) => setNumber(e.target.value)}></input>
				<input type='submit' value='Vygenerovat'></input>
			</form>
			{string.map((item, index) => {
				return <p key={index}>{item}</p>;
			})}
		</section>
	);
};

export default Form;
