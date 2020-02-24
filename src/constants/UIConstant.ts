'use strict';

export class UIConstant{
    
        //The tab Indexes
    public static ANALYSIS_TAB : number = 0;
    public static DASHBOARD_TAB : number = 1;
    public static DETECTION_TAB : number = 2;
    public static DATA_TAB : number = 3;
    public static ADMINISTRATION_TAB : number = 4;
    public static STATISTICS_TAB : number = 5;
    public static MANUALINPUT_TAB : number = 6;
    public static QUICKSEARCH_TAB : number = 7;
    public static REPORTS_TAB : number = 9;
    
    public static ALL_IDX : number = -1;
    public static NATURALPERSON_IDX : number = 0;
    public static LEGALPERSON_IDX : number = 1;
    public static LEGALARRANGEMENT_IDX : number = 2;
    public static UNKNWON_IDX : number = 3;
    public static ACCOUNT_IDX : number = 4;
    public static HOUSE_IDX : number = 5;
    public static ATOM_IDX : number = 6;
    public static WCR_IDX : number = 7;
    public static PERSON_DOI_IDX : number = 8;
    public static WEAPON_DOI_IDX : number = 9;
    public static PHONE_DOI_IDX : number = 10;
    public static ALERT_DOI_IDX : number = 11;
    public static FILE_DOI_IDX : number = 12;
    public static CASE_DOI_IDX : number = 13;
    public static EVENT_DOI_IDX : number = 14;
    public static INSURANCEPOLICY_DOI_IDX : number = 15;
    public static EMAIL_DOI_IDX : number = 16;
    public static CELLSITE_DOI_IDX : number = 17;
    public static IDENTIFICATION_DOI_IDX : number = 18;
    public static VEHICLE_DOI_IDX : number = 19;
    public static TOOLOBJECT_DOI_IDX : number = 20;
    public static HOMELOCATION_DOI_IDX : number = 21;
    public static ENTITYGROUP_DOI_IDX : number = 22;
    public static ENTITYLINKEDGROUP_DOI_IDX : number = 23;
    public static PAYMENTCARD_DOI_IDX : number = 24;
    public static PAYMENTTERM_DOI_IDX : number = 25;
    public static AUDITLOG_DOI_IDX : number = 26;
    public static AIRCRAFT_DOI_IDX : number = 27;
    public static MODUSOPERANDI_DOI_IDX : number = 28;
    public static GENERICOBJECT_DOI_IDX : number = 29;
    public static ARTANTIQUE_DOI_IDX : number = 30;
    public static DOINOTES_DOI_IDX : number = 31;
    public static ELECTEQUIP_DOI_IDX : number = 32;
    public static IPADDRESS_DOI_IDX : number = 33;
    public static EMAILDOC_DOI_IDX : number = 2007;
    public static REMINDER_DOI_IDX : number = 34;
    public static PURCHASEORDER_DOI_IDX : number = 36;
    public static INVOICEORDER_DOI_IDX : number = 37;
    public static PAYMENTEVENT_DOI_IDX : number = 38;
    public static GOODSRECEIPTEVENT_DOI_IDX : number = 39;
    public static MEDICINE_DOI_IDX : number = 40;
    public static WORDS_DOI_IDX : number = 41;
    public static VESSEL_DOI_IDX : number = 42;
    public static CREDITLETTER_DOI_IDX : number = 43;
    public static ADDITIONALINFO_DOI_IDX : number = 44; 
    
            public static CLIENT_LIMIT_IDX : number = 1000; // All the IDX upper this limit are generated by the system
                
        public static LINK_IDX : number = 2000;
        public static TRANSACTIONS_ACCOUNT_IDX : number = 2001;
        public static TRANSACTIONS_PHONE_IDX : number = 2002;
        public static TRANSACTIONS_CARD_IDX : number = 2003;
        public static TRANSACTIONS_CELLSITE_IDX : number = 2004;
        public static TRANSACTIONS_TRANSPORT_IDX : number = 2005;
        public static TRANSACTIONS_IPIP_IDX : number = 2006;
        public static TRANSACTIONS_EMAILEMAIL_IDX : number = 2007;
        public static TRANSACTIONS_SWIFT_IDX : number = 2008;
        public static TRANSACTIONS_PAYMENTDETAILS_IDX : number = 2009;
        public static TRANSACTIONS_SWIFT_ACCOUNT_IDX : number = 2010;
        
