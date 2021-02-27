require('dotenv').config()

let APP_KEY = "c308f983e11189791daf765f4d622808bc7765772ecd40550543d191341c3788710d24c1e735183f27a393a74b61df48705a6a0837d9fb7adb2f2643a9797a7d"
let APP_URL = "https://chat-backend-dat.herokuapp.com"
let APP_PORT = 8000

module.exports = {
    appKey: APP_KEY,
    appUrl: APP_URL,
    port: APP_PORT || process.env.PORT

}