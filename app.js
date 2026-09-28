let isLogin = true;
let currentUser = "Guest User";
let isJoined = false;

function switchTab(tabId) {
    document.querySelectorAll('.content-section').forEach(sec => sec.style.display = 'none');
    if (tabId === 'home') document.getElementById('home-section').style.display = 'block';
    if (tabId === 'tournaments') document.getElementById('tournaments-section').style.display = 'block';
    if (tabId === 'dashboard') {
        document.getElementById('dashboard-section').style.display = 'block';
        document.getElementById('user-display').innerText = currentUser;
    }
    if (tabId === 'auth') document.getElementById('auth-section').style.display = 'block';
}

function joinTournament(id) {
    if(currentUser === "Guest User") {
        alert("Please login first to join the tournament!");
        switchTab('auth');
        return;
    }
    isJoined = true;
    document.getElementById("locked-" + id).style.display = "block";
    alert("Successfully joined the tournament! Rules and chat unlocked.");
}

function toggleForm() {
    isLogin = !isLogin;
    document.getElementById("form-title").innerText = isLogin ? "Efootball_masterzone - Login" : "Efootball_masterzone - Sign Up";
    document.getElementById("submit-btn").innerText = isLogin ? "Login" : "Sign Up";
    document.getElementById("name-group").style.display = isLogin ? "none" : "block";
}

document.getElementById("authForm").addEventListener("submit", function(e) {
    e.preventDefault();
    currentUser = document.getElementById("email").value.split('@')[0];
    alert("Authentication successful!");
    switchTab('dashboard');
});

function socialAuth(provider) {
    currentUser = provider + "_User";
    alert("Authenticated with " + provider + "!");
    switchTab('dashboard');
}

function handleLogout() {
    currentUser = "Guest User";
    isJoined = false;
    alert("Logged out successfully.");
    switchTab('auth');
}
