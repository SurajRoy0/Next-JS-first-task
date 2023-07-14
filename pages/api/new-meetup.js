import { MongoClient } from "mongodb";

const handler = async (req, res) => {
    if (req.method === 'POST') {
        const data = req.body;

        const client = await MongoClient.connect('mongodb+srv://myselfsuraj0:ewTehSdRjCRIMZPs@meetupapp.ybvd392.mongodb.net/meetups?retryWrites=true&w=majority')

        const db = client.db();
        const meetupsCollections = db.collection('meetups');
        const result = await meetupsCollections.insertOne(data);
        console.log(result)
        client.close();
        res.status(201).json({ message: 'New Meetup Inserted!' });
    }
}

export default handler;