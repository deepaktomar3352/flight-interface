$(document).ready(function(){
    $.getJSON("https://flight-interface.onrender.com/fetchallcities",function(data){
        // alert(JSON.stringify(data))
        data.result.map((item)=>{
            $('#source').append($('<option>').text(item.cityname))
            $('#destination').append($('<option>').text(item.cityname))
        })
    })
})
