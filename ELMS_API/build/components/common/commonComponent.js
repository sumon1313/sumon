"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const commonService = require("./commonService");
const multer = require("multer");
const BASE_PATH = require("../../routes/commonRouter");
///const storagePath = multer({dest: BASE_PATH + '/uploads/images'});
const storageOption = multer.diskStorage({
    destination: function (req, file, callback) {
        callback(null, BASE_PATH + '/uploads/images');
    },
    filename: function (req, file, callback) {
        callback(null, file.fieldname + "_" + Date.now() + "_" + file.originalname);
    }
});
const imageUpload = multer({
    storage: storageOption
}).array("photo", 1); //Field name and max count
// export async function assesmentData(req: Request, res: Response, next: NextFunction): Promise < void > {
//     commonService._assesmentData().then(
//         result => {            
//             res.send(result);
//         })
//         .catch(err => {
//             res.send(err);
//         })
// }
function countryList(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        commonService._getCountryList().then(result => {
            res.send(result);
        })
            .catch(err => {
            res.send(err);
        });
    });
}
exports.countryList = countryList;
function stateList(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        commonService._getStateList(req.body.countryId).then(result => {
            res.send(result);
        })
            .catch(err => {
            res.send(err);
        });
    });
}
exports.stateList = stateList;
function cityList(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        commonService._getCityist(req.body.stateId).then(result => {
            res.send(result);
        })
            .catch(err => {
            res.send(err);
        });
    });
}
exports.cityList = cityList;
function categoryTree(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        commonService._geCatTree(req.body.CatId).then(result => {
            res.send(result);
        })
            .catch(err => {
            res.send(err);
        });
    });
}
exports.categoryTree = categoryTree;
function longLatDetail(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        commonService._getLongLatDetail(req.body).then(result => {
            res.send(result);
        })
            .catch(err => {
            res.send(err);
        });
    });
}
exports.longLatDetail = longLatDetail;
// export async function save(req: Request, res: Response, next: NextFunction): Promise < void > {
//     let tableName:string
//     let pageName = req.body.pageName;
//     let qryType= req.body.qryType;
//     let jsonData = req.body.data;
//     let UpdJson = req.body.updateBy;
//     if(pageName=="CoalRakeAssesment"){
//         tableName = 'VendorCoalRakeAssesment';
//     }
//     commonService._saveData(tableName, jsonData, qryType, UpdJson).then(
//         (result: any) => {
//             res.send(result);             
//         })
//         .catch(err => {
//             res.send(err);
//     })
// }
// export async function search(req: Request, res: Response, next: NextFunction): Promise < void > {
//     let jsonData = req.body;
//     commonService._searchData(jsonData).then(
//         (result: any) => {
//             res.send(result);
//         })
//         .catch((err: any) => {
//             res.send(err);
//     })
// }
// export async function detail(req: Request, res: Response, next: NextFunction): Promise < void > {
//     let id = req.body.ID;
//     commonService._detailData(id).then(
//         (result: any) => {
//             res.send(result);
//         })
//         .catch((err: any) => {
//             res.send(err);
//     })
// }
// export async function upload(req: Request, res: Response, next: NextFunction): Promise < void > {
//     let resData ={
//         status:0,
//         message:"Image successfully uploaded.",
//         fileName:""
//     }
//     if(req.file) {
//         // res.json(req.file.filename);
//         resData ={
//             status:1,
//             message:"Image successfully uploaded.",
//             fileName:req.file.filename
//         }
//         res.send(resData)
//     }
//     else{
//         resData ={
//             status:0,
//             message:"Failed to upload image.",
//             fileName:""
//         }
//         res.send(resData)
//     }
// }
// export async function getLastRecords(req: Request, res: Response, next: NextFunction): Promise < void > {
//     let jsonData = req.body;
//     commonService._lastRecords(jsonData).then(
//         (result: any) => {
//             res.send(result);
//         })
//         .catch((err: any) => {
//             res.send(err);
//     })
// }
// export async function saveMaterData(req: Request, res: Response, next: NextFunction): Promise < void > {
//     let tableName = req.body.tableName;
//     let qryType= req.body.qryType;
//     let jsonData = req.body.data;
//     let UpdJson = "";
//     delete jsonData.tableName;
//     commonService._saveData(tableName, jsonData, qryType, UpdJson).then(
//         (result: any) => {
//             res.send({"status":1, "message": "Data successfully saved."});
//         })
//         .catch(err => {
//             res.send(err);
//     })
// }
// export async function totalScore(req: Request, res: Response, next: NextFunction): Promise < void > {
//     commonService._getTotalScore(req.body).then(
//         (result: any) => {
//             res.send(result);
//         })
//         .catch(err => {
//             res.send(err);
//     })
// }
// export async function getMasterLastRecords(req: Request, res: Response, next: NextFunction): Promise < void > {
//     let jsonData = req.body;
//     commonService._lastMasterRecords(jsonData).then(
//         (result: any) => {
//             res.send(result);
//         })
//         .catch((err: any) => {
//             res.send(err);
//     })
// }
//# sourceMappingURL=commonComponent.js.map