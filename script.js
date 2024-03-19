const submit_Btn = document.getElementById('submit-Btn')

// testme.addEventListener('click', inpt)
//     function inpt(){
//         inpt.style.borderColor ='purple';
//         console.log (inpt)
//     }
   
submit_Btn.addEventListener('click', com_age)

function com_age(){
    const testme = document.querySelectorAll('#test');
    const d = new Date();
    
    

    testme.forEach(
        function(erm){



    for(let i=0; i<testme.length; i++){

        if(testme[i].value == ""){
        var x = testme[i].nextElementSibling;
        
        erm.style.borderColor= 'rgb(255, 87, 87)';
        erm.previousElementSibling.style.color ='rgb(255, 87, 87)';
        x.innerHTML = 'The field is required'
       
    } 
     if(testme[0].value >=32){
        erm.style.borderColor= 'rgb(255, 87, 87)';
        erm.previousElementSibling.style.color ='rgb(255, 87, 87)';
        testme[0].nextElementSibling.innerHTML = 'Must be a valid day'
    
    } 
     if(testme[1].value >=13){
        erm.style.borderColor= 'rgb(255, 87, 87)';
        erm.previousElementSibling.style.color ='rgb(255, 87, 87)';
        testme[1].nextElementSibling.innerHTML = 'Must be a valid Month'
   
    }
      if(testme[2].value >= d.getFullYear()){
        erm.style.borderColor= 'rgb(255, 87, 87)';
        erm.previousElementSibling.style.color ='rgb(255, 87, 87)';
        testme[2].nextElementSibling.innerHTML = 'Must be a valid year'
    
    }
     if (!testme[0].value ==''
     &&  !testme[1].value ==''
     && !testme[2].value ==''
     &&  testme[0].value <=31 
     && testme[1].value <=12 
     && testme[2].value <= d.getFullYear()){
        let resd = document.querySelector('#dresu');
        let resy = document.querySelector('#yresu');
        let resm = document.querySelector('#mresu');

        let dd =testme[0].value;
        dd= Number(dd);

        let mm=testme[1].value;

        mm= Number(mm);
        let yy =testme[2].value ;
        yy= Number(yy);
        let newmnth= d.getMonth() ;
        let newdd= d.getDate();
        newmnth = newmnth +1
        if (newmnth <= mm && newdd <=dd ){
            resy.innerHTML = d.getFullYear() - yy - 1;
            resm.innerHTML =  mm - newmnth;
            resd.innerHTML = dd - newdd  ;
            
        } else if (newmnth <= mm && newdd >dd){
            resy.innerHTML = d.getFullYear() - yy - 1;
            resm.innerHTML =  mm - newmnth;
            resd.innerHTML = newdd - dd  ;
            
        } else
        if(newmnth==mm && newdd >=dd){
            resy.innerHTML = d.getFullYear() - yy ;
            resm.innerHTML = 0 ;
            resd.innerHTML = newdd - dd;

        } else if (newmnth >= mm && newdd <=dd){
            resy.innerHTML = d.getFullYear() - yy ;
            resm.innerHTML =  newmnth- mm;
            resd.innerHTML = dd - newdd ;
        }else
        if (newmnth >= mm && newdd >dd){
            resy.innerHTML = d.getFullYear() - yy ;
            resm.innerHTML =  newmnth- mm;
            resd.innerHTML = newdd - dd ;
        }
       
    }
}
}
)
   
}
