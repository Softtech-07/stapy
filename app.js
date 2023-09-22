const express = require('express');
const app = express();
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose')
const cors = require('cors')
app.use(cors())
mongoose.connect("mongodb+srv://softtech-07:Nil%4011e78@cluster0.f8bt3.mongodb.net/Stapy")

mongoose.connection.once('open',()=>{
  console.log("connected")
})
app.use('/graphql', graphqlHTTP.graphqlHTTP({
  schema,
  graphiql: true 
}));

app.listen(4000, () => {
  console.log('Listening on port 4000');
});
