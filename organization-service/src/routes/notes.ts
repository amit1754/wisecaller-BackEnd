import { Router } from "express";
import { Notes } from "../controller";
import { authorization } from "../middlewares/authorization";

const router = Router();

router.post("/", Notes.index);
router.post(
   "create",
   [authorization],
   Notes.createNotes
 );
export const NotesRoutes = router;