        public static TRANSACTION_LINKS_TYPE : number = -8888;
                
        public static COUNTRY_RISK_DATA_IDX : number = 10002;
        public static OCCUPATION_DATA_IDX : number = 10003;
        public static OCCUPATION_RISK_DATA_IDX : number = 10004;
        
        public static LOOKUP_IDX : number = 1000;
        public static COUNTRY_DATA_IDX : number = 1001;
        
        public static NO_OBJECTS_IDX : number = 9998;
        
        public static LIMIT_ATOM_CLIENT : number = 10000000;
            
        public static TITLE_MR_IDX : number = 1;
        public static TITLE_MRS_IDX : number = 2;
        public static TITLE_MS_IDX : number = 3;
        public static TITLE_PROF_IDX : number = 4;
        public static TITLE_DR_IDX : number = 5;

        public static COMBO_SEX_M : string="m";
        public static COMBO_SEX_F : string="f";
        
        public static FILETYPE_MSG : string="msg";
        public static FILETYPE_XLS : string="xls";
        public static FILETYPE_XLSX : string="xlsx";
    
        public static TYPE_COMPANY : string="c";
        public static TYPE_PERSON : string="p";
        
        public static MINOR_AGE : number = 18;
                
        // Magic String :-)
        public static DEFAULT_LINKID : string="S-RET1001";
        public static DEFAULT_RECONCILITEDLINKID : string="S-RET442";
        public static DEFAULT_REGROUPLINK : string="SRET-9997";
        
        public static DEFAULT_NEWUID : string="-9999";
        public static DEFAULT_ATOMUID : string="ATOM";
    
        public static TRANSACTION_DEBIT_DIRECTION : string="D";
        public static TRANSACTION_CREDIT_DIRECTION : string="C";        
        
        // Search Type
        public static SEARCH_TYPE_ENTITY:number = 0;
        public static SEARCH_TYPE_RELATIONS:number = 1;
        public static SEARCH_TYPE_TRANSACTIONS:number = 2;
        public static SEARCH_TYPE_DOCUMENTS:number = 3;
        public static SEARCH_TYPE_FIELD:number = 4;
        public static SEARCH_TYPE_CATEGORYRELATION:number = 5;
        
        public static MS_IN_YEAR:Number =31536000000;
        public static MS_IN_MONTH:number = 2592000000;
        public static MS_IN_DAY:Number  =86400000;
        public static MS_IN_HOUR:Number =3600000;
        public static MS_IN_MN:Number   =60000;
        
        // Download Constant
        //public static URL_BASE : string="http://localhost:8080/NameMatchingWeb/";
        public static CSV_DOWNLOAD_END_POINT : string= "CSVHandler";
        public static ATTACH_DOCUMENT_END_POINT : string="AttachDocument";
        public static EXPORTDOCUMENT_DOCUMENT_END_POINT : string="ZipDocumentExportServlet";
        public static EXPORT_ENCRYPTED_DOCUMENT_DOCUMENT_END_POINT : string="ZipEncryptedDocumentExportServlet";
        public static EXPORTIMPORTSCENARIO_END_POINT : string="ScenarioImportExport";
        public static EXPORTREPORTSCENARIO_END_POINT : string="ScenarioReportExport";
        public static DATA_EXPORT_END_POINT : string="DataExportServlet";
        public static DATA_TREE_EXPORT_END_POINT : string="ExportListServlet";
        public static REPORT_DOWNLOAD_END_POINT : string="DownloadReport";
        public static CONFIG_IMPORTEXPORT_END_POINT : string="ConfigImportExport";
        public static CRAWLER_CONFIGURATION_REPORT_END_POINT : string="CrawlerConfigurationReport";
        public static CRAWLER_EXECUTION_REPORT_END_POINT : string="CrawlerExecutionReport";
        public static PRIVACY_FILE_UPLOAD_END_POINT : string="UploadPrivacyFile";
        public static PGP_KEY_FILE_UPLOAD_END_POINT : string="UploadPGPKeyFile";
        
