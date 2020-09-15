import request from '@/utils/request';

export interface IgetParams {
  base: string;
  symbols: string[];
  timePeriod?: number;
}

export async function getHistory(params: IgetParams) {
  return request('https://api.exchangeratesapi.io/history', {
    method: 'get',
    params: { ...params },
  });
}
export async function fetchLatest (params: IgetParams) {
  return request('https://api.exchangeratesapi.io/latest', {
    method: 'get',
    params: { ...params },
  });
}
