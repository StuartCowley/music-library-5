//why do we need to separate this part from app.js?

const app = require('./src/app.js');

const APP_PORT = process.env.PORT || 4000;
console.log(process.env.PORT);

app.listen(APP_PORT, () => {
    console.log(`App is listening on port ${APP_PORT}`);
});