        // Risk Constant
        public static CATEGORY_PEP : string="PEP";
        public static CATEGORY_TERRORIST : string="TERRORIST";
        public static CATEGORY_TERRORISM : string="TERRORISM";
        public static CATEGORY_MILITARY : string="MILITARY";
        public static CATEGORY_RELIGION : string="RELIGION";
        public static CATEGORY_CRIME : string="CRIME";
        public static CATEGORY_PHONE_LANDLINE : string="LAND LINE";
        public static CATEGORY_MINOR : string="MINOR";
        public static CATEGORY_BAD : string="BAD";
        public static CATEGORY_WATCHED : string="WATCHED";
        public static CATEGORY_BLACKLISTED : string="BLACKLISTED";
        public static CATEGORY_INDIVIDUAL : string="INDIVIDUAL";
        public static CATEGORY_LEGAL : string="LEGAL";

        // Risk Level Constant
        public static RISK_LEVEL_SEVERE:number = 4;
        public static RISK_LEVEL_HIGH:number = 3;
        public static RISK_LEVEL_ELEVATED:number = 2;
        public static RISK_LEVEL_GUARDED:number = 1;
        public static RISK_LEVEL_LOW:number = 0;
        
        public static DATA_ORIGIN_ONLINE : string="ONLINE";
        public static DATA_ORIGIN_BATCH : string="BATCH";
        public static DATA_ORIGIN_REALTIME : string="REALTIME";
        public static DATA_ORIGIN_WORKFLOW : string="WORKFLOW";
         
        public static MAX_ENTITIES_BEFORE_ATOM : number = 100;

        public static DEFAULT : string="DEFAULT";
        
        // Audit Category
        public static AUD_ENTITY_CATEGORY : string="ENTITY";
        public static AUD_ENTITY_WORKFLOW : string="WORKFLOW";
        public static AUD_SECURITY_CATEGORY : string="SECURITY";
        public static AUD_APPLICATION_CATEGORY : string="APPLICATION";
        public static AUD_FUNCTIONAL_CATEGORY : string="FUNCTIONAL";
        public static AUD_GENERAL_CATEGORY : string="GENERAL";
        public static AUD_CRAWLER_CATEGORY : string="CRAWLER";
        public static AUD_USER_CATEGORY : string="USER";
        public static AUD_REALTIME_CATEGORY : string="REALTIME";
        public static AUD_SWIFT_CATEGORY : string="SWIFT";
        public static AUD_IMPORTLIST_CATEGORY : string="IMPORTLIST";
        public static AUD_ALL_CATEGORIES : string="FULL";
                
        // Accordion Constant
        public static ACCORDION_SINGLEDISPLAY : number = 0;
        public static ACCORDION_EMPTY_IDX : number = 1;
        public static ACCORDION_MULTISELECT : number = 2;        
        public static GEO_PARAMETERS_IDX : number = 3;
        public static ACCORDION_ADVANCEDSEARCH : number = 4; 
        public static ACCORDION_ENTITY_SEARCH : number = 5;
        public static ACCORDION_360SEARCH : number = 6;
        public static GEO_ENTITY_SEARCH_IDX : number = 7;
        public static GEO_CODABLE_ENTITIES_IDX: number =8;
        
        public static ZOOM1 : string="FULL";
        public static ZOOM2 : string="POINTERS";
        public static ZOOM3 : string="DOTS";
        public static CLICKED : string="CLICKED";
        
        //Right click context menu
        public static INTELLI : string=String.fromCharCode(169)+"iDETECT";
        
        //Ctrl +A click
        public static CTRLA : number = 200;
        
        //Error Management
        public static ERROR : string="red";
        public static INFO : string="white";
        public static SUCCESS : string="green";
        
        //Geospacial
        public static EARTHRADIUS : number = 6371; //3,963 miles to be put in a constant
        public static D2R:Number = Math.PI/180; //Convert degrees to radians make constant
        public static R2D:Number = 180/Math.PI; //Converts radians to degrees need to make constant
        public static A:Number = 6378137; //Ellipsoïde WGS 
        public static B:Number = 6356752.3142; //Ellipsoïde WGS 
        public static F:Number = 1/298.257223563; 
        
