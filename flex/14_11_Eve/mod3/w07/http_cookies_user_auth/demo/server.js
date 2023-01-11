const express = require('express');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const languages = require('./languages.json');
const  {v4: uuid} = require('uuid');
const {getUserByEmail} = require('./helper')

const app = express();
const port = 8080;

app.use(morgan('dev'));
app.use(cookieParser());
app.use(express.urlencoded({extended: false}))


app.set('view engine', 'ejs');

const users = {
    hfgas: {
        id: 'hfgas',
        email: 'hfgas@gmail.com',
        password: '123',
    }
}



app.get('/', (req, res) => {
    res.send('Hello');
});


app.get('/home', (req, res) => {
    const userLanguage = req.cookies.language || 'en';
    const templateVars = {
        heading: languages.homeHeadings[userLanguage],
        body: languages.homeBodies[userLanguage],
    }
    res.render('home', templateVars)
})

app.get('/about', (req, res) => {
    const userLanguage = req.cookies.language || 'en';
    const templateVars = {
        heading: languages.aboutHeadings[userLanguage],
        body: languages.aboutBodies[userLanguage],
    }
    res.render('about', templateVars)
})

app.get('/languages/:userLanguage', (req, res) => {
    res.cookie('language', req.params.userLanguage)
    res.redirect('/home')
})

app.get('/login', (req, res) => {
    res.render('login');
})

app.get('/register', (req, res) => {
    res.render('register');
})

app.post('/login', (req, res) => {
    // grab the email and password from the request body
    const email = req.body.email;
    const password = req.body.password;

    //search the users database for the user
    let foundUser;
    foundUser = getUserByEmail(email, users)

    //if no user, return 400 (bad request)
    if (!foundUser) {
        return res.status(400).send(`No user with email ${email} found`);
    }

    // compare user password to request password
    if (foundUser.password !== password) {
        return res.status(401).send('Incorrect password');
    }

    res.cookie('userId', foundUser.id);
    res.redirect('/protected');

})

app.post('/register', (req, res) => {
    // grab the email and password from the request body
    const email = req.body.email;
    const password = req.body.password;

    const user = getUserByEmail(email,users)
    if(user) {
        return res.status(400).send(`User with email ${email} already exists`)
    }

    const userId = uuid().split('-')[0];
    users[userId] = {
        id: userId,
        email,
        password,
    }

    console.log(users)
    res.cookie('userId', userId);
    res.redirect('/protected');
})

app.get('/protected', (req, res) => {
    if (req.cookies.userId) {
        const user = users[req.cookies.userId];
        return res.render('protected', {user});
    }
    res.redirect('/login');
})

app.post('/logout', (req, res) => {
    res.clearCookie('userId');
    res.redirect('/login');
})

app.listen(port, () => {
    console.log(`listening on port ${port}`);
})