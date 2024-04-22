// Stores whether user is logged in
class LoggedIn {
    LoggedIn = null
    constructor() {
        if (this.LoggedIn === null) {
            this.LoggedIn = new LoggedIn()
            this.LoggedIn.setLoggedIn(false)
        }
        return this.LoggedIn
    }
    setLoggedIn(value) {
        this.loggedIn = value
    }
    getLoggedIn() {
        return this.loggedIn
    }
}

export default LoggedIn