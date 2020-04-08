/************************************************************
*                       Page Config regroupe les clef importante 
*************************************************************/

/************************************************************
*                       Configuration 
*************************************************************/
module.exports = {
    /************************************************************
    *                       Config DataBase
    *************************************************************/
    
    DB: {
        dev: "mongodb://localhost:27017/BaseJs"
    },
    
    /************************************************************
    *                        Config expressSession
    *************************************************************/
    
    Cookie: {
        secret: 'securite'
    ,   name:   'ptitBiscuit'
    }
}
