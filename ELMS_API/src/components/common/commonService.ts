import db from '../../config/connection/connection';


    
export async function _getCountryList() {
    const poolConnect = await db.connect();
    
    try{
        const result = await poolConnect.request()
            .execute('SP_VVS_MstCountryDropdown')
        return Promise.resolve(result.recordset);
    }
    catch(e){
        return Promise.reject(e);
    }
    finally{
        poolConnect.close();

    }
}

export async function _getStateList(CountryID:number) {
    const poolConnect = await db.connect();
    
    try{
        const result = await poolConnect.request()
            .input('CountryID', CountryID)
            .execute('SP_VVS_MstStateDropdown')
        return Promise.resolve(result.recordset);
    }
    catch(e){
        return Promise.reject(e);

    }
    finally{
        poolConnect.close();

    }
}

export async function _getCityist(StateID:number) {
    const poolConnect = await db.connect();
    
    try{
        const result = await poolConnect.request()
            .input('StateID', StateID)
            .execute('SP_VVS_MstCITYDropdown')
        return Promise.resolve(result.recordset);
    }
    catch(e){
        return Promise.reject(e);

    }
    finally{
        poolConnect.close();

    }
}

export async function _geCatTree(idVal: Number) {
    const poolConnect = await db.connect();
    
    try{
        const result = await poolConnect.request()
            .execute('SP_VVS_MstCatTreeviewDropdownAll')
        return Promise.resolve(result.recordset);
    }
    catch(e){
        return Promise.reject(e);
    }
    finally{
        poolConnect.close();

    }
}


export async function _getLongLatDetail(jsonData:any) {
    const poolConnect = await db.connect();
    
    try{
        const result = await poolConnect.request()
            .input('CountryID', jsonData.CountryID)
            .input('StateID', jsonData.StateID)
            .input('CityID', jsonData.CityID )
            .input('CatID', jsonData.CatID)
            .input('SubCatID', jsonData.SubCatID )
            .execute('SP_VVS_LongLatDetails')
        return Promise.resolve(result.recordset);
    }
    catch(e){
        return Promise.reject(e);

    }
    finally{
        poolConnect.close();

    }
}

// export async function _saveData(tableName: string, jsonData:string, qryType:string, UpdJson:any) {
//     const poolConnect = await db.connect();
//     try{
//         const result = await poolConnect.request()
//             .input('tbl', tableName)
//             .input('json', JSON.stringify(jsonData))
//             .input('qryType', qryType)
//             .input('UpdJson', JSON.stringify(UpdJson))
//             .execute('VCA_tblInsert_JSON')
            
//         return Promise.resolve(result.recordset);
//     }
//     catch(e){
//         return Promise.reject(e);
//     }
//     finally{
//         poolConnect.close();
//     }
// }


// export async function _searchData(jsonData: any) {
    
//     let userID = jsonData.userID;
//     let FROMDATE= "";
//     let TODATE = "";
//     if(jsonData.data.LoadingDateFrom){
//         FROMDATE = jsonData.data.LoadingDateFrom;
//         delete jsonData.data.LoadingDateFrom;
//     }
//     if(jsonData.data.LoadingDateTo){
//         TODATE = jsonData.data.LoadingDateTo;
//         delete jsonData.data.LoadingDateTo;
//     }
    
//     const poolConnect = await db.connect();
    
//     try{
//         const result = await poolConnect.request()
//             .input('JSON', JSON.stringify(jsonData.data))
//             .input('PAGESIZE', jsonData.pageSize)
//             .input('PAGEINDEX', jsonData.pageIndex)
//             .input('FROMDATE', FROMDATE)
//             .input('TODATE', TODATE)
//             .input('UserID', userID)
//             .execute('VCA_Search_VendorCoalRakeAssesment')
            
//         return Promise.resolve(result.recordset);
//     }
//     catch(e){
//         return Promise.reject(e);
//     }
//     finally{
//         poolConnect.close();
//     }
// }



// export async function _lastRecords(jsonData: any) {
    
//     const poolConnect = await db.connect();
//     try{
//         const result = await poolConnect.request()
//             .input('PAGESIZE', JSON.stringify(jsonData.pageSize))
//             .input('PAGEINDEX', JSON.stringify(jsonData.pageIndex))
//             .execute('VCA_View_VendorCoalRakeAssesment')
//         return Promise.resolve(result.recordset);
//     }
//     catch(e){
//         return Promise.reject(e);
//     }
//     finally{
//         poolConnect.close();
//     }
// }


// export async function _detailData(id: number) {
    
//     const poolConnect = await db.connect();
//     try{
//         const result = await poolConnect.request()
//             .input('ID', id )
//             .execute('SP_VCA_VendorCoalRakeDetail')
//         return Promise.resolve(result.recordset);
//     }
//     catch(e){
//         return Promise.reject(e);
//     }
//     finally{
//         poolConnect.close();
//     }
// }


// export async function _assesmentData() {
    
//     const poolConnect = await db.connect();
//     try{
//         const result = await poolConnect.request()
//             //.input('ID', id )
//             //.execute('SP_VCA_VendorCoalRakeDetail')
//             .query("SELECT * FROM VW_MSTAssesmentComponent_Attribute");
//         return Promise.resolve(result.recordset);
//     }
//     catch(e){
//         return Promise.reject(e);
//     }
//     finally{
//         poolConnect.close();
//     }
// }

// export async function _getTotalScore(jsonData: any) {
    
//     let Coal_stock_at_siding =  jsonData.Coal_stock_at_siding;
//     let Physical_quality_of_coal =  jsonData.Physical_quality_of_coal;
//     let Quality_of_coal_loaded	=  jsonData.Quality_of_coal_loaded;		 
//     let Presence_of_Coal_Handling_Agent =  jsonData.Presence_of_Coal_Handling_Agent;
//     let Overall_performance_of_Agent =  jsonData.Overall_performance_of_Agent;

//     const poolConnect = await db.connect();
//     try{
//         const result = await poolConnect.request()
//         .input('Coal_stock_at_siding', Coal_stock_at_siding )
//         .input('Physical_quality_of_coal', Physical_quality_of_coal )
//         .input('Quality_of_coal_loaded', Quality_of_coal_loaded )
//         .input('Presence_of_Coal_Handling_Agent', Presence_of_Coal_Handling_Agent )
//         .input('Overall_performance_of_Agent', Overall_performance_of_Agent )

//         .execute('SP_VCA_GET_TotalScore')
//         return Promise.resolve(result.recordset);
//     }
//     catch(e){
//         return Promise.reject(e);
//     }
//     finally{
//         poolConnect.close();
//     }
// }


// export async function _lastMasterRecords(jsonData: any) {
    
//     const poolConnect = await db.connect();
//     try{
//         const result = await poolConnect.request()
//             .input('PAGESIZE', JSON.stringify(jsonData.pageSize))
//             .input('PAGEINDEX', JSON.stringify(jsonData.pageIndex))
//             .execute('VCA_View_VendorCoalRakeAssesment')
//         return Promise.resolve(result.recordset);
//     }
//     catch(e){
//         return Promise.reject(e);
//     }
//     finally{
//         poolConnect.close();
//     }
// }