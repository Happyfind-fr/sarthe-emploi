import { Router } from "express";
import * as Handler from '../handlers';
import * as Migration from '../migrations';
import * as Middleware from '../middlewares';
const router = Router();

router.route('/auth').post(new Handler.JobsProviders().auth);
router.route('/users').get(new Handler.User().getAll);
router.route('/users/migrate').post(new Migration.UsersMigration().migrate);
router.route('/user/create').post(new Handler.User().create);
router.route('/user/:id')
    .get(new Handler.User().get)
    .put(new Handler.User().update)
    .delete(new Handler.User().delete);

router.route('/token/create').post(new Handler.Token().create);
router.route('/offers').get(new Handler.JobsProviders().fetch_offers);
router.route('/offers/migrate').post(new Middleware.HostWhitelist().isWhitelisted, new Migration.OffersMigration().migrate);

router.route('/companies').get(new Handler.Company().getAll);
router.route('/companies/migrate').post(new Migration.CompaniesMigration().migrate);
router.route('/company/:id')
    .get(new Handler.Company().get)
    .put(new Handler.Company().update)
    .delete(new Handler.Company().delete)
export default router;