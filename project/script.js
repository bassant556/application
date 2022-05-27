function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}




// function showSlides() {
//   let i;
//   let slides = document.getElementsByClassName("mySlides");
//   let dots = document.getElementsByClassName("dot");
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";  
//   }
//   slideIndex++;
//   if (slideIndex > slides.length) {slideIndex = 1}    
//   for (i = 0; i < dots.length; i++) {
//     dots[i].className = dots[i].className.replace(" active", "");
//   }
//   slides[slideIndex-1].style.display = "block";  
//   dots[slideIndex-1].className += " active";
//   setTimeout(showSlides, 2000); // Change image every 2 seconds
// }

//validate phone number

function validatephone(){  
var num=document.myform.num.value; 
// var ne=/^01/ ;
if (isNaN(num)){  
  document.getElementById("numloc").innerHTML="Enter Numeric value only";  
  return false;  
}else
  
  if(num.length>11){

  	document.getElementById("numloc").innerHTML="Enter Your Phone Number";  
  return false;  
}else{  
  return true;  
}

}
function validateemail()  
{  
var x=document.myform.email.value;  
var atposition=x.indexOf("@");  
var dotposition=x.lastIndexOf(".");  
if (atposition<1 || dotposition<atposition+2 || dotposition+2>=x.length){  
 
  document.getElementById("message").innerHTML="Please enter a valid e-mail address \n atpostion:"+atposition+"\n dotposition:"+dotposition; 
  return false;  
  }  else{
    return true;
  }
}  



// function verifyPassword() {  
//   var pw = document.myform.pswd.value; 
//   if(pw.length < 8||pw.length > 8) {  
//      document.getElementById("message").innerHTML = "**Password length must be 8 characters";  
//      return false;  
//   }  else{
//     return true;
//   }
  
//   }





// function checkPasswordValidation() {
//  var check=true;
// var password=document.getElementById("pswd").value;
// if(!password.match( /^(?=.*\d)(?!.*\s)(?=.*[~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_₹])(?=.*[a-z])(?=.*[A-Z]{1}).{8}./)||password[0]==password[0].toLowerCase()){
// alert(the password is not valid);
//   check=false;
//   return check;
// }

      
        
//       }  
// =====================================================

// window.onload=pageload;

// function pageload(){

// var form=document.getElementById("form");
// form.onsubmit=validation;


// }
function validation(){
var spa=document.getElementById("spa");
// var re=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
var rep=new RegExp("^(?=.[a-z])(?=.[A-Z])(?=.[0-9])(?=.[!@#\$%\^&\*]).{8}");
// var check=/^(?=.[a-zA-Z])(?=.\d)(?=.*[!#$%&? "])$/ ;
var repa=/^(?=.*\s)/;
valid=true;
if(password==""){   
  spa.innerHTML="password : [required]";
   spa.style.color="red";
   valid=false;
    }
   else if(!rep.test(password) || password.length !=8 || repa.test(password) || password[0]==password[0].toLowerCase()) {
    valid=false;
  // message.innerHTML="password : *[ password is incorrect ]";
  document.getElementById("hash").innerHTML="Enter a correct password";
  // alert("password is incorrect");
    // spa.style.color="black";
  }else{
    spa.innerHTML="password";
  // spa.style.color="black";
}
return valid;
  }
// ========================================
// function validate(){
//   var password=document.getElementById("password").value;
// if(!password.match(/^(?=.*\d)(?!.* )(?=.*[a-z])(?=.*[A-z]{1}).{8}/) || password[0]==password[0].toLowerCase())
// {
// alert("password is not valid ,it must contain 8 characters: one_uppercase at frist , one_lowercase, one_number , one special character at least,and no sapaces ");
// check=false;
//   return check;
// }




