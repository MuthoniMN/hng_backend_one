const express = require('express')
const app = express()

app.get('/api', (req, res) => {
    console.log(req.query);
  const { slack_name, track } = req.query
  let date = new Date()
  let dateStr = date.toISOString() 
  let days = {
    1: "Monday",
    2: "Tuesday",
    3: "Wednesday",
    4: "Thursday",
    5: "Friday",
    6: "Saturday",
    7: "Sunday"
  }
  let day = date.getDay()
  let obj = {
    "slack_name": req.query.slack_name,
    "current_day": days[day],
    "utc_time": dateStr.substr(0,dateStr.indexOf('.')) + "Z",
    "track": track,
    "github_file_url": "https://github.com/MuthoniMN/hng_backend_one/blob/main/server.js",
    "github_repo_url": "https://github.com/MuthoniMN/hng_backend_one",
    "status_code": 200
  }
  res.json(obj)
})

app.listen(5555, () => {
    console.log("We're Online")
})