        // Search Related Entities and User Preferences
        public static TYPE_ENTITY : number = 0;
        public static TYPE_RELATION : number = 1;
        
        //Logical view type
        public static LOGICAL_VIEW_STRUCTURED : number = 1;
        public static LOGICAL_VIEW_UNSTRUCTURED : number = 2;
        public static LOGICAL_VIEW_LOOKUP : number = 3;
        public static LOGICAL_VIEW_USERS : number = 100;
        public static LOGICAL_VIEW_GROUPS : number = 101;
        public static LOGICAL_VIEW_ROLES : number = 102;
        public static LOGICAL_VIEW_ORGUNITS : number = 103;
        public static LOGICAL_VIEW_SCHEDULER : number = 104;
        public static LOGICAL_VIEW_CRAWLER : number = 105;
        public static LOGICAL_VIEW_WORKFLOW : number = 106;
        
        //Import Type
        public static DATA_IMPORT_TYPE_MERGE : number = 0;
        public static DATA_IMPORT_TYPE_INSERT : number = 1;
        public static DATA_IMPORT_TYPE_DELETE : number = 2;
        
        
        //Batch Constants
        public static BATCH_OTHER_IDX : number = 0;
        public static BATCH_OTHER_RECORD_IDX : number = 1;
        public static BATCH_DEFAULT_RECORD_IDX : number = 99999;
        
        ///Capitalization
        public static CAP_TO_UPPER : number = 1;
        public static CAP_TO_LOWER : number = 2;
        public static CAP_TO_INITUPPER : number = 3;
        public static CAP_TO_TOGGLE : number = 4;
        public static CAP_TO_EACHWORD : number = 5;
        
        //Country
        public static COU_ISO2 : number = 1;
        public static COU_ISO3 : number = 2;
        public static COU_NAME : number = 3;
        public static COU_CODE : number = 4;
        
        public static BATCH_ACTIONS_ADDPREFIX : number = 0;
        public static BATCH_ACTIONS_ADDSUFFIX : number = 1;
        public static BATCH_ACTIONS_REMOVEPREFIX : number = 2;
        public static BATCH_ACTIONS_REMOVESUFFIX : number = 3;
        public static BATCH_ACTIONS_FINDREPLACE : number = 4;
        public static BATCH_ACTIONS_EXTRACT : number = 5;
        public static BATCH_ACTIONS_TRIM : number = 6;
        public static BATCH_ACTIONS_EXTRACT_CHAR : number = 7;
        public static BATCH_ACTIONS_CAPITALIZATION : number = 8;
        public static BATCH_ACTIONS_DATE : number = 9;
        public static BATCH_ACTIONS_PREFIXWITHCOLUMN : number = 10;
        public static BATCH_ACTIONS_SUFFIXWITHCOLUMN : number = 11;
        public static BATCH_ACTIONS_NUMERIC : number = 12;
        public static BATCH_ACTIONS_COUNTRY : number = 13;
        public static BATCH_ACTIONS_ORGUNIT : number = 14;
        public static BATCH_ACTIONS_UIDRESOLVE : number = 15;
        public static BATCH_ACTIONS_SEX : number = 16;
        public static BATCH_ACTIONS_PATTERN : number = 21;
        public static BATCH_ACTIONS_NEW_COLUMN : number = 22;
        
        // Only for front end use.
        public static BATCH_TYPE_PREFIXSUFFIX : number = 0;
        public static BATCH_TYPE_STRING : number = 1;
        public static BATCH_TYPE_DATE : number = 2;
        public static BATCH_TYPE_NUMERIC : number = 3;
        public static BATCH_TYPE_LOOKUP : number = 4;
        public static BATCH_TYPE_ORGUNIT : number = 5;
        public static BATCH_TYPE_UIDRESOLVE : number = 6;
        public static BATCH_TYPE_SEX : number = 7;
        public static BATCH_TYPE_LEGALENTITY : number = 8;
        public static BATCH_TYPE_RELATION : number = 9;
        
