//we need the name for the css of the svg and the url to avoid hardcoding it each time we create the component
export interface iconInterface {
	name: string,
	url: string,
	title: string
}

class IconEnum {
	private static imageUrl: string = 'src/common/svg/icons.svg#';
	private static imagePathUrl: string = 'src/common/svg';
	public static CROSS: iconInterface = { name: 'cross', title: 'Cross', url: IconEnum.imageUrl + 'cross' };
	public static LIST: iconInterface = { name: 'list', title: 'List', url: IconEnum.imageUrl + 'list' };
	public static TABLE: iconInterface = { name: 'table', title: 'Table', url: IconEnum.imageUrl + 'table' };
	public static FOLDER: iconInterface = { name: 'folder', title: 'Folder', url: IconEnum.imageUrl + 'folder' };
	public static CARET: iconInterface = { name: 'caret', title: 'Caret', url: IconEnum.imageUrl + 'caret' };
	public static CARETLEFTCLOSE: iconInterface = { name: 'caret', title: 'close', url: IconEnum.imageUrl + 'caret-left' };
	public static ALERTS: iconInterface = { name: 'alerts', title: 'Alerts', url: IconEnum.imageUrl + 'alert-medium' };
	public static ADMIN: iconInterface = { name: 'admin', title: 'Admin', url: IconEnum.imageUrl + 'settings-medium' };
	public static ANALYSIS: iconInterface = { name: 'analysis', title: 'Analysis', url: IconEnum.imageUrl + 'linkchart-medium' };
	public static DETECTION: iconInterface = { name: 'detection', title: 'Detection', url: IconEnum.imageUrl + 'rules-medium' };
	public static DATA: iconInterface = { name: 'data', title: 'Data', url: IconEnum.imageUrl + 'folder' };
	public static ALERTSNAV: iconInterface = { name: 'alerts', title: 'Alerts', url: IconEnum.imageUrl + 'alert-medium' };
	public static ADMINNAV: iconInterface = { name: 'admin', title: 'Admin', url: IconEnum.imageUrl + 'settings-medium' };
	public static ANALYSISNAV: iconInterface = { name: 'analysis', title: 'Analysis', url: IconEnum.imageUrl + 'linkchart-medium' };
	public static DETECTIONNAV: iconInterface = { name: 'detection', title: 'Detection', url: IconEnum.imageUrl + 'rules-medium' };
	public static DATANAV: iconInterface = { name: 'data', title: 'Data', url: IconEnum.imageUrl + 'folder-medium' };
	public static CARETDOWN: iconInterface = { name: 'caret-down', title: 'arrow-down-icon', url: IconEnum.imageUrl + 'caret-down' };
	public static FILTERMEDIUM: iconInterface = { name: 'filter-medium', title: 'Filter', url: IconEnum.imageUrl + 'filter' }
	public static SIDEBARTOGGLE: iconInterface = { name: 'sidebar', title: 'Sidebar', url: IconEnum.imageUrl + 'sidebar' };
	public static SEARCHICON: iconInterface = { name: 'search', title: 'Search', url: IconEnum.imageUrl + 'search' };
	public static EXPORT: iconInterface = { name: 'export', title: 'Export', url: IconEnum.imageUrl + 'export' };
	public static ADD: iconInterface = { name: 'add', title: 'Add', url: IconEnum.imageUrl + 'add' };
	public static DOCUMENT: iconInterface = { name: 'document', title: 'Document', url: IconEnum.imageUrl + 'document' };
	public static LOGINLOGO: iconInterface = { name: 'login-logo', title: 'idetect-logotype', url: IconEnum.imagePathUrl + '/login-logo.svg#login-logo' }
}

export default IconEnum;
