import { useHistory } from "react-router-dom"
import NewMeetupForm from "../components/meetups/NewMeetupForm"
//FIREBASE :: https://react-refresher-d55db-default-rtdb.firebaseio.com/
const NewMeetups = () => {
    const history = useHistory();
    const addMeetupHandler = (meetupData) => {
        fetch('https://react-refresher-d55db-default-rtdb.firebaseio.com/meetups.json', {
            method: 'POST',
            body: JSON.stringify(meetupData),
            header: {
                'Content-Type': 'application/json'
            }
        }).then(() => {
            history.replace('/');
        })


    }
    return (<div>
        <h1>Add New Meetup</h1>
        <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </div>)
}

export default NewMeetups

