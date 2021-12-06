// SIMRITA JS starts here
function swapPage(a,e) {
    a.animate({
        opacity:0
    },500,  
              
    function(){
        $("main").animate ({
        scrollTop:0
        },500,
        
    function(){
        a.hide().removeClass("activePage"),
        e.show().addClass("activePage").animate({
            opacity:1
            },500
        )}
      )}
    )}

function showModal(a) {
    $("#portfolio-modals").css("z-index","3"),
    $("#"+a).show().animate ({
        opacity:1
    }
)}

function hideModal(a) {
    $("#"+a).animate({
        opacity:0
    },
    function(){
        $("#"+a).hide(),
        $("#portfolio-modals").css("z-index","-9999")
    }
)}

$(document).ready(function(){
    $(".page:not(.activePage)").hide().css({
        opacity:0
    }),
    $('a[href^="#page-"]').click(function(a){
        a.preventDefault(), $('a[href^="#page"]').removeClass("active"),
            $(a.target).addClass("active"),swapPage(
            $(".page.activePage"),
            $($(a.target).attr("href")))
}),
// simrita ends here
        
// TYRA JS starts here
        
        $("#portfolio-modals .modal .close").click(function(a){
        hideModal($(a.target).parent().attr("id"))
    })
   
}
);

// tyra js ends here


// NATHALIE JS starts here
var y = 100
function comm_button1(event) {
  var x = event.buttons;
  document.getElementById("total").innerHTML = y+=10;
  document.getElementById("comm_button1").disabled = false;
}

function comm_button2(event) {
  var x = event.buttons;
  document.getElementById("total").innerHTML = y+=35;
  document.getElementById("comm_button2").disabled = true;
}

function comm_button3(event) {
  var x = event.buttons;
  document.getElementById("total").innerHTML = y+=45;
  document.getElementById("comm_button3").disabled = false;
}

function comm_button4(event) {
  var x = event.buttons;
  document.getElementById("total").innerHTML = y+=20;
  document.getElementById("comm_button4").disabled = true;
  document.getElementById("comm_button5").disabled = true;
}

function comm_button5(event) {
  var x = event.buttons;
  document.getElementById("total").innerHTML = y+=65;
  document.getElementById("comm_button4").disabled = true;
  document.getElementById("comm_button5").disabled = true;
}

var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    } 
  });
}  

function ValidateContactEmail(inputText)
{
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
if(inputText.value.match(mailformat))
{
alert("Message submitted!");
document.contactform.contactemailinput.focus();
return true;
}
else
{
alert("You have entered an invalid email address!");
document.contactform.contactemailinput.focus();
return false;
}
}

function ValidateEmail(inputText)
{
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
if(inputText.value.match(mailformat))
{
alert("Commission request has been sent!");
document.commissionform.emailinput.focus();
return true;
}
else
{
alert("You have entered an invalid email address!");
document.commissionform.emailinput.focus();
return false;
}
}

// nathalie ends here


// ZAINAB JS starts here
var success = document.getElementById("sub")
        success.addEventListener("click",showAlert);

		    function showAlert() {
		    alert ("Email sent successfully!");
		  }

        var item1 = document.getElementById("p1");
        var item2 = document.getElementById("p2");
        var item3 = document.getElementById("p3");
        var item4 = document.getElementById("p4");

        item1.addEventListener("mouseover",switchText);
        item1.addEventListener("mouseout",switchText2);


        item2.addEventListener("mouseover",switchText);
        item2.addEventListener("mouseout",switchText2);

        item3.addEventListener("mouseover",switchText);
        item3.addEventListener("mouseout",switchText2);

        item4.addEventListener("mouseover",switchText);
        item4.addEventListener("mouseout",switchText2);


        function switchText(){
            if(this.id=="p1"){
                this.textContent="Portrait: Artistic representation of a person in oil painting, where the face expressions are predominant.";}

            else if (this.id=="p2"){
                this.textContent="Scenery: A Landscape painting which consists of natural scenery such as mountains, rivers, and forests.";}

			else if (this.id=="p3"){
                this.textContent="Still Life: A still life is a work of art depicting mostly inanimate subject matter, typically commonplace item.";}

            else{
                this.textContent="Calligraphy: the art of beautiful handwriting.";}
        }


        function switchText2(){
            if(this.id=="p1"){
                this.textContent="PORTRAIT";}

            else if (this.id=="p2"){
                this.textContent="SCENERY";}

            else if (this.id=="p3"){
                this.textContent="STILL LIFE";}

            else{
                this.textContent="CALLIGRAPHY";}
        }

       
       		var l1=document.querySelector("#ans1");
			l1.addEventListener("click",changeColor);
			

			var l2=document.querySelector("#ans2");
			l2.addEventListener("click",changeColor);
			

			var l3=document.querySelector("#ans3");
			l3.addEventListener("click",changeColor);
			

			var ansbox=document.querySelector("#ansbox");



			function changeColor(){
				l1.style.backgroundColor="white";
				l2.style.backgroundColor="white";
				l3.style.backgroundColor="white";



				if(this.id=="ans2"){
					this.style.backgroundColor="pink";
					ansbox.textContent=" The cost is 400 CAD";
				}

				else{
					this.style.backgroundColor="pink"
					ansbox.textContent=" The cost is 350 CAD";
				}
			}
		
// zainab ends here