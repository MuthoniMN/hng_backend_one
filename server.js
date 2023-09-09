const express = require('express')
const app = express()

app.get('/api', (req, res) => {
    console.log(req.query);
    const { slack_name, track } = req.query
    let date=  new Date()
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
        "slack name": req.query.slack_name,
        "current day": days[day],
        "utc time": date.toUTCString(),
        "track": track,
        "status_code": 200
    }
    res.json(obj)
})

app.listen(5555, () => {
    console.log("We're Online")
})