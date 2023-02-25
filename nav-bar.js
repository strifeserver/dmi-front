$(document).ready(function() {
$("#track_survey").submit(function(event) {
event.preventDefault(); // prevent form from submitting normally
var formData = new FormData($(this)[0]); // create FormData object from form data
// get all fields from FormData object and construct object
var formFields = {};
for (var field of formData.entries()) {
  formFields[field[0]] = field[1];
}
console.log(formFields)
  });
});
