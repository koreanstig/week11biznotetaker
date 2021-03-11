let note = require("../db/db.json");
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');

module.exports = (app) => {

    app.get("/api/notes", (req,res)=>{
        res.json(note);
    });

    app.post("/api/notes", (req,res)=>{
        const data = req.body;
        data.id = uuidv4(data.id);
        note.push(data);
        fs.writeFile("db/db.json", JSON.stringify(note), (err)=>{
            if (err) throw err;
        });
        res.json(true);
    });

    app.delete("/api/notes/:id",(req,res)=>{
        const noteID = req.params.id;
        note = note.filter((notes, index)=>{
            return noteID !== notes.id;
        });
        fs.writeFile("db/db.json", JSON.stringify(note), (err)=>{
            if (err) throw err;
        });
        res.json(true);
    });
};