import { useEffect, useState } from 'react'
import PropTypes from 'prop-types';

function CounterApp( { value } ) {

    const [count, setCount] = useState(value);

    //setCount(value);

    const handleAdd = () => {
        setCount( count + 1 );
    } 

    const handleMinus = () => {
        setCount( count - 1 );
    } 

    const handleReset = () => {
        setCount(value);
    } 

    useEffect(() => {
        setCount(value);
    }, []);

    return (
        <>  
            <h1>CounterApp</h1>
            <h2> { count } </h2>
            <button onClick={ handleAdd } > +1 </button>
            <button onClick={ handleMinus }> -1 </button>
            <button onClick={ handleReset }> Reset </button>
        </>
    );
}

CounterApp.propTypes = {
    value: PropTypes.number.isRequired
}

CounterApp.defaultProps = {
    value: 0
}

export default CounterApp

