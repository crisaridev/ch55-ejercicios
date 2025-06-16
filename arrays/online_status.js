/*
Display online status for a list of users.


Example:
- `onlineStatus(['mockIng99', 'J0eyPunch', 'glassedFer'])` should return `'mockIng99, J0eyPunch and 1 more online'`.

*/

/*
1. Receive a list of users we expected an usersArray.
2. Looking the example it only displays the first and second user and the message indicating the rest of online users "and 'n' more online"
3. We take the indexes [0,1] of the usersArray to display them.
4. Then we use the method length to know the number of elements within the Array.
5. Rest two elements to the total elements of 'usersArray' for knowing the rest of users online.
6. Display the message.
*/

const onlineUserStatus = (usersArray) => {

  //Save the first and second users Online of the received Array.
  const firstOnlineUser = usersArray[0];
  const secondOnlineUser = usersArray[1];

  //Rest 2 elements and save the total.
  const restOfTheOnlineUsers = usersArray.length - 2;

  return (`${firstOnlineUser}, ${secondOnlineUser} and ${restOfTheOnlineUsers} more online`);

}

console.log(onlineUserStatus(['mockIng99', 'J0eyPunch', 'glassedFer','Felipe11','Sebas1']));