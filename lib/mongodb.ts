import { MongoClient } from 'mongodb';
const uri = process.env.MONGODB_URI;
if (!uri) throw new Error('MONGODB_URI ontbreekt');
const globalForMongo = globalThis as unknown as { mongoClientPromise?: Promise<MongoClient> };
export const clientPromise = globalForMongo.mongoClientPromise ?? new MongoClient(uri).connect();
if (process.env.NODE_ENV !== 'production') globalForMongo.mongoClientPromise = clientPromise;
