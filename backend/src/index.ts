import express from 'express'
import cors from 'cors'
import { setupMQTTClient } from './controllers/mqtt.controller'
import temperatureRoutes from './routes/temperature-route'


// initialize Express
const app = express()
const port = process.env.PORT ?? 5000

// enable CORS
app.use(cors({
  origin: process.env.BASE_URL ?? 'http://localhost:3000',
}))

// setup MQTT client to subscribe to temperature data
setupMQTTClient()

// middleware to parse JSON request bodies
app.use(express.json())

// temperature route
app.use('/api/v1/temperatures', temperatureRoutes)

// start server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})