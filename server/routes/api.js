export default function apiRoutes(app) {
  app.get('/api/test', (req, res) => {
    res.json({
      message: 'api'
    })
  })
}
