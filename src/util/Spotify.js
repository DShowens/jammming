
let accessToken;
const clientID = "f125d921b84b42deb0294e5ce62d4625";
const redirectUrl = "http://localhost:3000";

const Spotify = {

    getAccessToken() {
        if (accessToken) {
            return accessToken;
        } else {
            const tokenInURL = window.location.href.match(/access_token=([^&]*)/);
            const expiryTime = window.location.href.match(/expires_in=([^&]*)/);
            if (tokenInURL && espiryTime) 
                accessToken = tokenInURL;
                const expiresIn = Number(espiryTime[1]);
                window.setTimeout(() => (accessToken = ""), expiresIn * 1000);
                window.history.pushState("Access token", null, "/");
                return accessToken;           
        }
        const redirect = `https://accounts.spotify.com/authorize?client_id=${clientID}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectUrl}`;
        window.location = redirect;
    }
};


export { Spotify };

// SECTION 11 (Item #79)

