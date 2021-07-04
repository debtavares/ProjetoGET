const series = require('../models/series.json')

const home = (req, res) => {
    res.status(200).send(
        { 
            "messagem": "oii"
        }
    )
}

const getAll = (req, res) => {
    res.status(200).send(series)
}

const getTitle = (req, res) => {

    const requestTitle = req.params.title.toLowerCase()

    const filterTitle = series.find(series => series.title.toLowerCase() == requestTitle)

    res.status(200).send(filterTitle)


}

const getId = (req, res) => {

    const requestId = req.params.id

    const filterId = series.find(series => series.id == requestId)

    res.status(200).send(filterId)
}

module.exports = { home, getAll, getTitle, getId }