import { Router } from 'express';
import { getApi, getKeyring, getProgramIds } from '../sails-client.mjs';

const router = Router();

router.get('/', async (req, res) => {
  const api = getApi();
  const keyring = getKeyring();
  let balance = null;

  try {
    if (api && keyring) {
      const { data: { free } } = await api.query.system.account(keyring.address);
      balance = (Number(BigInt(free.toString())) / 1e12).toFixed(4) + ' VARA';
    }
  } catch {}

  res.json({
    status: api && api.isConnected ? 'healthy' : 'degraded',
    network: api ? api.runtimeChain.toString() : null,
    account: keyring ? keyring.address : null,
    balance,
    contracts: getProgramIds(),
    network: api ? api.runtimeChain.toString() : null,
    uptime: Math.floor(process.uptime()),
    memory: process.memoryUsage(),
    node: process.version,
    timestamp: new Date().toISOString(),
  });
});

export default router;
