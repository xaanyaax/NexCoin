import type { NextApiRequest, NextApiResponse } from 'next';
import { fetchTop100Coins } from '@/library/services/coinGeko';
import { Coin } from "@/library/types/coin";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Coin[] | { error: string }> //typescript
) {
  try {
    const coins = await fetchTop100Coins();
    res.status(200).json(coins);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch data from CoinGecko' });
  }
}
