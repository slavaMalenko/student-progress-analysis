import JournalFilterStorage from "./JournalFilterStorage";
import StudentsStorage from "./StudentsStorage";
import StudentStorage from "./StudentStorage";
export const studentsStorage = new StudentsStorage();
export const studentStorage = new StudentStorage({});
export const journalFilterStorage = new JournalFilterStorage();