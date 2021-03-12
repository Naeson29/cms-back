class AuthenticationService {
    constructor() { }

    static logout() {
        localStorage.clear();
    }
}

export default AuthenticationService;
