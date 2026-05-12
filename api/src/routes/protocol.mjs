import { Router } from 'express';
import { query } from '../sails-client.mjs';

const router = Router();

function toBigIntStr(v) {
  if (v == null) return '0';
  return typeof v === 'bigint' ? v.toString() : String(v);
}

router.get('/stats', async (req, res, next) => {
  try {
    const [
      totalStreams,
      activeStreams,
      totalSupply,
      totalBindings,
      totalBounties
    ] = await Promise.all([
      query('streamCore', 'TotalStreams'),
      query('streamCore', 'ActiveStreams'),
      query('growToken', 'TotalSupply'),
      query('identityRegistry', 'TotalBindings'),
      query('bountyAdapter', 'TotalBounties')
    ]);

    res.json({
      streams: {
        total: toBigIntStr(totalStreams),
        active: toBigIntStr(activeStreams),
      },
      tokens: {
        totalSupply: toBigIntStr(totalSupply),
      },
      identity: {
        totalBindings: toBigIntStr(totalBindings),
      },
      bounties: {
        total: toBigIntStr(totalBounties),
      },
      timestamp: new Date().toISOString()
    });
  } catch (err) {
    next(err);
  }
});

export default router;
