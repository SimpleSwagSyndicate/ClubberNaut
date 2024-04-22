// Stores whether user is logged in
class LoggedIn {
    LoggedIn = null
    constructor(user) {
        if (this.LoggedIn === null) {
            this.user = user
            this.LoggedIn = new LoggedIn()
            this.LoggedIn.setLoggedIn(false)
        }
        return this.LoggedIn
    }
    getUsername() {
        return this.user
    }
    setUsername(value) {
        this.user = user
    }
    getLoggedIn() {
        return this.loggedIn
    }
    setLoggedIn(value) {
        this.loggedIn = value
    }
}

export default LoggedIn