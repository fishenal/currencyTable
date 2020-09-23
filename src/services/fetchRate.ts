import axios from 'axios';

interface reqParams {
  base: string;
  symbol: string[];
  start_at?: string;
  end_at?: string;
}
function getLatest (params: reqParams) {
  return axios.get('https://api.exchangeratesapi.io/latest', {
    params,
  })
}

function getHistory (params: reqParams) {
  return axios.get('https://api.exchangeratesapi.io/history', {
    params,
  })
}
