import MeetUpDetails from "@/components/meetups/MeetUpDetails";
import { MongoClient, ObjectId } from "mongodb";

const MeetUpPlace = (props) => {
  return <MeetUpDetails place={props.place} />;
};

export async function getStaticPaths() {
  const client = await MongoClient.connect(process.env.MONGODB_URL);

  const db = client.db();
  const meetupsCollection = db.collection("meetups");
  const result = await meetupsCollection.find({}, { _id: 1 }).toArray();

  const paths = result.map((meetup) => ({
    params: { meetUpId: meetup._id.toString() },
  }));
  client.close();
  return {
    fallback: false,
    paths,
  };
}

export async function getStaticProps(context) {
  const meetUpId = await context.params.meetUpId;
  console.log(meetUpId);

  const client = await MongoClient.connect(process.env.MONGODB_URL);

  const db = client.db();
  const meetupsCollection = db.collection("meetups");
  const selectedMeetup = await meetupsCollection.findOne({
    _id: new ObjectId(meetUpId),
  });
  client.close();
  return {
    props: {
      place: {
        id: selectedMeetup._id.toString(),
        title: selectedMeetup.title,
        image: selectedMeetup.image,
        address: selectedMeetup.address,
        description: selectedMeetup.description,
      },
    },
  };
}

export default MeetUpPlace;
