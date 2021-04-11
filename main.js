names=[];
display_array=[];
function submit(){
   
    for (var j=1;j<=8;j++)
    {
        var student=document.getElementById("name_of_the_student_"+j).value;
    names.push(student);
    }
    for(var k=0;k<8;k++){
        display_array.push(names[k]);

    }    
    
    var remove=display_array.join(" ");
    document.getElementById("display_name_with_commas").innerHTML=remove;
 
}