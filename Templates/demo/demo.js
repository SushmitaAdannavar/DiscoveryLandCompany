function submitfunction()
{
   let FirstName=$("#fname").val();
   console.log(FirstName)
   let lastName=$("#lname").val();
   let Email=$("#mail").val();

   let requestdata={
    "FirstName":FirstName,
    "LastName":lastName,
    "Email":Email
   }
   $.ajax(
   {
    type:"POST",
    url:'http://localhost:3000/students',
    data:JSON.stringify(requestdata),
    dataType:"json",
    contentType:"application/json;charset=utf-8",
    success:console.log("Data stored"),


   });

}

function deletefunction()
{ let studId=1;
   $.ajax({
      url:'http://localhost:3000/students/'+studId,
      type:"DELETE",
      dataType:"json",
      success:alert("Deleted")
   });
}
function editfunction()
{
   let studId=2;
   let name='Akshita';let lname='nagara';let mail='nagara@gmail.com'
   let requestdata={
      "FirstName":name,
      "LastName":lname,
      "Email":mail
   }
   $.ajax({
      url:'http://localhost:3000/students/'+studId,
      type:"PUT",
      data:JSON.stringify(requestdata),
      dataType:"json",
      contentType:"application/json;charset=utf-8",
      success:alert("edited")

   });
}
