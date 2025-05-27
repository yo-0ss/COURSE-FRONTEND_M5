import React from 'react';

const Header = () =>{
    return(
        <header style={styles.header}>
            <h1>Mi Pagina React</h1>
            <nav>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">Contact Us</a></li>
                </ul>
            </nav>
        </header>
    )
}

const styles = {
    header: {
        backgroundColor: 'black',
        padding: '1rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        color: 'white',
        width: '100vw'
    }
}

export default Header