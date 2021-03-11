let dbJSON = require("../db/db")
const fs = require('fs');

module.exports = function (app) {
    app.get('/api/notes', (req, res) => {
        fs.readFile('db/db.json', 'utf-8', (err, data) => {
            if (err) throw err;
            let json = JSON.parse(data);
            res.send(json);
        })
    })

    app.post('/api/notes', (req, res) => {
        fs.readFile('db/db.json', (err, data) => {
            if (err) throw err;
            let json = JSON.parse(data);
            let noteEntry = {
                title: req.body.title,
                text: req.body.text,
                id: req.body.noteId
            };
            json.push(noteEntry);
            fs.writeFile('db/db.json', JSON.stringify(json, null, 3), (err) => {
                if (err) throw err;
                res.send('202');
            })
        })
    })

    // app.delete('/api/notes/:note', (req, res) => {
    //     console.log("Deleted!");
    //     fs.readFile('db/db.json', (err, data) => {
    //         if (err) throw err;
    //         let json = JSON.parse(data);
    //         let newDbJSON = [];
    //         const thisNoteID = request.params.note;
    //         const noteToDelete = dbJSON.map(note => {
    //             if (note.id !== thisNoteID) {
    //                 newDbJSON.push(note);
    //             }
    //         });

    //         dbJSON = newDbJSON;
    //         res.end();
    //     })
    // });
};