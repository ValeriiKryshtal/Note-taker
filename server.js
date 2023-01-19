const express = require('express');
const path = require('path');
const { clog } = require('./middleware/clog');
const api = require('./routes/index.js');
const PORT = process.env.PORT || 3001;
const app = express();
// Import custom middleware, "cLog"
app.use(clog);

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', api);
app.use(express.static('public'));

// GET Route for homepage
app.get('/', (req, res) =>
     res.sendFile(path.join(__dirname, '/public/index.html'))
);
// GET Route for notes page
app.get('/notes', (req, res) =>
     res.sendFile(path.join(__dirname, '/public/notes.html'))
);
// app.get("/api/notes/:id", (req,res) => {
//      // display json for the notes array indices of the provided id
//      res.json(notes[req.params.id]);
// });
// app.delete("/api/notes/:id", (req, res) => {
//      notes.splice(req.params.id, 1);
//      updateDb();
//      console.log("Deleted note with id "+req.params.id);
// });
// function updateDb() {
//      fs.writeFile("db/db.json",JSON.stringify(notes,'\t'),err => {
//           if (err) throw err;
//           return true;
//      });
// }
// Wildcard route to direct users to a 404 page
app.get('*', (req, res) =>
     res.sendFile(path.join(__dirname, 'public/pages/404.html'))
);

app.listen(PORT, () =>
     console.log(`App listening at http://localhost:${PORT} 🚀`)
);