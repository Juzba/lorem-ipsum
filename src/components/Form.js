import "./Form.scss"

const Form = () => {


	const submitFunc = (e) => {
		e.preventDefault();
		console.log("spusteno");
	};

	return (
		<section className="form-div">
			<form className="form" onSubmit={submitFunc}>
				<h2>Lorem ipsum generator</h2>
				<label htmlFor="inpnumber">Odstavce:</label>
				<input type='number' id='inpnumber'></input>
				<input type='submit' value="Vygenerovat" ></input>
			</form>
		</section>
	);
};

export default Form;
