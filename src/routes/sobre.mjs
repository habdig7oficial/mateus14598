export default function (app) {
    app.get("/sobre", function (req,res) {
        res.send("sobre")
    })
}