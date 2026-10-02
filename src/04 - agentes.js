import express from "express";
import { saveUser } from "./deps/users.js";

const app = express();

app.use(express.json());

app.post("/users", async function createUserHandler(req, res) {
  function isValidBody(body) {
    return typeof body?.username === "string" && body.username.length >= 3;
  }

  if (!isValidBody(req.body)) {
    return res.status(400).json({ error: "Invalid user body" });
  }

  const user = await saveUser(req.body);

  return res.status(201).json(user);
});

app.listen(3000, () => {
  console.log("Server listening on http://localhost:3000");
});