        // Main split of the batch
        public static BATCH_STRUCTURED : number = 0;
        public static BATCH_UNSTRUCTURED : number = 1;
        public static BATCH_CRAWLER : number = 101;
        public static BATCH_USERS : number = 102;
        public static BATCH_GROUPS : number = 103;
        public static BATCH_ROLES : number = 104;
        public static BATCH_ORGUNIT : number = 105;
        public static BATCH_SCHEDULER : number = 106;
        public static BATCH_WORKFLOW : number = 107;
        
        
        //Windows Like Navigator
        public static BRANCH_START_IDX : number = 100;
        public static NAV_DATABASE_ICON : number = 0;
        public static NAV_FOLDER_ICON : number = 1;
        public static UNKNOW_FILE_TYPE : string="0";
        public static STRUCTURED : string="1";
        public static LOOKUP : string="3";
        public static WHITELIST : string="4";
        public static UNSTRUCTURED : string="2";
        public static RELATIONSHIP : string="5";
        
        //Internal list aka Logical Views
        public static TYPE_DATE : string = "DATE";
        
        public static FILTER_DEFAULT : number = 0;
        public static FILTER_CHECKBOX : number = 1;
        public static FILTER_PROPERTIES : number = 2;
        public static FILTER_DATE : number = 3;
        public static FILTER_COMBO : number = 4;
        public static FILTER_ADVTEXT : number = 5;
        public static FILTER_ADVCOMBO : number = 6;
        public static FILTER_ADVNUMBER : number = 7;
        public static FILTER_ADVDATE : number = 8;
        public static FILTER_ADVDATETIME : number = 9;
        public static FILTER_ADVCHECKBOX : number = 10;
        
        //Administration constants
        public static NAV_USERS : string="2";
        public static NAV_GROUPS : string="3";
        public static NAV_ROLES : string="4";
        public static NAV_ORGUNIT : string="5";
        public static NAV_DOMAINS : string="6";
        public static NAV_SCHEDULER : string="7";
        public static NAV_OVERVIEW : string="8";
        public static NAV_AUDIT : string="9";
        public static NAV_RISK : string="10";
        public static NAV_SINGLE : string="11";
        public static NAV_MULTI : string="12";
        public static NAV_LOGICAL : string="13";
        public static NAV_LOGICAL_FIELDS : string="20";
        public static NAV_CRAWLERS : string="14";
        public static NAV_WORKFLOWS : string="15";
        public static NAV_WORKFLOW_STATUS : string="16";
        public static NAV_BATCH_STATUS : string="17";
        public static NAV_SYSTEM_PROPERTIES : string="18";
        public static NAV_JOB_ERRORS : string="19";
        public static NAV_USERS_SESSIONS : string="21";
        public static NAV_SCENARIO_TIME_TABLE : string="22";
        public static NAV_STAT_GRAPHICS : string="23";
        public static NAV_STAT_SERIES : string="24";
        public static NAV_STAT_REPORTS : string="25";
        public static NAV_REPORTS : string="26";
        public static NAV_REPORT_PARAMETERS : string="27";
        
        public static NAV_AUDIT_OVERVIEW : string="28";
        public static NAV_AUDIT_SECURITY : string="29";
        public static NAV_AUDIT_GENERAL : string="30";
        public static NAV_AUDIT_APPLICATION : string="31";
        public static NAV_AUDIT_ENTITY : string="32";
        public static NAV_AUDIT_USER : string="33";
        public static NAV_AUDIT_CRAWLER : string="34";
        public static NAV_AUDIT_REALTIME : string="40";
        public static NAV_AUDIT_FUNCTIONAL : string="41";
        public static NAV_AUDIT_SWIFT : string="42";
        public static NAV_AUDIT_IMPORTLIST : string="43";
        
        public static NAV_STAT_FILTERS : string="35";
        public static NAV_STAT_OPERATIONS : string="36";
        public static NAV_AUDIT_SCENARIO : string="37";
        
        public static NAV_PRIVACY_FILES : string="38";
        
        public static NAV_DOM_PARENT : string = "95";
        public static NAV_DOM_CHILD : string = "96";
        public static NAV_ORG_PARENT : string = "97";
        public static NAV_ORG_CHILD : string = "98";
        public static NAV_PERMISSION : string="99";
        
