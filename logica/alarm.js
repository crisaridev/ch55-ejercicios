// Alarm
// Write a program that asks a user for the amount of seconds needed until an alarm(message)
// is executed alongside a text to show once those seconds have passed in real time.
// Result example: "Time for bed after 10 seconds".

//
const alarm = () => {
  //Ask a user the seconds needed
  const seconds = parseInt(prompt(`Enter the amount of seconds needed: `));

  //Set a timeout according the seconds received
  setTimeout(() => {
    alert(`Time for bed after ${seconds} seconds`);
  }, seconds * 1000);
};

alarm();

