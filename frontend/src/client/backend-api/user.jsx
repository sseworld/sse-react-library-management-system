export const UserApi = {
  borrowBook: async (isbn, userId) => {
    const res = await fetch(`https://sse-react-library-management-system.onrender.com/v1/user/borrow`, {
      method: "POST",
      body: JSON.stringify({ isbn, userId }),
      headers: { "Content-Type": "application/json" },
    });
    return res.json();
  },
  returnBook: async (isbn, userId) => {
    const res = await fetch(`https://sse-react-library-management-system.onrender.com/v1/user/return`, {
      method: "POST",
      body: JSON.stringify({ isbn, userId }),
      headers: { "Content-Type": "application/json" },
    });
    return res.json();
  },
  getBorrowBook: async () => {
    const res = await fetch(`https://sse-react-library-management-system.onrender.com/v1/user/borrowed-books`, { method: "GET" });
    return res.json();
  },
  login: async (username, password) => {
    const res = await fetch(`https://sse-react-library-management-system.onrender.com/v1/user/login`, {
      method: "POST",
      body: JSON.stringify({ username, password }),
      headers: { "Content-Type": "application/json" },
    });
    return res.json();
  },
  getProfile: async () => {
    const res = await fetch(`https://sse-react-library-management-system.onrender.com/v1/user/profile`, { method: "GET" });
    return res.json();
  },
  logout: async () => {
    const res = await fetch(`https://sse-react-library-management-system.onrender.com/v1/user/logout`, { method: "GET" });
    return res.json();
  },
};
