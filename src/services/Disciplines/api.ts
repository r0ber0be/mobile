import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://192.168.1.105:1026'
});

export function listAllDisciplines() {
  return api.get('/v2/entities/?options=keyValues')
}