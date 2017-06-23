
export default function appRoutes(app) {
  app.get('/', (req, res) => {
    res.send("home")
  })
}
