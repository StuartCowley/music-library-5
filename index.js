//why do we need to separate this part from app.js?

const app = require('./src/app.js');

const PORT = process.env.APP_PORT || 4000;

app.listen(PORT, () => {
    console.log(`App is listening on http://localhost: ${PORT}`);
});