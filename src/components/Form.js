import { useState } from 'react';
import Functions from './Functions';
import './Form.scss';

const Form = () => {
    const [number, setNumber] = useState('');

    const submitFunc = (e) => {
        e.preventDefault();
        console.log('spusteno');
        main();
    };

    const main = () => {
        const alphabet = 'aabcdefghijklmnopqrstuvwxyz';
        let veta = [];

        do {
            let count = 0;
            let word = '';

            const maxCount = Functions.random(1, 7);

            do {
                word += alphabet[Functions.random(0, alphabet.length - 1)];
                ++count;
            } while (count < maxCount);

            veta = [...veta, word]
        } while (veta.length < 6);

        console.log(veta)
    };

    return (
        <section className='form-div'>
            <form className='form' onSubmit={submitFunc}>
                <h2>Lorem ipsum generator</h2>
                <label htmlFor='inpnumber'>Odstavce:</label>
                <input type='number' id='inpnumber' value={number} onChange={(e) => setNumber(e.target.value)}></input>
                <input type='submit' value='Vygenerovat'></input>
            </form>
            <p>{number}</p>
        </section>
    );
};

export default Form;
