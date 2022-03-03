import Card from '../ui/Card'
import classes from './MeetupItem.module.css'
import { useContext } from 'react'
import FavoritesContext from '../../store/favorites-context';

const MeetupItem = (props) => {

    const favoriteCtx = useContext(FavoritesContext)

    const itemIsFavorite = favoriteCtx.itemIsFavorite(props.id);

    const toggleFavoriteStatusHandler = () => {
        if (itemIsFavorite) {

            favoriteCtx.removeFavorite(props.id)
        }

        else {
            favoriteCtx.addFavorite({
                id: props.id,
                title: props.title,
                image: props.image,
                description: props.description,
                address: props.address
            })

        }
    }

    return (<div>
        <li className={classes.item}>
            <Card>
                <div className={classes.image} >
                    <img src={props.image} alt={props.title} />
                </div>
                <div className={classes.content}>
                    <h3>{props.title}</h3>
                    <address>{props.address}</address>
                    <p>{props.description}</p>
                </div>
                <div className={classes.actions}>
                    <button onClick={toggleFavoriteStatusHandler}>{itemIsFavorite ? 'Remove From Favorites' : 'To Favorites'}</button>
                </div>
            </Card>
        </li>
    </div>)
}

export default MeetupItem