import './Nav.css';
import {Link} from 'react-router-dom';

const Nav=()=>{
    return(
        <div className="nav">
            <ul>
                <li>
                    <Link className="logo-link" to={`/entertainment-app`}>
                        <img className="logo" src="../entertainment-app/assets/logo.svg" alt="nav-home-icon" />
                    </Link>
                </li>
                <li>
                    <Link className="nav-link" to={`/entertainment-app`}>
                        <img src="../entertainment-app/assets/icon-nav-home.svg" alt="nav-home-icon" />
                    </Link>
                </li>
                <li>
                    <Link className="nav-link" to={`/allmovies`}>
                        <img src="../entertainment-app/assets/icon-nav-movies.svg" alt="nav-home-icon" />
                    </Link>
                </li>
                <li>
                    <Link className="nav-link" to={`/series`}>
                        <img src="../entertainment-app/assets/icon-nav-tv-series.svg" alt="nav-home-icon" />
                    </Link>
                </li> 
                <li>
                    <Link className="nav-link" to={`/bookmarked`}>
                        <img src="../entertainment-app/assets/icon-nav-bookmark.svg" alt="nav-home-icon" />
                    </Link>
                </li>                                     
            </ul>
            
        </div>    
    )
}

export default Nav;