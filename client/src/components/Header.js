import { React } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    //Views
    const showNavigation = () => (
        <nav className='navbar navbar-expand-lg navbar-light bg-light'>
            <Link to='/' className='navbar-brand'>
				Logo
			</Link>

            <button
				className='navbar-toggler'
				type='button'
				data-toggle='collapse'
				data-target='#navbarTogglerDemo02'
				aria-controls='navbarTogglerDemo02'
				aria-expanded='false'
				aria-label='Toggle navigation'
			>
            <span className='navbar-toggler-icon'></span>
			</button>

            <div className='collapse navbar-collapse' id='navbarTogglerDemo02'>
				<ul className='navbar-nav ml-auto mt-2 mt-lg-0'>
                
                    <li className='nav-item'>
                        <Link to='/' className='nav-link'>
                            <i className='fas fa-home'></i> Home
                        </Link>
                    </li>

                    <li className='nav-item'>
						<Link to='/signup' className='nav-link'>
						    <i className='fas fa-edit'></i> Signup
						</Link>
					</li>

                    <li className='nav-item'>
						<Link to='/signin' className='nav-link'>
						    <i className='fas fa-edit'></i> SignIn
						</Link>
					</li>

                </ul>
                <form class='form-inline my-2 my-lg-0'>
                    <input 
                        class='form-control mr-sm-2' 
                        type='search' 
                        placeholder='Search'
                    />
                    <button 
                        class='btn btn-outline-success my-2 my-sm-0' 
                        type='submit'>
                        Search
                    </button>
                </form>
            </div>
        </nav>
    );
    
    return(
        <header id='header'>
            { showNavigation() }
        </header>
    );
};

export default Header;