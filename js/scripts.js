$(document).ready(function(){
  $("#animalForm").submit(function(event){
    var animal = $("input:radio[name=animal]:checked").val();
    event.preventDefault();
    if(animal === "turtle"){
      $('.anim').hide();
      $('#turtle').show();
    } else if (animal === "snake"){
      $('.anim').hide();
      $('#snake').show();
    } else {
      $('.anim').hide();
      $('#rabbit').show();
    }
  });
});
