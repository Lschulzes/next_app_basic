import { MongoClient } from "mongodb";

export default async function handler(req, res) {
  if (req.method !== "POST") return;
  const data = req.body;

  const client = await MongoClient.connect(
    "mongodb+srv://hijuraldo:justatest123@nextbasic.fv9wq.mongodb.net/meetups?retryWrites=true&w=majority"
  );
  const db = client.db();

  const meetupsCollection = db.collection("meetups");

  const result = await meetupsCollection.insertOne(data);

  console.log(result);

  client.close();

  res.status(201).json({ message: "Meetup Inserted" });
}
