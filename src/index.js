/** GENERAL FEEDBACK:
 *
 */

const handleSubmit = (event) => {
  //prevents page from reloading and deleting all data
  event.preventDefault();
  //declare my variables
  const username = document.querySelector("#username"),
    usernameOutput = document.querySelector("#results-username"),
    codingLevel = document.querySelector(
      'input[name="codingLevel"]:checked'
    ).value,
    codingLevelOutput = document.querySelector("#results-coding-level"),
    selectedLocation = document.querySelector("#location").value,
    locationOutput = document.querySelector("#results-location");
  (isChecked = document.querySelector("#did-like-assignment").checked),
    (checkedOutput = document.querySelector("#results-did-like-assignment"));
  usernameOutput.textContent = username.value;
  codingLevelOutput.textContent = codingLevel;
  locationOutput.textContent = selectedLocation;

  isChecked
    ? (checkedOutput.textContent = "Yes")
    : (checkedOutput.textContent = "No");
  document.querySelector("form").reset();
};

const main = () => {
  //make sure you select the form not the button
  document.querySelector("form").addEventListener("submit", handleSubmit);
};

main();
