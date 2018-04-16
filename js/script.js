$(document).ready(function(){
    var isshow = localStorage.getItem('ageCleared');
    if (isshow== null) {
        localStorage.setItem('ageCleared', 1);
        $('#age_restriction_modal').modal('show'); 
    }
    $('.age-accept-btn').click(function(){
        $('#age_restriction_modal').modal('hide'); 
    })
});