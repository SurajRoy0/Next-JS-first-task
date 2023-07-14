import { MongoClient } from "mongodb";

const handler = async (req, res) => {
    if (req.method === 'GET') {
        const client = await MongoClient.connect('mongodb+srv://myselfsuraj0:ewTehSdRjCRIMZPs@meetupapp.ybvd392.mongodb.net/meetups?retryWrites=true&w=majority');

        const db = client.db();
        const meetupsCollection = db.collection('meetups');
        const result = await meetupsCollection.find().toArray();
        client.close();
        res.status(200).json({ meetups: result });
    } else {
        res.status(405).json({ message: 'Method Not Allowed' });
    }
};

export default handler;
