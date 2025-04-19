import axios, {AxiosResponse} from "axios";
import { User } from "@/interfaces/user";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

const fetchUsers = async (): Promise<User[]> => {
    try {
        const response: AxiosResponse<User[]> = await axios.get(
            `${API_BASE_URL}/users`
        );
        return response.data;
    } catch (error) {
        console.error("Error fetching users:", error);
        throw error;
    }
}