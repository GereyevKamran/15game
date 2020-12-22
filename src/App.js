const express = require('express');
const path = require('path');

class App {
    constructor(db) {
        this._db = db;

        this._app = express();
        this._app.use(express.json());
        this._app.use('/', express.static(path.resolve(__dirname, '../public')));

        this._app.get('/getUsers', this.onGetUsers);
        this._app.post('/addNewUser', this.onSaveNewUser);
    }

    onGetUsers = (req, res) => {
        const users = this._db.getUsers();

        res.send(users);
        res.end();
    }

    onSaveNewUser = (req, res) => {
        const { body } = req;

        console.log(body)

        this._db.saveNewUser(body);
        res.end();
    }

    getApp = () => this._app;

    async addUser(newUser){
        return await fetch("http://localhost:2020/addNewUser/",
        {method: 'POST',
        headers: {
            "Content-type":"application/json"
        },
        body: JSON.stringify(newUser)
        })
    }
}

module.exports = App;
