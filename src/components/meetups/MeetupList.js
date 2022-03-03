import MeetupItem from './MeetupItem'
import classes from './MeetupList.module.css'


const MeetupList = (props) => {
    return (
        <div className={classes.list}>
            {props.meetups.map(meetup => {
                return <MeetupItem key={meetup.id}
                    id={meetup.id}
                    title={meetup.title}
                    address={meetup.address}
                    image={meetup.image} descripton={meetup.descripton}
                />
            })}
        </div>
    )

}

export default MeetupList