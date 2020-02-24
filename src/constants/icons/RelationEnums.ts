export interface RelationIconInterface {
	name: string,
	url: string,
  code: String,
	title: string
}

class RelationEnums {
	private static imageUrl: string = '/svg/relations/';

  //------------------------Person Entity---------------------
  public static ALIAS_LARGE: RelationIconInterface = { name: 'alias', title: 'Alias', code: '',url: RelationEnums.imageUrl + 'alias-large.svg#alias' };

}

export default RelationEnums;
