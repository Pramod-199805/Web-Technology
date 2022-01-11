function validateLoginForm(){
    let userName=document.getElementById('uname');
    let password=document.getElementById('pass');
 
  
    if(userName.value.trim()==""){
        userName.style.border="solid 3px red";
        document.getElementById("usermessage").innerHTML="Invalid Username";
        return false;
    }
    else if(password.value.trim()==""){
        password.style.border="solid 3px red";
        document.getElementById("passwordmessage").innerHTML="Invalid Password"
        return false;
    }
    else{
        return logincredentials();
    }   
}

function logincredentials(){
    let uname=document.getElementById('uname').value;
    let password=document.getElementById('pass').value;

    let localuname=localStorage.getItem('Username');
    let localpass=localStorage.getItem('Password');

    if(uname==localuname&&password==localpass){
        alert("Login Sucessfull");
        location.href="index.html";
    }
    else{
        alert("Invalid credentials");
        return false;
    }
}





 function validateRegisterForm(){
    let firstName=document.getElementById('firstname');
    let lastName=document.getElementById('lastname');
    let userName=document.getElementById('username').value;
    let pass=document.getElementById('password').value;

    localStorage.setItem("Username",userName);
    localStorage.setItem("Password",pass);


    
    if(firstName.value.trim()==""){
        firstName.style.border="solid 3px red";
        document.getElementById("fmessage").innerHTML="First Name Cannot Be Blank";
        return false;
    }

    else if(lastName.value.trim()==""){
        lastName.style.border="solid 3px red";
        document.getElementById('lmessage').innerHTML="Last Name Cannot Be Blank"
        return false;
    }
        else if(userName.value.trim()==""){
        userName.style.border="solid 3px red";
        document.getElementById('umessage').innerHTML="Invalid UserName"
        return false;
    }

        else if(pass.value.trim()==""){
        userPassword.style.border="solid 3px red";
        document.getElementById('userpass').innerHTML="Invalid Password"
        return false;
    }
    else{
        return true;
    }
    
   
}
  
 function employeeDetail(){
     let employeeId=document.getElementById('empid')
     let employeeName=document.getElementById('empname')
     let salary=document.getElementById('sal')
     if(employeeId.value.trim()==""){
         employeeId.style.border="solid 3px red";
         document.getElementById('idmessage').innerHTML="ID Cannot Be Blank";
         return false;
  }
  else if(employeeName.value.trim()==""){
      employeeName.style.border="solid 3px red";
      document.getElementById('namemessage').innerHTML="Invalid Username Name cannot be Blank"
      return false;
  }
  else if(salary.value.trim()==""||salary.value==0){
    salary.style.border="solid 3px red";
    document.getElementById('salmessage').innerHTML="Salary cannot be zero and empty" 
      return false;

  }
  else{
      return addEmployee();
  }

 }


function addEmployee(){
   
    let id=document.getElementById('empid');
    let ename=document.getElementById('empname');
    let salary=document.getElementById('sal');
    let department=document.getElementById('dept');
    let skills=document.getElementById('skillset');

    let userRecords=new Array();
    userRecords=JSON.parse(localStorage.getItem("UserData"))?JSON.parse(localStorage.getItem("UserData")):[];
    if(userRecords.some((value)=>{return value.id==id})){
        alert("EmployeeID Present");
    }
    else{    
    userRecords.push({
        "EmployeeID":id.value,
        "Employee Name":ename.value,
        "Salary":salary.value,
        "Deparment":department.value,
        "Skills":skills.value
    })
}
    localStorage.setItem("UserData",JSON.stringify(userRecords));
   alert("Added Sucessfully");

} 


function tableView(){
    
        var text="<table border=2px >";
        text+="<tr><th>Name</th><th>Emp ID</th><th>Salary</th><th>Department</th><th>Skill</th></tr>";
    
        let user_data=JSON.parse(localStorage.getItem('UserData'));
        for(let eachObj of user_data){
            text+="<tr>";
            for(let val in eachObj){
                text+="<td>"+eachObj[val]+"</td>";
            }
            text+="</tr>";
           
        }
        text+="</table>";
        document.write(text);
    
}




                                                                                         










