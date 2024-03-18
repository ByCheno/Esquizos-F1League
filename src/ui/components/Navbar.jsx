import { Link, NavLink } from 'react-router-dom';


export const Navbar = () => {
    return (

        <nav className="navbar navbar-expand-lg navbar-dark bg-dark rounded-3">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/"> Esquizo F1 League </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                            <NavLink className={ ({isActive}) => `nav-link ${isActive ? 'active' : ''}` } to="/driversInfo">
                                Drivers Info
                            </NavLink>

                            <NavLink className={ ({isActive}) => `nav-link ${isActive ? 'active' : ''}` } to="/driversStandings">
                                Drivers Standings
                            </NavLink>

                            <NavLink className={ ({isActive}) => `nav-link ${isActive ? 'active' : ''}` } to="/teamsInfo">
                                Teams Info
                            </NavLink>

                            <NavLink className={ ({isActive}) => `nav-link ${isActive ? 'active' : ''}` } to="/teamsStandings">
                                Teams Standings
                            </NavLink>
                    </ul>
                </div>
                <div className="navbar-collapse d-flex justify-content-end">
                    <ul className="navbar-nav ml-auto">
                        <span className='nav-item nav-link text-white'><strong>Admin</strong></span>
                        <button className='nav-item nav-link btn'>Logout</button>
                    </ul>
                </div>
            </div>
        </nav>
    )
}