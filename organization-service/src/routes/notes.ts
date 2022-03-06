import { Router } from "express";
import { Notes } from "../controller";

const router = Router();

router.post("/", Notes.index);

export const NotesRoutes = router;
