const app = require('./app');
const port = process.env.SERVER_PORT;
const connectToDatabse = require('./config/database');
const sendMail = require('./services/mailservice');

connectToDatabse();
// sendMail();

app.listen(port, () => {
    console.log(`server is running on port ${port}`);
});