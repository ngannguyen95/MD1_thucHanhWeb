class  User{
    username;
    email;
    password;

    constructor(username, email, password) {
        this.username = username;
        this.email = email;
        this.password = password;
    }

    getUsername() {
        return this.username;
    }

    setUsername(username) {
        this.username = username;
    }

    getEmail() {
        return this.email;
    }

    setEmail(email) {
        this.email = email;
    }

    getPassword() {
        return this.password;
    }

    setPassword(password) {
        this.password = password;
    }
}