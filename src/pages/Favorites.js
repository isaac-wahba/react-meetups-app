import { useContext } from "react"
import MeetupList from "../components/meetups/MeetupList"
import FavoritesContext from "../store/favorites-context"

const FavoritesPage = (props) => {
    const FavoriteCtx = useContext(FavoritesContext)

    let content;
    if (FavoriteCtx.totalFavorites === 0) {
        content = <p>You did not add favorites yet..</p>

    }
    else {
        content = <MeetupList meetups={FavoriteCtx.favorites} />
    }


    return (<section>
        <h1>My Favorites</h1>
        {content}
    </section>)
}

export default FavoritesPage