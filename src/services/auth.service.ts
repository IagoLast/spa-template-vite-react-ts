
function login() {
  localStorage.setItem("todo-list-session", "1234");
}

function logout() {
  localStorage.removeItem("todo-list-session");
}

function isAuthenticated() {
  const value = localStorage.getItem("todo-list-session");
  return value !== null;
}

export default {
  logout,
  login,
  isAuthenticated,
};
