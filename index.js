 var StName = document.getElementById("name");
 var roll = document.getElementById("roll");
 var dept = document.getElementById("dept");
 var gpa = document.getElementById("gpa");
 var btn = document.getElementById("Btn");

btn.addEventListener('click' ,function(pera){
pera.preventDefault();
console.log(StName.value);

if(StName.value ==''){
    alert("vai name faka");
}
else if(roll.value ==''){
    alert("vai roll faka");
}
else if(dept.value ==''){
    
    alert("vai dept faka");
}
else if(gpa.value ==''){
    
    alert("vai gpa faka");
}
else{
    var tr = document.createElement('tr');
    var tr = document.createElement('td');
    tr.appendChild(td);
}


});