function showAlert(){
    alert('hello! this is js alert');
}
function changeText(){
    document.getElementById('text').innerHTML='Text changed!';
}
function handleClick(){
    document.getElementById('click message').innerHTML='butten click';
}   
function validateForm(){
    let name=document.getElementById('name').Value;
    if(name==''){
        alert('please enter yourt name');
        return false;
    }
return true;
}
