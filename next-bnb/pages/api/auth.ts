import axios from "axios";
import { UserType } from "../../types/user";

//* 쿠키의 access_token의 유저 정보 받아오는 api
export const meAPI = () => axios.get<UserType>("/api/auth/me");