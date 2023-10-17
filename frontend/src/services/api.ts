import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:3000/'
});

export interface Profile {
    _id: string;
    name: string;
    title: string;
    summary: string;
    contactLinks: Array<{ platform: string; link: string }>;
}

//conexion para ver el perfil
export const getProfileInfo = async () => {
    try {
        const response = await instance.get<Profile>(`/profile`);
        return response.data;
    } catch (error) {
        console.error('Error fetching profile:', error);
        throw error;
    }
};

