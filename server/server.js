const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const mongoose = require('mongoose')
const db = require('./config/keys').mongoURI
const itemRouter = require('./routers/items')
const path = require('path')
app.use(bodyParser.json())
mongoose.connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => {
         console.log('MongoDB connected...')
     })
      .catch(() => {
            console.log('Connection failed...')
    })


app.use('/api/items', itemRouter)
//server static assets in production
if(process.env.NODE_ENV === 'production'){
    //Set static folder
    app.use(express.static('../client/build'))
    app.get('*', (req, res) => {
        res.sendfile(path.resolve(__dirname, '../client', 'build', index.html)) 
    })
}
const port = process.env.PORT||'4000'
app.listen(port, () => {
    console.log(`server started on port ${port}`)
})
