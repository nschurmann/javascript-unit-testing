export function isValidUsername(username) {
  console.log(`Checking username: ${username}...`);

  return typeof username === 'string' && username.length >= 3;
}

export function saveUser(user) {
  console.log(`Connecting to user database...`);

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        id: 1,
        ...user,
      });
    }, 1000);
  });
}