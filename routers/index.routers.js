import exp from "express";
import {
  getAll,
  postOne,
  getOne,
  updateOne,
  deleteOne,
} from "../controllers/index.controllers";

const router = exp.Router();

router.route("/").get(getAll).post(postOne);
router.route("/:id").get(getOne).put(updateOne).delete(deleteOne);

export default router;
