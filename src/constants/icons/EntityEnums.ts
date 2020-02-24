export interface EntityIconInterface {
	name: string,
	url: string,
  type: String,
	title: string
}

export class EntityEnums {
	private static imageUrl: string = '/svg/entities/';

  //------------------------Alert Entity---------------------
  public static ALERT_LARGE: EntityIconInterface = { name: 'alert', title: 'Alert Large', type: 'large',url: EntityEnums.imageUrl + 'alert-large.svg#alert' };
  public static ALERT_MEDIUM: EntityIconInterface = { name: 'alert', title: 'Alert Medium', type: 'medium',url: EntityEnums.imageUrl + 'alert-medium.svg#alert' };
  public static ALERT: EntityIconInterface = { name: 'alert', title: 'Alert', type: 'normal',url: EntityEnums.imageUrl + 'alert.svg#alert' };

	//------------------------Case Entity---------------------
	public static CASE_LARGE: EntityIconInterface = { name: 'case', title: 'Case Large', type: 'large',url: EntityEnums.imageUrl + 'case-large.svg#case' };

  //------------------------Person Entity---------------------
	// Bad Girl Entity
	public static BAD_GIRL_ALT_LARGE: EntityIconInterface = { name: 'badgirlalt', title: 'Bad Girl Alt', type: 'normal',url: EntityEnums.imageUrl + 'bad-girl-alt-large.svg#badgirl' };
  public static BAD_GIRL_LARGE: EntityIconInterface = { name: 'badgirl', title: 'Bad Girl', type: 'normal',url: EntityEnums.imageUrl + 'bad-girl-large.svg#badgirl' };
	// Bad Guy Entity
	public static BAD_GUY_ALT_LARGE: EntityIconInterface = { name: 'badguyalt', title: 'Bad Guy Alt', type: 'normal',url: EntityEnums.imageUrl + 'bad-guy-alt-large.svg#badguy' };
  public static BAD_GUY_LARGE: EntityIconInterface = { name: 'badguy', title: 'Bad Guy', type: 'normal',url: EntityEnums.imageUrl + 'bad-guy-large.svg#badguylarge' };
	public static BAD_GUY_INCOMPLETE_ALT_LARGE: EntityIconInterface = { name: 'badguyincompletealt', title: 'Bad Guy Incomplete Alt', type: 'normal',url: EntityEnums.imageUrl + 'bad-guy-alt-large.svg#badguyincompletealt' };
	public static BAD_GUY_INCOMPLETE_LARGE: EntityIconInterface = { name: 'badguyincomplete', title: 'Bad Guy Incomplete', type: 'normal',url: EntityEnums.imageUrl + 'bad-girl-large.svg#badguyincomplete' };
  // Bishop
	public static BISHOP_LARGE: EntityIconInterface = { name: 'bishop', title: 'Bishop', type: 'large',url: EntityEnums.imageUrl + 'bishop-large.svg#bishop' };
	// Employee
	public static EMPLOYEE_FEMALE_LARGE: EntityIconInterface = { name: 'employeefemale', title: 'Employee Female', type: 'large',url: EntityEnums.imageUrl + 'employee-female-large.svg#employee' };
	public static EMPLOYEE_MALE_LARGE: EntityIconInterface = { name: 'employeemale', title: 'Employee Male', type: 'large',url: EntityEnums.imageUrl + 'employee-male-large.svg#employee' };
	public static EMPLOYEE_UNKNOW_LARGE: EntityIconInterface = { name: 'employeeunknow', title: 'Employee Unknow', type: 'large',url: EntityEnums.imageUrl + 'employee-unknown-large.svg#employee' };
  // Normal Peron
	public static PERSON_FEMALE_LARGE: EntityIconInterface = { name: 'personfemale', title: 'Person Female', type: 'large',url: EntityEnums.imageUrl + 'person-female-large.svg#person' };
	public static PERSON_MALE_LARGE: EntityIconInterface = { name: 'personmale', title: 'Person Male', type: 'large',url: EntityEnums.imageUrl + 'person-male-large.svg#person' };
	public static PERSON_UNKNOW_LARGE: EntityIconInterface = { name: 'personunknow', title: 'Person Unknow', type: 'large',url: EntityEnums.imageUrl + 'person-unknown-large.svg#person' };
	// Minor Peron
	public static MINOR_FEMALE_LARGE: EntityIconInterface = { name: 'minorfemale', title: 'Minor Female', type: 'large',url: EntityEnums.imageUrl + 'minor-female-large.svg#minor' };
	public static MINOR_MALE_LARGE: EntityIconInterface = { name: 'minormale', title: 'Minor Male', type: 'large',url: EntityEnums.imageUrl + 'minor-male-large.svg#minor' };
	public static MINOR_UNKNOW_LARGE: EntityIconInterface = { name: 'minorunknow', title: 'Minor Unknow', type: 'large',url: EntityEnums.imageUrl + 'minor-unknown-large.svg#minor' };

