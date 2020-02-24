'use strict';

export class EnglishProperties {

  public static i18nConfig = {
    locale: 'en',
    messages: {
      "login.username": "Username",
      "login.password": "Password",
      "login.login": "Log In",
      "login.welcome": "Welcome Back",
      "login.intro": "This is the intro and I have no clue what to write here", //TODO edit the intro
      "login.documentation": "Documentation",
      "global.actions": "actions",
      "global.more": "More",
      "global.data": "Data",
      "global.alert": "Alerts",
      "global.dashboard": "Dashboard",
      "global.analysis": "Analysis",
      "global.admin": "Admin",
      "global.detection": "Detection",
      "global.rowcard": "Row Cards",
      "global.tableview": "Table View",
      "global.add": "Add",
      "global.export": "Export",
      "global.search": "Search",
      "data.database": "Database",
      "data.lookup": "Lookup",
      "data.system": "System",
      "data.newdata": "New Data",
      "topbar.messages": "Messages",
      "topbar.notification": "Notifications",
      "topbar.settings": "Settings",
      "topbar.help": "Help",
      "topbar.about": "About",
      "topbar.logout": "Logout",
      "button.filter": "Filter",
      "button.togglesidebar": "Toggle Sidebar",
      "basicinfo.score": "Score",
      "basicinfo.priority": "Priority",
      "basicinfo.date": "Date",
      "basicinfo.status": "Status",
      "file.upload": "Upload a file",
      "sidebar.related": "Related",
      "sidebar.history": "History",
      "global.users": "Users",
      "global.groups": "Groups",
      "global.roles": "Roles",
      "global.orgunits": "Organization Units",
      "global.risks": "Risks",

      /**
       * Login Page en properties
       **/
      'login.greetings': `Welcome back`,
      'login.instruction': `Please enter your username and password, I log you in.`,
      'login.userName': `Username`,
      // 'login.password': `Password`,
      // 'login.login': `Log in`,
      'login.validateName': `Please Enter Your User Name`,
      'login.validatePassword': `Please Enter Your Password`,
      // 'login.documentation': `Documentation`,

      /**
       * TopBar en properties
       **/
      'topBar.settings': `Settings`,
      'topBar.help': `Help`,
      'topBar.about': `About`,
      'topBar.logout': `Log out`,
      'topBar.messages': `Messages`,
      'topBar.notifications': `Notifications`,

      /**
       * side Bar en properties
       **/
      'sideBar.data': `Data`,
      'sideBar.alerts': `Alerts`,
      'sideBar.cases': `Cases`,
      'sideBar.analysis': `Analysis`,
      'sideBar.personal': `Personal`,
      'sideBar.detection': `Detection`,
      'sideBar.rules': `Rules`,
      'sideBar.scenarios': `Scenarios`,
      'sideBar.profiles': `Profiles`,
      'sideBar.admin': `Admin`,
      'sideBar.users': `Users`,
      'sideBar.groups': `Groups`,
      'sideBar.roles': `Roles`,
      'sideBar.organizationUnits': `Organization Units`,
      'sideBar.risks': `Risks`,
      'sideBar.logicalViews': `Logical views`,
      'sideBar.sheduler': `Scheduler`,
      'sideBar.overview': `Overview`,
      'sideBar.webCrawlers': `Web Crawlers`,
      'sideBar.logs': `Logs`,
      'sideBar.workflows': `Workflows`,
      'sideBar.settings': `Settings`,
      'sideBar.scheduler': `Scheduler`,
      'sideBar.dashboard': `Dashboard`,

      /**
       * Alert Page en properties
       **/
      'alert.actions': `Actions`,
      'alert.documents': `Documents`,
      'alert.transactions': `Transactions`,
      'alert.events': `Events`,
      'alert.entities': `Entities`,
      'alert.alertedEntities': `Alerted Entities`,
      'alert.history': `History`,
      'alert.details': `Details`,
      'alert.related': `Related`,
      'alert.linkCharts': `Link Charts`,
      'alert.proprieties': `Proprieties`,
      'alert.sentToAnalysis': `Sent to Analysis`,
      'alert.analysis': `Analysis`,
      'alert.comments': `Comments`,
      'alert.uploadFile': `Upload a file`,
      'alert.parameters': `Parameters`,
      'alert.recordsPerPage': `Records Per Page`,
      'alert.intervalOfRefreshTimer': `Interval Of Refresh Timer`,
      'alert.defaultAlertDisplay': `Default Alert Display`,
      'alert.transactionField': `Transaction Field`,

      /**
       * Admin Page en properties
       **/
      'admin.manageRisks': `Manage risks`,
      'admin.fullName': `Full Name`,
      'admin.importable': `Importable`,
      'admin.viewable': `Viewable`,
      'admin.general': `General`,
      'admin.security': `Security`,
      'admin.history': `History`,
      'admin.parameters': `Parameters`,

      'admin.addUser': `+ AddUser`,
      'admin.addGroup': `+ AddGroup`,
      'admin.addRole': `+ AddRole`,
      'admin.newRole': `+ New Role`,
      'admin.addOrganization': `+ Add Organization`,
      'admin.newJob': `+ New Job`,
      'admin.addWorkFlow': `+ Add Workflow`,
      'admin.editRole': `Edit Roles`,
      'admin.deleteRole': ` Delete Roles`,
      'admin.deleteRoleTitle': ` Are you sure you want to delete this Role?`,
      

      /**
       * Global en properties for entire App
       **/
      'global.cancel': `Cancel`,
      'global.submit': `Submit`,
      'global.save': `Save`,
      'global.name': `Name`,
      'global.rename': `Rename`,
      'global.date': `Date`,
      'global.start':`Start`,
      'global.stop':`Stop`,
      // 'global.add': `Add`,
      'global.edit': `Edit`,
      'global.delete': `Delete`,
      'global.modify': `Modify`,
      // 'global.more': `More`,
      'global.apply': `Apply`,
      'global.sort': `Sort`,
      'global.new': `+ New`,
      'global.noMoreItem': `No more item...`,
      'global.noMoreData': `No more data...`,
      'global.noMoreAlerts': `No more alerts...`,
      'global.noMoreCases': `No more cases...`,
      'global.noMoreDetection': `No more detection...`,
      'global.noMoreFileAvailable': `No more files available/selected...`,
      'global.wip': `Yet To Be Integrated`,
      'global.validate': `Validate`,
      'global.properties': `Properties`,
      'global.history': `History`,
      'global.duplicate': `Duplicate`,
      // 'global.analysis': `Analysis`,
      'global.itemSelected': `item Selected`,
      'global.display': `Display`,
      'global.filter': `Filter`,
      'global.showAttributes': 'Show Attributes',
      'global.noMoreHistory' : 'No More History',

      /**
       * Filter en properties for entire App
       **/
      'filter.filter': `Filter`,
      'filter.actions': `Actions`,
      'filter.addFilter': `+ Add filter`,
      'filter.exactMatch': `Exact Match`,
      'filter.contains': `Contains`,
      'filter.startWith': `Start with`,
      'filter.endWith': `End with`,
      'filter.removeFilters': `Remove Filter`
    }
  };

}
