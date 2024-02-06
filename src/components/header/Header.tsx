import React from 'react'



const Header = ({ titulo }) => {
    return (


        <nav className='bg-secondary  bg-emerald-100'>
            <div className='justify-between items-center flex py-2 display-flex text-align left'>
                <a href='#' className='text-cyan-500'>{titulo}</a>
            </div>

        </nav>




    );
}

export default Header;