var express = require('express');
var app = express();

var today = function() {
    var date = new Date();
    return date.toLocaleString('en-US');
};

var formatDate = function(date) {
    var template = `<h2 style="color:red">${date.toLocaleString('en-US')}</h2>`;
    return template;
};

var hbs = require('express-handlebars');
app.engine('hbs', hbs({
    extname: 'hbs',
    defaultLayout: 'layout',
    layoutsDir: __dirname + '/views/layouts/',
    partialsDir: __dirname + '/views/partials/',
    helpers: {
        today: today,
        formatDate: formatDate
    }
}));
app.set('view engine', 'hbs');

app.get('/', function(req, res) {
    res.locals.date = '07/30/2018';
    res.render('index');
});

/*
app.get('/', function(req, res) {
    res.locals.name = 'Dr. Cat';
    res.locals.location = 'WD';
    res.render('index');
});

app.get('/hello', function(req, res) {
    res.render('index', { name: 'Mr. Bean', location: 'England' });
});

app.get('/test', function(req, res) {
    var context = {
        name: '<b>Mary</b>',
        location: '<span style="color:blue">Chicago</span>',
        user: {
            isLogin: true,
            address: {
                city: 'HCMC',
                street: '227 Nguyen Van Cu'
            }
        },
        languages: ['Vietnamese', 'English', 'Japanese'],
        links: [{
                title: 'Home',
                url: '/'
            },
            {
                title: 'Products',
                url: '/products'
            },
        ]
    };
    res.render('index', context);
});
*/

app.listen(5000, function() {
    console.log('Server is listening on port 5000...');
});