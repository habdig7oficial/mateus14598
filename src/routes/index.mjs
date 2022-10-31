export default function(app) {
    app.get("/", function (req,res) {
        res.send("Hello Meu projeto que não está em Type Script")
    })
}