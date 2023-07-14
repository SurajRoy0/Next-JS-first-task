import { MongoClient } from "mongodb";

const handler = async (req, res) => {
    if (req.method === 'POST') {
        const data = req.body;

        const client = await MongoClient.connect(process.env.MONGODB_URL)

        const db = client.db();
        const meetupsCollections = db.collection('meetups');
        const result = await meetupsCollections.insertOne(data);
        console.log(result)
        client.close();
        res.status(201).json({ message: 'New Meetup Inserted!' });
    }
}

export default handler;