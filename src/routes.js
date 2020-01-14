import { Router } from 'express'
import DevController from './controllers/DevController'
import SearchController from './controllers/SearchController'

const routes = new Router()

routes.get('/', (req, res) => {
  return res.json({ message: 'Backend Semana OmniStack 10' })
})

routes.get('/devs', DevController.index)
routes.post('/dev', DevController.store)

routes.get('/search', SearchController.index)

export default routes
