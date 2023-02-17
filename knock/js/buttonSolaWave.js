const botonOpciones16 = document.getElementById("brand16");
botonOpciones16.addEventListener("click", popupOptions);

function popupOptions(){
     // div element
    var popup = document.createElement("div");
    popup.classList.add("popup");
    // button element 
    var btn1 = document.createElement("button");
    btn1.innerText = "FAQs";
    btn1.addEventListener("click", function(){
        //action
        window.open("https://solawave.co/pages/faq", "_blank", "noopener");
    });
    var btn2 = document.createElement("button");
    btn2.innerText = "Tutorial Video";
    btn2.addEventListener("click", function(){
        //action
        window.open("https://www.youtube.com/watch?v=AdM6Dau60tc", "_blank", "noopener");
    });
    var btn3 = document.createElement("button");
    btn3.innerText = "Empty";
    btn3.addEventListener("click", function(){
        
    });
    
    // Append button to div
    popup.appendChild(btn1);
    popup.appendChild(btn2);
    popup.appendChild(btn3);
 

    // Append div to body
    document.body.appendChild(popup);

    //close button
  var closeButton = document.createElement("buttonClose");
  closeButton.innerText = "X";
  closeButton.addEventListener("click", function(){
    document.body.removeChild(popup);
    document.body.classList.remove("blurred");
  });
  popup.appendChild(closeButton);

  //append the popup div to the body
  document.body.appendChild(popup);
  
  // Add blur to parent container
  document.querySelector(".about").classList.add("blur");

  document.querySelector("buttonClose").addEventListener("click", function(){
    document.querySelector(".about").classList.remove("blur");
});

  
}

