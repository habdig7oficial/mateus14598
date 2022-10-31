/* Importar as configurações do servidor */

import { app, port } from "./src/server.mjs";

app.listen(port, function() {
    console.log(`Servidor Ouvindo em http://localhost:${port}`)
})

