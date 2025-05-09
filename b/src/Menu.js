const Menu = [
  { label: "Home", to: "/" },
  {
    label: "Details",
    to: "/details",
    children: [
      {
        label: "Location",
        to: "/location",
        children: [{ label: "city", to: "/city" }],
      },
    ],
  },
  {
    label: "Profile",
    to: "/profile",
    children: [
      { label: "Login", to: "/login" },
      { label: "Register", to: "/register" },
    ],
  },
];

export default Menu