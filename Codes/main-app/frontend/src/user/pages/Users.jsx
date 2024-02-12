import UsersList from "../components/UsersList";

const Users = () => {
  let USERS = [
    {
      id: 1,
      image:
        "https://media.licdn.com/dms/image/D5603AQFk-o0ORqwCig/profile-displayphoto-shrink_200_200/0/1697216976262?e=2147483647&v=beta&t=jIZN13VGrONBkt-JxfDn_xXLQfBMa2zxXorz0xG0lhc",
      name: "Tejas Angadi",
      places: 2,
    },
  ];

  return (
    <div>
      <UsersList items={USERS} />
    </div>
  );
};

export default Users;
