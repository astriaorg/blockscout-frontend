import type { Unit } from 'types/unit';

import config from 'configs/app';

const weiName = config.chain.currency.weiName || 'wei';
const symbol = config.chain.currency.symbol || 'ETH';

export const currencyUnits: Record<Unit, string> = {
  wei: weiName,
  gwei: `n${ symbol.toLowerCase() }`,
  ether: symbol,
};