        //Workflow Constants
        public static WORKFLOW_TYPE_CASE : number = 1;
        public static WORKFLOW_TYPE_ALERT : number = 2;
        public static WORKFLOW_TYPE_ANALYSIS_DELETE : number = 3;
        public static WORKFLOW_TYPE_ANALYSIS_ADD : number = 4;
        public static WORKFLOW_TYPE_ANALYSIS_EDIT : number = 5;
        public static WORKFLOW_TYPE_ANALYSIS_PUBLISH : number = 6;
        
        //Geospacial Constants
        public static earthRadius : number = 6371; //3,963 miles to be put in a constant
        public static d2r:Number = Math.PI/180; //Convert degrees to radians make constant
        public static r2d:Number = 180/Math.PI; //Converts radians to degrees need to make constant
        public static a:Number = 6378137; //Ellipsoïde WGS 
        public static b:Number = 6356752.3142; //Ellipsoïde WGS 
        public static f:Number = 1/298.257223563; 
        public static HEATMAP : string = "heatmap";
        public static POINTERS : string = "pointers";
        public static HM_TRANSPARANCY : string = "hmTransparancy";
        public static HM_RADIUS : string = "hmRadius";
        public static HM_COLOR : string= "hmColor";
        
        //Lookups
        public static LOOKUP_COUNTRY_IDX:number = 0;
        public static LOOKUP_OCCUPATION_IDX:number = 1;
        
        //Datatypes
        /** Datatype TEXT value */
        public static TEXT : string="TEXT";
        /** Datatype LARGETEXT value */
        public static LARGETEXT : string="LARGETEXT";
        /** Datatype NUMBER value */
        public static NUMBER : string="NUMBER";
        /** Datatype FINANCIAL value */
        public static FINANCIAL : string="FINANCIAL";
        /** Datatype DATE value */
        public static DATE : string="DATE";
        /** Datatype FINANCIALDATE value */
        public static FINANCIALDATE : string="FINANCIALDATE";
        /** Datatype DATETIME value */
        public static DATETIME : string="DATETIME";
        /** Datatype LIST value */
        public static LIST : string="LIST";
        /** Datatype COUNTRY value */
        public static COUNTRY : string="COUNTRY";
        /** Datatype OCCUPATION value */
        public static OCCUPATION : string="OCCUPATION";
        /** Datatype ACTIVITY value */
        public static ACTIVITY : string="ACTIVITY";
        /** Datatype CURRENCY value */
        public static CURRENCY : string="CURRENCY";
        /** Datatype COMPANYCODE value */
        public static COMPANYCODE : string="COMPANYCODE";
        /** Datatype ORGUNIT value */
        public static ORGUNIT : string="ORGUNIT";
        /** Datatype PASSWORD value */
        public static PASSWORD : string="PASSWORD";
        /** Datatype SCENARIO value */
        public static SCENARIO : string="SCENARIO";
        /** Datatype INTERNALLIST value */
        public static INTERNALLIST : string="INTERNALLIST";
        /** Datatype OINTERNALLISTMULTI(Ops internal list multiselection) value */
        public static OINTERNALLISTMULTI : string="OINTERNALLISTMULTI";
        /** Datatype DINTERNALLISTMULTI(Doi internal list multiselection) value */
        public static DINTERNALLISTMULTI : string="DINTERNALLISTMULTI";
        /** Datatype MINTERNALLISTMULTI(Mag internal list multiselection) value */
        public static MINTERNALLISTMULTI : string="MINTERNALLISTMULTI";
        /** Datatype ALIST value */
        public static ALIST : string="ALIST";
        /** Datatype SLIST value */
        public static SLIST : string="SLIST";
        /** Datatype ULIST value */
        public static ULIST : string="ULIST";
        /** Datatype GLIST value */
        public static GLIST : string="GLIST";
        /** Datatype PLIST value */
        public static PLIST : string="PLIST";
        /** Datatype USERS value */
        public static USERS : string="USER";
        /** Datatype CHECK value */
        public static CHECK : string="CHECK";
        /** Datatype IMPORT_TYPE value */
        public static IMPORT_TYPE : string="IMPORT_TYPE";
        /** Datatype BATCH_TEMPLATES value */
        public static TEMPLATES : string="BATCH_TEMPLATES";
        /** Datatype STRING value */
        public static STRING : string="STRING";
        /** Datatype SEX value */
        public static SEX : string="SEX";
        /** Datatype ENTITY_FIELD(available fields of entities) value */
        public static ENTITY_FIELD : string="ENTITY_FIELD";
        /** Datatype FOLDER value */
        public static FOLDER : string="FOLDER";
        /** Datatype FILENAME value */
        public static FILENAME : string="FILENAME";
        /** Datatype FILEPATH value */
        public static FILEPATH : string="FILEPATH";
        /** Datatype BANKBRANCH value */
        public static BANKBRANCH : string="BANKBRANCH";
        /** Datatype CRAWLERS */
        public static CRAWLERS : string="CRAWLERS";
        /** Datatype DELIMITEDLIST value */
        public static DELIMITEDLIST : string="DELIMITEDLIST";
        
