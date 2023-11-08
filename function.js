function OpenTab(evt, tabName) {
    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}
function OpenDefaultTab(evt) {
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}

function PlayMusic(){
    let play = document.getElementById("play");
    let audio = new Audio("audio.mp3");
    audio.play()
    play.addEventListener("click", PlayMusic())
}

function CreateDynamicForms(evt, amount){
    // Calculate the center position for the pop-up window
    var screenWidth = window.screen.width;
           var screenHeight = window.screen.height;
           var windowWidth = 600; // Adjust as needed
           var windowHeight = 400; // Adjust as needed
           var left = (screenWidth - windowWidth) / 2;
           var top = (screenHeight - windowHeight) / 2;

           // Create a new window
           var popup = window.open('', 'DynamicFormsPopup', 'width=' + windowWidth + ',height=' + windowHeight + ',left=' + left + ',top=' + top);

           // Write the HTML content to the new window
           popup.document.write('<html><head><title>Dynamic Forms</title></head><body>');

           // Create new forms based on the selected amount
           for (var i = 0; i < amount; i++) {
               var formular = document.createElement("div");
               formular.className = "memberFormular";
               formular.innerHTML = `
                   <label>Namn</label><br>
                   <input type="text" name="firstName" placeholder="förnamn"><br><br>
                   <label>Personnummer (12 siffror)</label><br>
                   <input type="text" name="personNummer" placeholder="00000000-0000"><br><br>
               `;
               popup.document.body.appendChild(formular);
           }

           // Close the HTML content in the new window
           popup.document.write('</body></html>');
           popup.document.close();
}
