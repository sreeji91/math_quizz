function addUser() {
    var player1NameVar = document.getElementById("player1Name").value;
    var player2NameVar = document.getElementById("player2Name").value;

    localStorage.setItem("Player #1", player1NameVar);
    localStorage.setItem("Player #2", player2NameVar);
    window.location = "game_page.html";
}