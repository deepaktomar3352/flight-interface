$(document).ready(function(){
    $.getJSON("http://localhost:3000/fetchallcities",function(data){
        // alert(JSON.stringify(data))
        data.result.map((item)=>{
            $('#source').append($('<option>').text(item.cityname))
            $('#destination').append($('<option>').text(item.cityname))
        })
    })
})
