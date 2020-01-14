// const express = require("express");
// const webpush = require("web-push");
// const bodyparser = require('body-parser');
// const path = require('path');

// const app = express();

// app.use(bodyParser.json());

// const publicVapidKey = 'BCa0uv51JVmrNIbsBQdii7P9lCQjr5Rh6jQESkClQfVO34tmj22oQy2yvCjnlKzAru1TOer7xLcAsg8NMsGvi5Q';

// const privateVapidKey = 'X5nMI4RsV0uvjGD_qDHqFxQ8NWBscjWRG5QMf8qzex4';

// webpush.setVapidDetails('mailto:test@test.com', publicVapidKey, privateVapidKey);

// //Subscribe route
// app.post('/subscribe', (req, res) => {
//     //Get pushSubscription object
//     const subscription = req.body;

//     //Send 201 - resource created
//     res.status(201).json({});

//     // Create payload
//     const payload = JSON.stringify({title: 'Push Test'});

//     // Pass object into sendNotification
//     webpush.sendNotification(subscription, payload).catch(err => console.error(err));

// });