        //Data Tab
        public static AVERAGE_ROWSIZE:Number = 128 * 1024;
        
        //ADMIN
        
        //Web Crawler
        public static RSS_TYPE:Number = 0;
        public static WWW_TYPE:Number = 1;
        
        //Orgunit links
        public static ORG_UNLINKED:Number = 0;
        public static ORG_LINK_PARENT:Number = 1;
        public static ORG_LINK_CHILD:Number = 2;
        
        //STATISTICS
        public static DEFAULT_VISIBLE_CANVAS_OBJECTS:Number = 20;
        public static STAT_FOLDERS : string = "0";
        public static STAT_REPORTS : string = "1";
        public static STAT_GRAPHICS : string = "2";
        public static STAT_GRAPHIC : string = "GRAPHIC";
        public static STAT_GRAPHIC_LIST : string = "GRAPHICS";
        
        //USERS PEP/MIT,...
        public static PWD_PEP_DAILY : string = "0";
        public static PWD_PEP_WEEKLY : string = "1";
        public static PWD_PEP_MONTHLY : string = "2";
        public static PWD_PEP_QUARTERLY : string = "3";
        public static PWD_PEP_HYEARLY : string = "4";
        public static PWD_PEP_YEARLY : string = "5";
        
        public static DEFAULT_GRAPH:Number = 0;
        
        //CANVAS
        public static CANVAS_ADMIN:Number = 0;
        public static CANVAS_OVERVIEW:Number = 1;
        public static CANVAS_ORGUNIT:Number = 2;
        public static CANVAS_AUDIT:Number = 3;
        
        public static OK : string = "OK";
        public static APPLY : string = "APPLY";
        public static DUPLICATE_SUFFIX : string = "copy";

        //Icons sizes
        public static ICON_SMALL : string = "Small";
        public static ICON_MEDIUM : string = "Medium";
        public static ICON_BIG : string = "Big";

        //RULES,SCENARIOS,PROFILES
        public static RULES:Number = 0;
        public static SCENARIOS:Number = 1;
        public static PROFILES:Number = 2;
        
        //LOGICAL TYPES
        public static LOGICAL_TYPE_SEARCH : number = 1;
        public static LOGICAL_TYPE_LOOKUP : number = 2;
        public static LOGICAL_TYPE_OTHER : number = 3;
        
        //Data Source Constants
        public static DATASOURCE_TYPE_STRUCTURED : number = 1;
        public static DATASOURCE_TYPE_UNSTRUCTURED : number = 2;
        
        //Objects categories could be send to the linkchart
        public static ENTITY : number = 0;
        public static RELATION : number = 1;
        public static TRANSACTION : number = 2;
        
        //See Deleted Data
        public static SEE_DELETED_DATA_NO : number = 0;
        public static SEE_DELETED_DATA_YES : number = 1;
        public static SEE_DELETED_DATA_BOTH : number = 2;
        
        //Privac file type
        public static PGP_KEY : String = "PGP_KEY";
        public static CERTIFICATE : String = "CERTIFICATE";
    
}