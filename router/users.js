import { deleteUser, getAllUsers } from "../controllers/users.js";
import { isAuthenticated, isOwner } from "../middleware/index.js";

export default (router) => {
  router.get("/users", isAuthenticated, getAllUsers);
  router.delete("/users/:id", isAuthenticated, isOwner, deleteUser);
};
