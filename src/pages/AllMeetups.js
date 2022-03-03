import { useState, useEffect } from "react";
import MeetupList from "../components/meetups/MeetupList";

// const DUMMY_DATA = [
//     {
//         id: 'm1',
//         title: 'This is a first meetup',
//         image:
//             'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg',
//         address: 'Meetupstreet 5, 12345 Meetup City',
//         description:
//             'This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!',
//     },
//     {
//         id: 'm2',
//         title: 'This is a second meetup',
//         image:
//             'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg',
//         address: 'Meetupstreet 5, 12345 Meetup City',
//         description:
//             'This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!',
//     },
// ];

const AllMeetups = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [loadedMeetups, setLoadedMeetups] = useState([]);
    useEffect(() => {
        setIsLoading(true);
        fetch('https://react-refresher-d55db-default-rtdb.firebaseio.com/meetups.json')
            .then(response => {
                return response.json();
            })
            .then(data => {
                const meetups = [];
                for (const key in data) {
                    const meetup = {
                        id: key,
                        ...data[key]
                    };
                    meetups.push(meetup)

                }
                setIsLoading(false);
                setLoadedMeetups(meetups);
            })
    }, [])//[] makes it run once when the component is loaded.
    //use effect is used for side effects


    return isLoading ? <section>
        <p>Loading ...</p>
    </section> :
        <section>
            <h1>All Meetups</h1>
            <section>
                <MeetupList meetups={loadedMeetups} />
            </section>
        </section >
}


export default AllMeetups