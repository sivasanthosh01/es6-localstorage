let form=document.getElementById("login");
console.log(form);
form.addEventListener("submit",(e)=>{
    e.preventDefault();
    let userName=document.getElementById("username").value;
    let password=document.getElementById("password").value;
    console.log(userName,password);

    const loginData={
        userName:userName,
        password:password
    }
    console.log(loginData);
    saveData(loginData)
})

const saveData=function(loginData){
    let storeData=JSON.parse(localStorage.getItem("loginData")) || []
    storeData.push(loginData);
    localStorage.setItem("loginData",JSON.stringify(storeData))
}












