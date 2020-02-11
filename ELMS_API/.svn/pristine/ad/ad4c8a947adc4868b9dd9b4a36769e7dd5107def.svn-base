import { Router } from 'express';
import * as Common from '../components/common/commonComponent';
import * as multer from 'multer';
import * as path from 'path';

import * as jwtAuth from '../config/middleware/jwtAuth';

//const upload = multer({dest: base_path() + '/uploads/images'});

const storageOption = multer.diskStorage({
    destination: function(req, file, callback) {
        callback(null, path.resolve(__dirname,"../","uploads","images"));
    },
    filename: function(req, file, callback) {
        callback(null, file.fieldname + "_" + Date.now() + "_" + file.originalname);
    }
});


const imageUpload = multer({
    storage: storageOption
});

const router: Router = Router();

router.post('/country',  Common.countryList);

router.post('/state',  Common.stateList);

router.post('/city',  Common.cityList);

router.post('/long-lat-detail',  Common.longLatDetail);

router.post('/category-tree',  Common.categoryTree);

// router.post('/save', jwtAuth.isAuthenticated, Common.save);

// router.post('/save-master', jwtAuth.isAuthenticated, Common.saveMaterData);

// router.post('/lastrecords', jwtAuth.isAuthenticated, Common.getLastRecords);

// router.post('/master-lastrecords', jwtAuth.isAuthenticated, Common.getMasterLastRecords);

// router.post('/search', jwtAuth.isAuthenticated, Common.search);

// router.post('/detail', jwtAuth.isAuthenticated, Common.detail);

// router.post('/assesment', jwtAuth.isAuthenticated, Common.assesmentData);

// router.post('/totalscore', jwtAuth.isAuthenticated, Common.totalScore);

// router.post('/upload', imageUpload.single('photo'), Common.upload)

export default router;