import axios from 'axios';
import { Injectable } from '@nestjs/common';
import { HttpAdapter } from '../interfaces/http-adapter.interface';

@Injectable()
export class AxiosAdapter implements HttpAdapter {
  async get<T>(url: string): Promise<T> {
    try {
      const { data } = await axios.get<T>(url);

      return data;
    } catch (error) {
      throw new Error(error);
    }
  }
}
