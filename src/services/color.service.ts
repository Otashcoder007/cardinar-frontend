import { api } from '@/lib/axios';
import {ColorsResponse} from '@/types/color.types';

class ColorService {
    async getAll(): Promise<ColorsResponse> {
        const response = await api.get('/colors');

        return response.data;
    }
}

export const colorService =
    new ColorService();