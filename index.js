//document.querySelector("h1").style.color = "red";
//$("h1").css("color", "red");

//JavaScript vs JQuery
//1. How to select element 
    document.querySelector("h1");      // In JS
    $("h1");                            // In JQuery

//2. Select multiple elements like 5 buttons
    document.querySelectorAll("button");  //In JS add the word ALL
    $("button");                          //In JQuery no difference if you are selecting one or multiple elements

//3. Manipulating styles
    // (a) Change/Set property
    document.querySelector("h1").style.color="green"; // In JS
    $("h1").css("color","green");                     /* In JQuery add .css("property you want to change", "the value of the property").*/
    $("h1").css("font-size","3rem");                                                  /*Try changing font size*/

    // (b) Get the value of the property
    document.querySelector("h1").style.color;       // In JS. Type this in your console and you will get the last color of the element h1.
    $("h1").css("color");                            /* In JQuery add .css("property you want to check")    .Type it in your console to see it*/


/* 4. Best Practice
 Changing your css styles in JavaScript code is not a good practice. 
Introduce a new class to css, add your required styles and then link it to your JavaScript code
For illustration, add the classes named big-title and margin-50 in CSS and link them in JS

NOTE: We do not touch the HTML code
*/

//Now link the classes big-title and margin-50
    document.querySelector("h1").classList.add("big-title", "margin-50");    //In JS. Also if you want to remove a class or classes just replace the word add with remove. The same applies to JQuery.             
    $("h1").addClass("big-title margin-50");                                 /*In JQuery you separate the names of the multiple classes using a space in between. */


/* 5. Change Text of an element
  (a) Use word TEXT 
*/ document.querySelector("h1").textContent = "Good Bye";                     //In JS
    $("h1").text("Great!");                                                   /* In JQuery. Since JQuery select all elements specified with the name, all get changed. Try element "button" */
    $("button").text("Don't click me");                                       // All 5 buttons are change from "Click me" to "Don't click me"

// (b) Use word HTML                                                         //Unlike TEXT, HTML allows you to add HTML features like italic, bold etc on the content                   
    document.querySelector("button").innerHTML = "<em>Hey!<em>";             /*In JS add .innerHTML only the first button is selected, content is changed to "Hey!" and Italic. */
    $("button").html("<em>Click Click!<em>")                                 /*In JQuery only the word .html is enough. Also all the buttons are selected, content is changed to "Click Click!" and Italic. */

    document.querySelector("h1").textContent = "<em>Good Bye<em>";            /* If you use textContent instead of innerHTML/html the <em> <em> for making the content italic will also appear on the screen. */
    $("button").text("<em>Click Click!<em>")  

/* 6.Manipulating Attributes*/
    // (a) Change/Set property
    document.querySelector("a").setAttribute("href", "https://www.yahoo.com");              // In JS use .setAttribute(" name of attribute you want to set/change", "the value of the attribute")
    $("a").attr("href","https://www.bing.com");                                             /* In JQuery use .attr("name", "value")*/
    

    // (b) Get the value of the property
    document.querySelector("img").getAttribute("src");                                          // In JS. Type this in your console and you will get the attribute of the image src.
    $("img").attr("src");                                                                   /* In JQuery add .attr("attribute you want to check")    .Type it in your console to see it*/


/* 7. Adding Event Listeners */

    // (a) Event Listener for one item
    //In JS
    document.querySelector("h1").addEventListener("click", function(){
        document.querySelector("h1").style.color = "purple";
    });

    //In JQuery
    $("h1").click(function(){
        $("h1").css("color", "blue");
    });

    /* (b)Event Listener for multiple items
    Say you want to add event listener to all 5 buttons. 
    Once any of the buttons is clicked, the h1 color changes to orangered/darkbrown*/ 
    
    //In JS.
   for (var i=0; i<5; i++){
        document.querySelectorAll("button")[i].addEventListener("click",function(){
            document.querySelector("h1").style.color = "orangered";
        });
    }

    //In JQuery
    $("button").click(function(){
        $("h1").css("color", "white");
    });

    /* MORE PRACTICE-1: 
    
    Add Event Listener to the input element (text box) and display to the screen the KEY that was pressed on the keyboard  */ 

    //In JS.
    document.querySelector("input").addEventListener("keydown", function(event){
        console.log(event.key);
    });

    //In JQuery
    $("input").keydown(function(event){
        console.log(event.key);
    });
    //NOTE: If you want to respond to the key pressed when cursor is at any part of the page, replace "input" with "body" or document.

    //In JS
    document.querySelector("body").addEventListener("keydown", function(event){
        console.log(event.key);
    });

    //In JQuery
    $(document).keydown(function(event){
        console.log(event.key);
    });

    /* MORE PRACTICE-2: 
    Change the code such that whenever the key is pressed at any part of the site, it is shown at h1 element*/

    //In JS
    document.querySelector("body").addEventListener("keydown", function(event){
        document.querySelector("h1").innerHTML = event.key;
    });

    //In JQuery
    $(document).keydown(function(event){
        $("h1").html(event.key);
    });

    /* MORE PRACTICE-3: 
    In JQuery instead of using .keydown or .click functions you can use 
    the method ON with two parameters i.e 
    on("EVENT you want to listen to", function(){ 
        do something});  
        
    EVENT can be anything provided in this link "https://developer.mozilla.org/en-US/docs/Web/Events"   
    For illustration "mouseover" and "mouseout" event is used. You can use click, keydown etc*/
    
    //In JS
    document.querySelector("h1").onmouseover = function(){
        document.querySelector("h1").style.color = "red";
        document.querySelector("h1").style.fontSize = "5rem";
    };

    document.querySelector("h1").onmouseout = function(){
        document.querySelector("h1").style.color = "purple";
        document.querySelector("h1").style.fontSize = "3rem";
    };

    //In JQuery
    $("h1").on("mouseover", function(){
        $("h1").css("color", "cyan");
        $("h1").css("font-size", "5rem");
    });

    $("h1").on("mouseout", function(){
        $("h1").css("color", "orange");
        $("h1").css("font-size", "3rem");
    });



