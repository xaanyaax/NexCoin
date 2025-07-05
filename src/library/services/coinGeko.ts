import axios from 'axios';
import { Coin } from '../types/coin';

const COINGEKO_API_KEY = process.env.COINGEKO_API_KEY;
const BASE_URL = 'https://api.coingecko.com/api/v3';

export const fetchTop100Coins = async (): Promise<Coin[]> => {
    const { data } = await axios.get(`${BASE_URL}/coins/markets`, {
      params: {
        vs_currency: 'usd',
        order: 'market_cap_desc',
        per_page: 100,
        page: 1,
        sparkline: false,
      },
    });
  
    return data;
  };