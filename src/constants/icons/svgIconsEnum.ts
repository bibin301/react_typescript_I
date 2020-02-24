
export interface iconInterface {
    name: string,
    url: string,
    title: string
}

export default class SvgIconEnum {
    private static imagePathUrl: string = '/src/common/svg/icons/';
    private static imageUrl: string = '/src/common/svg/';
    public static CARETLEFTCLOSE: iconInterface = { name: 'caret', title: 'close', url: SvgIconEnum.imagePathUrl + 'caret-left.svg#caret-left' };
    public static CROSS: iconInterface = { name: 'Calque_1', title: 'cross', url: SvgIconEnum.imagePathUrl + 'cross.svg#Calque_1' };
    public static SIDEBARALERT: iconInterface = { name: 'sidebar-alert', title: 'Alert', url: SvgIconEnum.imagePathUrl + 'alert-medium.svg#sidebar-alert' };
    public static SIDEBARANALYSIS: iconInterface = { name: 'sidebar-analysis', title: 'Analysis', url: SvgIconEnum.imagePathUrl + 'linkchart-medium.svg#linkchart-medium' };
    public static ANALYSIS: iconInterface = { name: 'analysis', title: 'Analysis', url: SvgIconEnum.imagePathUrl + 'linkchart.svg#linkchart' };
    public static SIDEBARDETECTION: iconInterface = { name: 'sidebar-detection', title: 'Detection', url: SvgIconEnum.imagePathUrl + 'rules-medium.svg#rules-medium' };
    public static SIDEBARDATA: iconInterface = { name: 'sidebar-data', title: 'Data', url: SvgIconEnum.imagePathUrl + 'folder-medium.svg#folder-medium' };
    public static SIDEBARADMIN: iconInterface = { name: 'sidebar-admin', title: 'Admin', url: SvgIconEnum.imagePathUrl + 'settings-medium.svg#settings-medium' };
    public static CARETDOWN: iconInterface = { name: 'caret', title: 'Down', url: SvgIconEnum.imagePathUrl + 'caret-down.svg#caret-down' };
    public static DELETE: iconInterface = { name: 'delete', title: 'Delete', url: SvgIconEnum.imagePathUrl + 'delete.svg#delete' };
    public static FILTER: iconInterface = { name: 'filter', title: 'Filter', url: SvgIconEnum.imagePathUrl + 'filter.svg#filter' };
    public static SORT: iconInterface = { name: 'sort', title: 'Sort', url: SvgIconEnum.imagePathUrl + 'sort.svg#sort' };
    public static BIDIRECTIONALMEDIUM: iconInterface = { name: 'bidirectional-medium', title: 'Bidirectional', url: SvgIconEnum.imagePathUrl + 'bidirectional-medium.svg#bidirectional-medium' };
    public static BIDIRECTIONAL: iconInterface = { name: 'bidirectional', title: 'Bidirectional', url: SvgIconEnum.imagePathUrl + 'bidirectional.svg#bidirectional' };
    public static COLUMNS: iconInterface = { name: 'columns', title: 'Columns', url: SvgIconEnum.imagePathUrl + 'columns.svg#columns' };
    public static LIST: iconInterface = { name: 'list', title: 'List', url: SvgIconEnum.imagePathUrl + 'list.svg#list' };
    public static LISTALT: iconInterface = { name: 'list-alt', title: 'List', url: SvgIconEnum.imagePathUrl + 'list-alt.svg#list-alt' };
    public static SETTINGS: iconInterface = { name: 'settings', title: 'Settings', url: SvgIconEnum.imagePathUrl + 'settings.svg#settings' };
    public static SIDEBAR: iconInterface = { name: 'sidebar', title: 'Sidebar', url: SvgIconEnum.imagePathUrl + 'sidebar.svg#sidebar' };
    public static RISK: iconInterface = { name: 'risk', title: 'Risk', url: SvgIconEnum.imagePathUrl + 'risk.svg#risk' };
    public static PERSON: iconInterface = { name: 'person', title: 'Person', url: SvgIconEnum.imagePathUrl + 'person.svg#person' };
    public static PERSONMEDIUM: iconInterface = { name: 'person-medium', title: 'Person', url: SvgIconEnum.imagePathUrl + 'person-medium.svg#person-medium' };
    public static PEOPLE: iconInterface = { name: 'people', title: 'People', url: SvgIconEnum.imagePathUrl + 'people.svg#people' };
    public static PEOPLEMEDIUM: iconInterface = { name: 'people-medium', title: 'People', url: SvgIconEnum.imagePathUrl + 'people-medium.svg#people-medium' };
    public static ROLEMEDIUM: iconInterface = { name: 'role-medium', title: 'Role', url: SvgIconEnum.imagePathUrl + 'role-medium.svg#role-medium' };
    public static STRUCTUREMEDIUM: iconInterface = { name: 'structure-medium', title: 'Structure', url: SvgIconEnum.imagePathUrl + 'structure-medium.svg#structure-medium' };
    public static DROPDOWN: iconInterface = { name: 'dropdown', title: 'Dropdown', url: SvgIconEnum.imagePathUrl + 'dropdown.svg#dropdown' };
    public static SEARCH: iconInterface = { name: 'search', title: 'Search', url: SvgIconEnum.imagePathUrl + 'search.svg#search' };
    public static EXPORT: iconInterface = { name: 'export', title: 'Export', url: SvgIconEnum.imagePathUrl + 'export.svg#export' };
    public static IDETECTMONOGRAM: iconInterface = { name: 'idetect-monogram', title: 'IdetectMonogram', url: SvgIconEnum.imageUrl + 'idetect-monogram.svg#idetect-monogram' };
    public static TIMER: iconInterface = { name: 'timer', title: 'TIMER', url: SvgIconEnum.imagePathUrl + 'timer.svg#timer' };
    public static TIMERMEDIUM: iconInterface = { name: 'timer-medium', title: 'TIMERMEDIUM', url: SvgIconEnum.imagePathUrl + 'timer-medium.svg#timer-medium' };
    public static WORKFLOWMEDIUM: iconInterface = { name: 'workflow-medium', title: 'WORKFLOWMEDIUM', url: SvgIconEnum.imagePathUrl + 'workflow-medium.svg#workflow-medium' };
}