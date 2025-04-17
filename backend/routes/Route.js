import express from "express";
import { getNotes, getNoteById, createNote, updateNote, deleteNote} from "../controllers/NoteControllers.js";

const router = express.Router();

//buat endpoint
router.get('/notes', getNotes);
router.get('/notes/:id', getNoteById);
router.post('/notes', createNote);
router.patch('/notes/:id', updateNote);
router.delete('/notes/:id', deleteNote);

export default router;
