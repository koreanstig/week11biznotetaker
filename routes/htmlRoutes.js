const path = require('path');

module.exports = function (app) {
    // html GET request
    app.get('/', (req, res)=> {
        res.sendFile(path.join(__dirname, '../public/index.html'), err => {
            if (err) console.error(err);
        });
    });
    
    app.get('/notes', (req, res) => {
        res.sendFile(path.join(__dirname, '../public/notes.html'), err => {
            if (err) console.error(err);
        });
    });

    // GET css file
    app.get('/assets/css/styles.css', (req, res) =>{
        res.sendFile(path.join(__dirname, "../public/assets/css/styles.css"), err => {
            if (err) console.error(err);
        });
    });

    // GET js file
    app.get("/assets/js/index.js", (req,res)=>{
        res.sendFile(path.join(__dirname, "../public/assets/js/index.js"), err => {
            if (err) console.error(err);
        });
    })
    
    
}