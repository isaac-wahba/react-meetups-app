import { Link } from "react-router-dom"
import { useContext } from "react"
import FavoritesContext from "../../store/favorites-context"
import classes from './MainNavigation.module.css'

const MainNavigation = () => {

    const FavoriteCtx = useContext(FavoritesContext);

    return (
        <div>
            <header className={classes.header}>
                <div className={classes.logo}>React Meetups</div>
                <nav>
                    <ul>
                        <li>
                            <Link to='/'>All Meetups</Link>

                        </li>
                        <li>
                            <Link to='favorites'>My Favorites
                                <span className={classes.badge}>({FavoriteCtx.totalFavorites})</span>
                            </Link>

                        </li>
                        <li>

                            <Link to='/new-meetup'>Add a New Meetup</Link>
                        </li>
                    </ul>
                </nav>
            </header>
        </div>
    )
}

export default MainNavigation