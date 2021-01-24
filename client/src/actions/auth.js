import api from "../utils/api";
import { LOGOUT } from "./types";

// Logout
export const logout = () => ({ type: LOGOUT });
