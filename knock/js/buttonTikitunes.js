const botonOpciones6 = document.getElementById("brand6");
botonOpciones6.addEventListener("click", popupOptions);

function popupOptions(){
     // Create the div element
    var popup = document.createElement("div");
    popup.classList.add("popup");
    // Create the button element 
    var btn1 = document.createElement("button");
    btn1.innerText = "FAQs";
    btn1.addEventListener("click", function(){
        //add here the action that you want
        window.open("https://www.qvc.com/footers/el/pdf/E235881_FAQS_Update.pdf", "_blank", "noopener");
    });
    var btn2 = document.createElement("button");
    btn2.innerText = "TikiTunes";
    btn2.addEventListener("click", function(){
        //add here the action that you want
        window.open("https://www.youtube.com/watch?v=vgjKqrWAoIM", "_blank", "noopener");
    });
    var btn3 = document.createElement("button");
    btn3.innerText = "TikiTunes PRO 1 -video";
    btn3.addEventListener("click", function(){
        //add here the action that you want
        window.open("https://www.youtube.com/watch?v=qvr_zTMSB0Y", "_blank", "noopener");
    });
    var btn4 = document.createElement("button");
    btn4.innerText = "TikiTunes PRO 2 -video";
    btn4.addEventListener("click", function(){
        //add here the action that you want
        window.open("https://www.youtube.com/watch?v=t-8UtiRa1aE", "_blank", "noopener");
    });
    // Append the button to the div
    popup.appendChild(btn1);
    popup.appendChild(btn2);
    popup.appendChild(btn3);
    popup.appendChild(btn4);

    // Append the div to the body
    document.body.appendChild(popup);

    //create the close button
  var closeButton = document.createElement("buttonClose");
  closeButton.innerText = "X";
  closeButton.addEventListener("click", function(){
    document.body.removeChild(popup);
    document.body.classList.remove("blurred");
  });
  popup.appendChild(closeButton);

  //append the popup div to the body and add a class to the body element
  document.body.appendChild(popup);
  
  // Add the "blur" class to the parent container
  document.querySelector(".about").classList.add("blur");

  document.querySelector("buttonClose").addEventListener("click", function(){
    document.querySelector(".about").classList.remove("blur");
});

  
}

