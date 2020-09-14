import request from '@/utils/request';

export interface IgetParams {
  base: string;
  symbols: string[];
  timePeriod: number;
}

export async function getHistory(params: IgetParams) {
  return request('https://api.exchangeratesapi.io/history', {
    method: 'get',
    params: { ...params },
  });
}
