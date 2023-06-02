var firebaseConfig = {
      apiKey: "AIzaSyCK9djE4JfDrp-LYOZFpYzOQQ7QA1rqRu8",
      authDomain: "kwitter-541cb.firebaseapp.com",
      databaseURL: "https://kwitter-541cb-default-rtdb.firebaseio.com",
      projectId: "kwitter-541cb",
      storageBucket: "kwitter-541cb.appspot.com",
      messagingSenderId: "1070222667055",
      appId: "1:1070222667055:web:8d79dee1e3eae12fc905da"
    };
    
    // Initialize Firebase
     firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE
user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="welcome "+user_name+"!";
function addRoom(){
      firebase.database().ref("/").child(Room_name).update({
            purpose:"addingroomname"
      });
      localStorage.setItem("room_name",Room_name);
      window.location="kwitter_page.html";



}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("room name-"+ Room_names);
row="<div class='room_name' id=" +Room_names+"onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
document.getElementById("output").innerHTML+=row;
      //End code
      });});}
getData();
function redirectToRoomName(name){
console.log(name);
localStorage.setItem("roomname",name);
window.location="kwitter_page.html";

}
function logout()
{
      localStorage.removeItem("user_name")
      localStorage.removeItem("room_name")
      window.location = "kwitter.html";
}
