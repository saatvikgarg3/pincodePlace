import type { Router } from 'express';
import adminRoutes from '@/routes/admin-routes';
import userRoutes from '@/routes/user-routes';
import locRoutes from '@/routes/location-routes';
import { createRouter } from '@/utils/create';

export default createRouter((router: Router) => {
  router.use('/admin', adminRoutes);
  router.use('/user', userRoutes);
  router.use('/location', locRoutes);
});
