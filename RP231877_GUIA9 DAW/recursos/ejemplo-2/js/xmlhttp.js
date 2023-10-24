var xmlhttp = false;

try{
    xmlhttp = new ActiveXObject("Msxml2.XMLHTTP");
}catch(e){
    try{
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }catch(E){
        xmlhttp = false;
    }
}

if(!xmlhttp && typeof XMLHttpRequest != 'undefined'){
    xmlhttp = new XMLHttpRequest();
}

function makerequest(id){
    const URL = "https://65383960a543859d1bb152ab.mockapi.io/api/example/cities/" + id;
    xmlhttp.open("GET",URL,true);
    xmlhttp.onreadystatechange = function(){
        if(xmlhttp.readyState == 4 && xmlhttp.status == 200){
            const cityJson = JSON.parse(xmlhttp.responseText);
            document.getElementById("cityImage").src = cityJson.image;
            document.getElementById("cityDescription").innerHTML = cityJson.description;
        }
    }
    xmlhttp.send(null);
}