	//------------------------Building---------------------
	public static BUILDING_LARGE: EntityIconInterface = { name: 'bomb', title: 'Bomb', type: 'large',url: EntityEnums.imageUrl + 'building-large.svg#building' };

	//------------------------Building---------------------
	public static LOCATION_LARGE: EntityIconInterface = { name: 'location', title: 'Location', type: 'large',url: EntityEnums.imageUrl + 'location-large.svg#location' };
	public static LOCATION: EntityIconInterface = { name: 'location', title: 'Location', type: 'large',url: EntityEnums.imageUrl + 'location.svg#location' };

	//------------------------Bomb Entity---------------------
	public static BOMB_LARGE: EntityIconInterface = { name: 'bomb', title: 'Bomb', type: 'large',url: EntityEnums.imageUrl + 'bomb-large.svg#bomb' };

	//------------------------File Entity---------------------
	public static FILE_LARGE: EntityIconInterface = { name: 'file', title: 'File', type: 'large',url: EntityEnums.imageUrl + 'file-large.svg#file' };

  //------------------------Bank Account Entity---------------------
	public static BANK_ACCOUNT_ALT_LARGE: EntityIconInterface = { name: 'bankaccountalt', title: 'Bank Account Alt', type: 'Alt',url: EntityEnums.imageUrl + 'bank-account-alt-large.svg#bank-account' };
	public static BANK_ACCOUNT_LARGE: EntityIconInterface = { name: 'bankaccountlarge', title: 'Bank Account Large', type: 'large',url: EntityEnums.imageUrl + 'bad-guy-large.svg#bank-account' };
	public static BANK_ACCOUNT: EntityIconInterface = { name: 'bankaccount', title: 'Bank Account', type: 'normal',url: EntityEnums.imageUrl + 'bad-guy-alt-large.svg#bank-account' };

  //------------------------Bank Entity---------------------
  public static BANK: EntityIconInterface = { name: 'bank', title: 'Bank', type: 'normal',url: EntityEnums.imageUrl + 'bank-large.svg#bank' };

	//------------------------Computer Entity---------------------
  public static COMPUTER: EntityIconInterface = { name: 'computer', title: 'Computer', type: 'normal',url: EntityEnums.imageUrl + 'computer.svg#computer' };
	public static COMPUTER_MEDIUM: EntityIconInterface = { name: 'computermedium', title: 'Computer Medium', type: 'normal',url: EntityEnums.imageUrl + 'bank-large.svg#computer' };
	public static COMPUTER_LARGE: EntityIconInterface = { name: 'computerlarge', title: 'Computer Large', type: 'normal',url: EntityEnums.imageUrl + 'bank-large.svg#computer' };

	//------------------------Container Entity---------------------
	public static CONTAINER: EntityIconInterface = { name: 'container', title: 'Container', type: 'normal',url: EntityEnums.imageUrl + 'container.svg#container' };
	public static CONTAINER_LARGE: EntityIconInterface = { name: 'containerlarge', title: 'Container Large', type: 'normal',url: EntityEnums.imageUrl + 'container-large.svg#container' };

	//------------------------Car Entity---------------------
	public static CAR_LARGE: EntityIconInterface = { name: 'car', title: 'Car', type: 'normal',url: EntityEnums.imageUrl + 'car-large.svg#car' };
	public static CAR_CRASH_LARGE: EntityIconInterface = { name: 'carcrash', title: 'carcrash', type: 'normal',url: EntityEnums.imageUrl + 'car-crash-large.svg#car' };

  //------------------------Atom Entity---------------------
	public static ATOM_LARGE: EntityIconInterface = { name: 'atom', title: 'Atom', type: 'large',url: EntityEnums.imageUrl + 'atom-large.svg#atom' };

	//------------------------Cash Entity---------------------
	public static CASH_LARGE: EntityIconInterface = { name: 'cash', title: 'Cash', type: 'large',url: EntityEnums.imageUrl + 'cash-large.svg#cash' };

  //------------------------Misc Entity---------------------
  public static ART_LARGE: EntityIconInterface = { name: 'art', title: 'Art', type: 'large',url: EntityEnums.imageUrl + 'art-large.svg#art' };

  public static ATM_LARGE: EntityIconInterface = { name: 'atm', title: 'Atm', type: 'large',url: EntityEnums.imageUrl + 'atm-large.svg#atm' };
  public static ATM: EntityIconInterface = { name: 'atm', title: 'Atm', type: 'normal',url: EntityEnums.imageUrl + 'atm.svg#atm' };

}

export default EntityEnums;
