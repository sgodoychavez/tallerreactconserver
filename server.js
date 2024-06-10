import Express from "express"
import Path from "path"

const app = Express()
app.use(Express.static("frontend/build"))
const dir_root = Path.resolve()
app.listen('8000', function(){
    console.log("Servidor iniciado")
})

app.get('/', function(req,res){
  res.sendFile(dir_root + "/frontend/build/index.html")
})