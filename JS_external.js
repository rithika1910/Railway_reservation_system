
    function checkdb() 
    {
    var cardno =document.getElementById("cardno");
    var cvv =document.getElementById("cvv");

        if(cardno.value.length <16 || cardno.value.length >16){
            alert("Invalid Cardnumber!");
            return false;
         }

        if(cvv.value.length!=3){
            alert("Invalid CVV");
            return false;
         }
        alert("ARE YOU SURE TO PROCEED FOR THE PAYMENT?");
        return false;
    }


    function checknb()
    {
    var accnum= document.getElementById("accnum");
    var cif= document.getElementById("cif");
    var phnum= document.getElementById("phnum");
    var cap= document.getElementById("try");
    
        if(accnum.value.length!=9){
            alert("Invalid Account number!");
            return false;
        }

        if(cif.value.length!=10){
            alert("Invalid CIF!");
            return false;
        }

        if(phnum.value.length!=10){
            alert("Invalid phone number!"); 
            return false;
        }
        if(cap.value!="A29mM11a" && cap.value!="A4Kk12a" && cap.value!=null){
            alert("Check the Captcha!");
            return false;
        }  
        alert("ARE YOU SURE TO PROCEED FOR THE PAYMENT?"); 
        return false;
    }

    function printpagearea(print)
    {
    var printContent = document.getElementById(print);
    var WinPrint = window.open('', '', 'width=900,height=650');
    WinPrint.document.write(printContent.innerHTML);
    WinPrint.document.close();
    WinPrint.focus();
    WinPrint.print();
    WinPrint.close();
    }

    var flag=0;
    function emo(x){
        if (flag===0)
        {
            x.classList.add("emojionclick");  
        }        
        flag++;
    }

    
  

    