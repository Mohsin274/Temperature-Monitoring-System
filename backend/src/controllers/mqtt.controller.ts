import mqtt from 'mqtt'
import { PrismaClient } from '@prisma/client'

// initialize Prisma
const prisma = new PrismaClient()

const MQTT_BROKER = 'mqtt://broker.hivemq.com' //MQTT broker URL
const MQTT_TOPIC = 'aiflux/test_topic' //topic to subscribe to


export function setupMQTTClient() {
  // connection to the MQTT broker
  const client = mqtt.connect(MQTT_BROKER)

  // if connection is successful
  client.on('connect', () => {
    // console.log('Connected to MQTT broker')
    // subscribe to the defined topic
    client.subscribe(MQTT_TOPIC)
  })

  client.on('message', async (topic, message) => {
    // check if the message is from the expected topic
    if (topic === MQTT_TOPIC) {
      const temperature = parseFloat(message.toString())
      // console.log(`Received temperature: ${temperature}`)

      try {
        // save to db
        await prisma.temperature.create({
          data: {
            value: temperature,
          },
        })
        // console.log('Temperature saved to database')
      } catch (error) {
        console.error('Error saving temperature to database:', error)
      }
    }
  })

  return client
}
