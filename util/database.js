import { MongoClient } from 'mongodb'
const url = 'mongodb+srv://ynmkim:dbsal1688@cluster0.rea6lsy.mongodb.net/?retryWrites=true&w=majority&appName=AtlasApp'
const options = { useNewUrlParser: true }
let connectDB

if (process.env.NODE_ENV === 'development') {
  if (!global._mongo) {
    global._mongo = new MongoClient(url, options).connect()
  }
  connectDB = global._mongo
} else {
  connectDB = new MongoClient(url, options).connect()
}
export { connectDB }