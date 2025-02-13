class name {
    static random = ( minValue, maxValue) => {

        const num = maxValue - minValue

        let cislo = Math.random() * 100;
        if (cislo > num) cislo %= num;
        cislo += minValue;

        return cislo.toFixed(0)

    };
}

export default name;
