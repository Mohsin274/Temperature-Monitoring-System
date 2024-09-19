import { Router } from 'express'
import { getTemperatures } from '../services/temperature-service'

const router = Router()

// endpoint to fetch temperatures from the last minute
router.get('/', async (req, res) => {
  try {
    const temperatures = await getTemperatures()
    res.json(temperatures)
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while fetching temperatures' })
  }
})

export default router
