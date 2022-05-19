function code(){
    var val=document.getElementById('country')
    if(val=='select country') document.getElementById('output').value=''
    else if(val=='uk') document.getElementById("output").value='+44'
    else if (val=='us') document.getElementById('output').value="+1"
    else{
        document.getElementById("output").value="+91"
    }
}