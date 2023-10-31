const { MongoClient } = require('mongodb');

// Connection URL
const url = 'mongodb://localhost:27017'; // Replace with your MongoDB server URL

// Database Name
const dbName = 'mydatabase'; // Replace with your database name

// Create a new MongoClient
const client = new MongoClient(url);

// Use async/await to connect to the database
async function connectToDatabase() {
  try {
    // Connect to the MongoDB server
    await client.connect();

    // Select the database
    const db = client.db(dbName);

    console.log('Connected to the database');

    // You can now perform operations on the database

    // For example, insert a document into a collection
    const collection = db.collection('mycollection');
    const document = { name: 'John', age: 30 };
    const result = await collection.insertOne(document);
    console.log(`Inserted document with _id: ${result.insertedId}`);
  } catch (err) {
    console.error('Error connecting to the database:', err);
  } finally {
    // Close the connection when you're done
    await client.close();
  }
}

// Call the connectToDatabase function
connectToDatabase();
