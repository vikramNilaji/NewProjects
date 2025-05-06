const Menu1 = [
  { label: "Home", to: "/" },
  {
    label: "Profile",
    to: "profile",
    children: [
      {
        label: "Security",
        to: "Security",
        children: [
          {
            label: "Account",
            to: "/account",
            children: [
              {
                label: "Login",
                to: "/login",
                children: [{ label: "Register", to: "/register" }],
              },
            ],
          },
        ],
      },
    ],
  },
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
];