/* 8. Adding and removing elements */
/* A: ADD new button to h1 element using JavaScript without touching HTML code

(a) before: adds the new button BEFORE the OPENING TAG of the h1 element                   <button>New</button> <h1> Good Bye </h1>
(b) after: adds the new button AFTER the CLOSING TAG of the h1 element                                          <h1> Good Bye </h1> <button> New </button> 
(c) prepend: adds the new button BEFORE the CONTENT and after the OPENING TAG of the h1 element                 <h1> <button> New </button> Good Bye </h1>
(d) append: adds the new button AFTER the CONTENT and before the CLOSING TAG of the h1 element                  <h1> Good Bye <button> New </button> </h1>  

*/

    //In JS
    function createButton(buttonName, label, buttonMethod){
        buttonName = document.createElement("button");
        var buttonText = document.createTextNode(label);
        buttonName.appendChild(buttonText);

        switch(buttonMethod){
            case ("before"):
                document.querySelector("h1").before(buttonName);
            break;

            case ("after"):
                document.querySelector("h1").after(buttonName);
            break;

            case ("prepend"):
                document.querySelector("h1").prepend(buttonName);
            break;

            case ("append"):
                document.querySelector("h1").append(buttonName);
            break;

            default:
                console.log("Check parameters entered");
            break;
        }
    }

    /*(a)*/ 
    createButton("buttonBefore", "Before-JS Button", "before");

    /*(b)*/ 
    createButton("buttonAfter", "After-JS Button", "after");

    /*(c)*/ 
    createButton("buttonPrepend", "Prepend-JS Button", "prepend");

    /*(d)*/ 
    createButton("buttonAppend", "Append-JS Button", "append");



    /*In JQuery
    The code for creating the four buttons is only 4 lines as shown below.
    */

    /*(a)*/$("h1").before("<button>Before-JQuery Button</button>");
    /*(b)*/$("h1").after("<button>After-JQuery Button</button>");
    /*(c)*/$("h1").prepend("<button>Prepend-JQuery Button</button>");
    /*(d)*/$("h1").append("<button>Append-JQuery Button</button>");


    /* B: Remove the New Buttons added above */

    /* In JS
    This removes all buttons 
    */

/*    NumberOfButtons = document.querySelectorAll("button").length;
    ButtonsList = document.querySelectorAll("button");
    for (var i = 0; i < NumberOfButtons; i++){
        ButtonsList[i].remove();
    }
    
*/    

    /* In JQuery 
    Only a single line of code is sufficient
    */
//    $("button").remove();

    /* The above method removes All Buttons from the page regardless of method used to create them.
    Remember JQuery $ sign selects all elements.
    If you want to remove specific buttons, you can use
    $("button").get(index_value).remove();
    
    You can get index_value from the console, just write $("button");
    */

//     $("button").get(0).remove();    // Removes "Before-JS Button"
//     $("h1 button").remove();        // Removes "prepend" and "append" buttons which are inside the h1 element which may not be seen by the get().remove() method


    /* 9. WEBSITE ANIMATIONS with JQuery

    As an example, set that once you click on any button, the  selected element h1 is animated
    */

    // 1. Hide h1 on a click
/*    $("button").on("click", function(){
        $("h1").hide(); 
    });
*/
    /* To bring it back, just type $("h1").show(); in your console h1 will reappear.*/ 


    // 2. Toggle h1 on a click. Click once it disappears, click again it comes back
/*     $("button").on("click", function(){
        $("h1").toggle(); 
    });
*/


    // 3. FadeOut h1 on a click. Click once it disappears but at a slow pace compared to toggle.
/*    $("button").on("click", function(){
        $("h1").fadeOut(); 
    });
*/
    /* To bring it back, just type $("h1").fadeIn(); in your console h1 will reappear.*/



    // 4. Fade Toggle h1 on a click. Click once it disappears, click again it comes back
/*      $("button").on("click", function(){
        $("h1").fadeToggle(); 
    });
*/

    // 5. SlideUp h1 on a click. Click once it disappears by going UP.
/*    $("button").on("click", function(){
        $("h1").slideUp(); 
    });
*/
    /* To bring it back, just type $("h1").slideDown(); in your console h1 will reappear.*/



    // 6. Slide Toggle h1 on a click. Click once it disappears, click again it comes back
/*    $("button").on("click", function(){
        $("h1").slideToggle(); 
    });
*/


    // 7. Animate h1 on a click using a custom defined new CSS rule
/*    $("button").on("click", function(){
        $("h1").animate({opacity : 0.5}); 
    });
*/
    /*The property that goes inside the animate({property}) should have numerical value 
    such as opacity, margin, font-size, etc not color, font-size, font-style etc
    */



    // 8. Multiple animation rules on h1. Just chain them together and execution will be from left to right.  
    $("button").on("click", function(){
        var i = 0;
        while (i < 10000){
            $("h1").animate({opacity : 0.5}).slideUp().animate({opacity : 1.0}).slideDown(); 
            console.log(i);
            i++;
        }
    });