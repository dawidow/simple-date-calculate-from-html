// Calculate age if necessary
if (document.querySelector("[data-birthday]")) calculateAge();

// Calculate age from birthday date
function calculateAge() {
  var ageField = document.querySelector("[data-birthday]");

  var birthday = ageField.getAttribute("data-birthday");

  var birthdayArray = birthday.split("/");

  var birthDay = Number(birthdayArray[0]);
  var birthMonth = Number(birthdayArray[1]);
  var birthYear = Number(birthdayArray[2]);

  var age = getAge(new Date(birthYear, birthMonth, birthDay));

  ageField.innerHTML = age;

  function getAge(birthdayDate) {
      var diff_ms = Date.now() - birthdayDate.getTime();
      var age_dt = new Date(diff_ms);
      return Math.abs(age_dt.getUTCFullYear() - 1970);
  }
}

var btn = document.querySelector('.checkHow'),
	instructions = document.querySelector('.instructions');

btn.addEventListener('click', () => {
	if(btn.classList.contains('active')) {
		btn.classList.remove('active');
		instructions.classList.add('hidden');
	} else {
		btn.classList.add('active');
		instructions.classList.remove('hidden');
	}
}, false);