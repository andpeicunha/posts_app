import connectMongo from "../../pages/lib/connectMongo"

export default function handler(req, res) {
    connectMongo()
    res.status(200).json({ name: 'John Doe' })
}