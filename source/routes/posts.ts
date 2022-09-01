import express from 'express';
import controller from '../controllers/posts';
const router = express.Router();

router.get('/htmlPDF', controller.HTML2PDF);
router.get('/urlPDF', controller.URL2PDF);


export = router;