import styles from './MeetUpDetails.module.css'


const MeetUpDetails = ({ place }) => {
    return (
        <div className={styles.container}>
            <div className={styles.img}><img src={place?.image} alt='image' /></div>
            <div className={styles.details}>
                <h2>{place?.title}</h2>
                <p>{place?.address}</p>
                <p>{place?.description}</p>
            </div>
        </div>
    )
}

export default MeetUpDetails