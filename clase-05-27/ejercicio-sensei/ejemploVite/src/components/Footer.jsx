import React from 'react';

const Footer = () =>{
    return(
        <footer style={styles.Footer}>
            <p>2025. Todos los derechos son reservados.</p>
        </footer>
    )
}

const styles ={
    Footer: {
        backgroundColor: '#1d2d44',
        padding: '1rem',
        color: 'white',
        textAlign: 'center'
    }
}

export default Footer;