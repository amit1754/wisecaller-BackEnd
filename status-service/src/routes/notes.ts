import express from "express";
import { Notes } from "../controller";
const router = express.Router();

router.get("/", Notes.index);
router.post("/add", Notes.add);
router.put("/:id/update", Notes.update);
router.get("/:id/details", Notes.details);
router.delete("/:id/remove", Notes.remove);

export const NotesRoutes = router;
