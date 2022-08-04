// import { Fragment } from 'react';
import PropTypes from 'prop-types';

// const newMessage = {
//     message: 'Mensaje 1',
//     author: 'Pablo Castro'
// }

const getResult = () => {
    return 'Pablo Castro';
}

function FirtsApp( { title, subTitle, name } ) {


    return (
        // <Fragment>
        //     <h1>Hello World Firts App</h1>
        //     <p>Soy un subtitulo</p>
        // </Fragment>

        <>  
            <h1>{ title }</h1>
            {/* <h1>{ getResult() }</h1> */}
            {/* <code>{ JSON.stringify(newMessage)}</code> */}
            <p>{ subTitle }</p>
            <p>{ name }</p>
        </>
    );
}

FirtsApp.propTypes = {
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.number.isRequired
}

FirtsApp.defaultProps = {
    title: 'No hay Titulo',
    subTitle: 0,
    name: 'Pablo Castro'
}

export default FirtsApp
