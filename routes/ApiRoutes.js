const router = require ('express').Router()

const {readFromFile, readAndAppend} = require ("../helpers/fsUtils");

router.get ("/notes", (req, res) => {
    readFromFile("./db/db.json").then(data => res.json(JSON.parse(data)) )
})

router.post (/"notes", (req, res) => {
    readAndAppend
}
  )