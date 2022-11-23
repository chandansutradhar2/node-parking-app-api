let users = [
  {
    id: "1",
    name: "abc",
    email: "abc@gmail.com",
    mobileNo: "8080811134",
  },
  {
    id: "2",
    name: "pqr",
    email: "pqr@gmail.com",
    mobileNo: "8080811234",
  },
];

exports.fetchAllUser = (req, res) => {
  res.send(users);
};

exports.addUser = (req, res) => {
  users.push(req.body);
  res.send("user added successfully");
};

exports.deleteUser = (req, res) => {
  let idx = users.findIndex((u) => {
    return u.id == req.body.id;
  });
  if (idx !== -1) {
    users.slice(idx, 1);

    res.send("user deleted successfully");
  } else {
    res.send("unable to find user with matching id");
  }
};

exports.fetchUserById = (req, res) => {
  let idx = users.findIndex((u) => {
    return u.id == req.body.id;
  });
  idx !== -1
    ? res.status(200).send({
        status: true,
        data: users[idx],
        responseTimeStamp: new Date(),
      })
    : res.status(404).send({
        status: false,
        data: null,
        msg: "no user found",
        responseTimeStamp: new Date(),
      });
};
