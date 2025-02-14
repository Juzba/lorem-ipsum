class name {
    static random = (minValue, maxValue) => {
        const num = maxValue - minValue;

        let cislo = Math.random() * 100;
        if (cislo > num) cislo %= num;
        cislo += minValue;

        return cislo.toFixed(0);
    };

    static wordGenerator = () => {
        const souhlasky = 'bcdfghjklmnpqrstvwxzb';
        const samohlasky = 'yaeiouy';
        const spojky = ['a', 'or', 'and', 'at', 'are', 'in', 'are', 'on', 'by', 'u', 'nor', 'why', "v", "na" ];
        let count = 0;
        let word = '';

        const maxCountWord = this.random(1, 9);

        do {
            if (maxCountWord < 4) {word = spojky[this.random(0, spojky.length - 1)]; break}
            else if (count % 2 === 0) word += souhlasky[this.random(0, souhlasky.length - 1)];
            else word += samohlasky[this.random(0, samohlasky.length - 1)];

            ++count;
        } while (count < maxCountWord);

        return word;
    };

    static wordArrayGenerator = () => {
        let veta = [];
        const maxCountVeta = this.random(6, 20);

        do {
            veta = [...veta, this.wordGenerator()];
        } while (veta.length < maxCountVeta);

        return veta;
    };

    static stringGenerator = () => {
        let veta = '';
        this.wordArrayGenerator().forEach((item) => {
            veta = veta + ' ' + item;
        });
        veta += '. ';
        veta = veta.trimStart();

        return veta.replace(veta[0], veta[0].toUpperCase());
    };

    static oneParagrafGenerator = () => {
        let paragraf = '';
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
            paragraf = [...paragraf, this.oneParagrafGenerator()];
            ++count;
        } while (count < num);

        paragraf[0] = 'Lorem ipsum. ' + paragraf[0];
        // console.log(paragraf);
        return paragraf;
    };
}

export default name;
