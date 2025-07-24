import mongoose from 'mongoose'

export const connectDB = async () => {
    mongoose.connection.on('connected', () => (
        console.log('MongoDB is connected.', mongoose.connection.name)

    ))
    await mongoose.connect(`${process.env.MONGODB_URI}/bg-removal`)
}

