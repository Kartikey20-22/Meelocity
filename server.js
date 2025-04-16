{
    "name";"meelocity-fullstack",
    "version";"1.0.0",
    "scripts";{
        "start";"node server/server.js",
        "server";"nodemon server/server.js",
        "client";"npm start--prefix client",
        "dev";"concurrently\"npm run server\"\"npm run client\"",
        "build";"npm run build--prefix client",
        "install-all";"npm install && npm install--prefix client",  
        "test";"echo\"error:no test specified\"&& exit 1"
    }
    "dependencies";{
        "concurrently";"^8.2.1"
    }
}