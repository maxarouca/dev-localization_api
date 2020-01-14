import axios from 'axios'
import Dev from '../models/Dev'
import parseStringAsArray from '../utils/ParseStringAsArray'

class DevController {
  async index(req, res) {
    const devs = await Dev.find()

    return res.json({
      devs,
    })
  }

  async store(req, res) {
    const { github_username, techs, latitude, longitude } = req.body

    let dev = await Dev.findOne({ github_username })

    if (!dev) {
      const apiResponse = await axios.get(
        `https://api.github.com/users/${github_username}`
      )

      // eslint-disable-next-line no-undef
      const { name = login, avatar_url, bio } = apiResponse.data

      const techsArray = parseStringAsArray(techs)

      const location = {
        type: 'Point',
        coordinates: [longitude, latitude],
      }

      const user = {
        name,
        github_username,
        avatar_url,
        bio,
        techs: techsArray,
        location,
      }

      dev = await Dev.create(user)
    }

    return res.json({ dev })
  }
}

export default new DevController()
