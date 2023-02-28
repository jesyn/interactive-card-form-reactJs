import './App.css';
import Card from './components/Card';
import Form from './components/Form';
import Footer from './components/Footer';
import useInput from './hooks/useInput';

function App() {
    const name = useInput({ evals: { max: 50 }, initialValue: '' });
    const number = useInput({ evals: { max: 20 }, initialValue: '' });
    const month = useInput({
        evals: { max: 2, type: 'number' },
        initialValue: '',
    });
    const year = useInput({ evals: { max: 2 }, initialValue: '' });
    const cvc = useInput({ evals: { max: 3 }, initialValue: '' });

    return (
        <div>
            <Card
                name={name.value}
                number={number.value}
                month={month.value}
                year={year.value}
                cvc={cvc.value}
            />
            <Form
                name={name}
                number={number}
                month={month}
                year={year}
                cvc={cvc}
            />
            <Footer />
        </div>
    );
}

export default App;
