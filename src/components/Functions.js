class name {
	static random = (minValue, maxValue) => {
		const num = maxValue - minValue;

		let cislo = Math.random() * 100;
		if (cislo > num) cislo %= num;
		cislo += minValue;

		return cislo.toFixed(0);
	};

	static wordGenerator = () => {
		const alphabet = "aabcdefghijklmnopqrstuvwxyz";
		let count = 0;
		let word = "";

		const maxCountWord = this.random(3, 9);

		do {
			word += alphabet[this.random(0, alphabet.length - 1)];
			++count;
		} while (count < maxCountWord);

		return word;
	};

	static wordArrayGenerator = () => {
		let veta = [];
		const maxCountVeta = this.random(6, 15);

		do {
			veta = [...veta, this.wordGenerator()];
		} while (veta.length < maxCountVeta);

		return veta;
	};

	static stringGenerator = () => {
		let veta = "";
		this.wordArrayGenerator().forEach((item) => {
			veta = veta + " " + item;
		});
		veta += ". ";
		veta = veta.trimStart();

		return veta.replace(veta[0], veta[0].toUpperCase());
	};

	static oneParagrafGenerator = () => {
		let paragraf = "";
		let count = 0;

		do {
			paragraf += this.stringGenerator();
			++count;
		} while (count < 6);

		return paragraf;
	};

	static paragrafGenerator = (num) => {
		if (num < 1 || !num) num = 1;
		else if (num > 5) num = 5;

		let paragraf = [];
		let count = 0;

		do {
			paragraf =[...paragraf ,this.oneParagrafGenerator()]
			++count;
		} while (count < num);

        console.log(paragraf)
		return paragraf;
	};
}

export default name;
