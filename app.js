const express = require('express')
const config = require("./config");
const app = express();
const productsRouter = require("./src");
const authRouter = require('./authentication')

const  logger  =  (req , res  ,  next )=>{
  console.log(`logged -- ${req.url } --  ${req.method} -- ${new Date()}`)
  next()

}
app.use(logger) 
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/auth' , authRouter);
app.use("/api/v1/products", productsRouter);

app.use((req, res , next)=>{
  res.status(400).send("Resources not found !" )
})
const server = app.listen(config.PORT, () => {
  console.log('Listening on port', config.PORT);
});

module.exports = server;
