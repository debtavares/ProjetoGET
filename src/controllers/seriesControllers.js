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

    const requestTitle = req.query.title.toLowerCase()

    const filterTitle = series.find(series => series.title.toLowerCase().includes(requestedTitle))

        if (requestTitle === "" || filterTitle === undefined) {
            res.status(404).send({ "message" : "insira um título válido"})
        } else {
            res.status(200).send(filterTitle)
        }

}

module.exports = { home, getAll, getTitle }