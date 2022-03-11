import { Router } from "express";
import { Notes } from "../controller";
import { authorization } from "../middlewares/authorization";

const router = Router();

router.post("/", [authorization], Notes.index);
router.post("/update", [authorization], Notes.updateNotes);
export const NotesRoutes = router;
