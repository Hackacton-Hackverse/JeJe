const SERVER_URL = "http://localhost:8080"
const APPLICATION_NAME = "JeJe-App"

const END_POINTS = {
    log_out: SERVER_URL + "logout",
    get_token: SERVER_URL + "getToken",
    update_token: SERVER_URL + "updateToken",
    get_credentials: SERVER_URL + "get_credentials",//retourne un json {userName:"valeur",userMail:"valeur"}
    change_name: SERVER_URL + "changeName",
    change_mail: SERVER_URL + "changeMail",
    change_password: SERVER_URL + "changePassword",
    delete_sessions: SERVER_URL + "deleteSessions",
    delete_account: SERVER_URL + "deleteAccount",
}

export { SERVER_URL, END_POINTS, APPLICATION_NAME }