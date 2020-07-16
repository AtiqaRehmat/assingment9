
//    ================ CH__NO__(38_to_44)__TASK_(1) ======================


// var p=1;
// function power(a,b)
// {
 
// for(var i=1; i<=b; i++)
// {
//       p *=a;
    
// }
// return p;
// }
// var result=power(5,2)
// document.write(result);


//    ================ CH__NO__(38_to_44)__TASK_(2) ======================


// function Leap_Year(year)
// {
 
//  if  (year % 4 === 0)
// {
//     alert("leap year")
// }
// else
// {
//     alert("not leap year");
// }
// }
// var input=prompt("enter year ");
// var result=Leap_Year(input);




//    ================ CH__NO__(38_to_44)__TASK_(3) ======================

// var s,A;
// function side(a,b,c)
// {
//     s = ( a + b + c ) / 2;


//     return s;
// }

// function area(a,b,c)
// {
// side(a,b,c)
//     A= s*s-a*s-b*s-c;
   
//  return A;
// }

// var result=area(2,3,4);
// document.write(result);


//    ================ CH__NO__(38_to_44)__TASK_(4) ======================


// function Student__Percentage( eng,  urdu,math)
// {
//     var percentage;
//     var perc;
//     var obt;
// obt=(eng+urdu+math);
//      percentage=(obt/300)*100;
    
//      alert("PERCENTAGE = "+percentage);
//     return percentage;
// }


// function Student__Average( eng,  urdu,math)
// {
   
//     var avg;
//     var total;
// total=(eng+urdu+math);
//    avg=total/3;
    
//      alert("AVERAGE = "+avg);
//     return avg;
// }


// function Result()
// {
// var eng=+prompt("enter english marks");
// var urdu=+prompt("enter urdu marks");
// var math=+prompt("enter math marks");
// Student__Percentage(eng,urdu,math);
// Student__Average(eng,urdu,math);
// }

// Result();


//    ================ CH__NO__(38_to_44)__TASK_(5) ======================

// function Find__Index__Number(){
//     var name="atiqa";
//     var find="i";
//     for(var i=0; i<=4; i++)
//     {
//     if(name[i]=== find)
//     {
//     document.write(i);
//     }
//     }
// }

// Find__Index__Number();


//    ================ CH__NO__(38_to_44)__TASK_(6) ======================


// var sentance="my name is atiqa ";
// var sen=" ";
// for(var i=0; i<=sentance.length; i++)
// {
//     if(sentance[i] != 'a' || sentance[i] != 'e'  || sentance[i] != 'i'  || sentance[i] != 'o'  || sentance[i] != 'u')
//     {
//     sentance=+sen;
//     document.write(sentance);
//     }
// }


//    ================ CH__NO__(38_to_44)__TASK_(7) ======================

//var Sentance="my name is atiqa";






//    ================ CH__NO__(43_to_48)__TASK_(1) ======================

// function box()
// {
//     alert("hellow");
// }



//    ================ CH__NO__(43_to_48)__TASK_(2) ======================

// function box()
// {
//     alert("hellow");
// }



//    ================ CH__NO__(43_to_48)__TASK_(3) ======================

// function RemoveRowOne(){

// var RowOne=document.getElementById("RowOne").outerHTML="";

// }
// function RemoveRowTwo(){

//     var RowTwo=document.getElementById("RowTwo").outerHTML="";
    
    
//     }
//     function RemoveRowThree(){

//         var RowThree=document.getElementById("RowThree").outerHTML="";
        
        
//         }

//  ================ CH__NO__(43_to_48)__TASK_(4) ====================== 

// function AnotherPicture()
// {
// var plantimage=document.getElementById("image");
// plantimage.src="images/colorpot4.jpg";
// }
// function BackToPriviousImage(){
//     var plantTwoimage=document.getElementById("image");
//     plantTwoimage.src="images/bed room.jpg";
// }

//  ================ CH__NO__(43_to_48)__TASK_(5) ====================== 


//      var Increase__Decrease=0;
//      var increase=document.getElementById("Increase__Decrease");
//      function IncreaseCounter()
//      {
// Increase__Decrease++;
// increase.innerHTML=Increase__Decrease;
// }

// function DecreaseCounter()
// {
// Increase__Decrease--;
// increase.innerHTML=Increase__Decrease;
// }




// ================ CH__NO__(49_to_52)__TASK_(1) ======================


// function Submit()
// {
// var name;
// var email;
// var phoneNo;
// var Name=document.getElementById("name");
// var Email=document.getElementById("email");
// var Phone=document.getElementById("phoneNo");
// document.write("Name : "+Name.value+"<br>");
// document.write("Email : "+Email.value+"<br>");
// document.write("Phone No : "+Phone.value);
// }


// ================ CH__NO__(49_to_52)__TASK_(2) ======================

// function ReadMore()
// {
//     var text="You've been learning how to read the properties of HTML elements, and also how to change those properties using various statements that incorporate the magic words document.getElementById.... For example, the following function removes the original image, with the id of before, and replaces it with a second image, after-pic.jpg. ";
// var Paragraph=document.getElementById("paragraph");
// Paragraph.innerHTML=text;
// }

// ================ CH__NO__(49_to_52)__TASK_(3) ======================

//  function RemoveRowOne(){

//     var RowOne=document.getElementById("RowOne").outerHTML="";
    
//     }
//     function RemoveRowTwo(){
    
//         var RowTwo=document.getElementById("RowTwo").outerHTML="";
        
        
//         }
//         function RemoveRowThree(){
    
//             var RowThree=document.getElementById("RowThree").outerHTML="";
            
            
//             }
// function Edit()
// {
//     var Row="<th><input></input></th><th><input></input></th><th><input></input></th>";
// var editrow=document.getElementById("EditRow");
// editrow.innerHTML=Row;
// }



// ================ CH__NO__(53_to_58)__TASK_(1) ======================

var ArrayOfImages = ['1.jpg', '2.jpg', '3.jpg']; //your assumed array
ArrayOfImages.forEach(function(image) {    // for each link l in ArrayOfImages
  var img = document.createElement('img'); // create an img element
  img.src = image;                         // set its src to the link l
  document.body.appendChild(img);          // append it to the body 
});