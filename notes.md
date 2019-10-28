# Node API notes

- create repository on GH
- cloned it
- opened in editor
- add .gitignore ==> 'npx gitignore node'
- add package.json ==> 'npm init -y'
- add server script inside package.json ==> "server": "nodemon index.js"
- install nodemon as development dependency ==> 'npm i -D nodemon'
- add an index.js with console.log
- run the API using 'npm run server'

## Basic Express Server

- install 'express' as a production dependency ==> 'npm i express'
- add express to index.js ==> const express = require('express')
-     ==> const server = express()
-     ==> const port = 8000
-     ==> server.listen(port, () => console.log('listening on port 8000'))
-     ==> server.get('/', (req, res) => { res.send('Welcome to node server') })
