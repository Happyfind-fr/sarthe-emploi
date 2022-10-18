import { Router } from "express";
import * as C from '../handlers';

const router = Router();

router.route('/auth').get(new C.Api().auth);
router.route('/users').get(new C.User().getAll);
router.route('/user/create').post(new C.User().create);
router.route('/user/:id')
    .get(new C.User().get)
    .put(new C.User().update)
    .delete(new C.User().delete);

export default router;