import type { Router } from 'express';
import { createRouter } from '@/utils/create';
import { getCoordsForAddress } from '@/controllers/location-controllers';

export default createRouter((router: Router) => {
  router.post('/getLangLong', getCoordsForAddress);
});
