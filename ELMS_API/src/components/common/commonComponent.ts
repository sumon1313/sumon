
import HttpError from '../../config/error';
import { NextFunction, Request, Response } from 'express';
import * as jwt from 'jsonwebtoken';
import app from '../../config/server/server';
import * as commonService from './commonService';
import { async } from 'rxjs/internal/scheduler/async';
import { func } from 'joi';
import * as multer from 'multer';
import * as BASE_PATH from '../../routes/commonRouter';
///const storagePath = multer({dest: BASE_PATH + '/uploads/images'});


const storageOption = multer.diskStorage({
    destination: function(req, file, callback) {
        callback(null, BASE_PATH + '/uploads/images');
    },
    filename: function(req, file, callback) {
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

export async function countryList(req: Request, res: Response, next: NextFunction): Promise < void > {

    commonService._getCountryList().then(
        result => {        
            res.send(result);
        })
        .catch(err => {
            res.send(err);
        })
}

export async function stateList(req: Request, res: Response, next: NextFunction): Promise < void > {

    commonService._getStateList(req.body.countryId).then(
        result => {        
            res.send(result);
        })
        .catch(err => {
            res.send(err);
        })
}

export async function cityList(req: Request, res: Response, next: NextFunction): Promise < void > {

    commonService._getCityist(req.body.stateId).then(
        result => {        
            res.send(result);
        })
        .catch(err => {
            res.send(err);
    })
}


export async function categoryTree(req: Request, res: Response, next: NextFunction): Promise < void > {

    commonService._geCatTree(req.body.CatId).then(
        result => {        
            res.send(result);
        })
        .catch(err => {
            res.send(err);
        })
}

export async function longLatDetail(req: Request, res: Response, next: NextFunction): Promise < void > {
        
    commonService._getLongLatDetail(req.body).then(
        result => {        
            res.send(result);
        })
        .catch(err => {
            res.send(err);
        })
}

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