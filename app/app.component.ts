import {Component, ViewChild, Injector} from '@angular/core';
import {Account} from './account/account.model';
import {AccountsList} from './account/accounts_list.component';
import {AccountForm} from './account/account_form.component';
import {AccountService} from './account/account.services';


@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html',
    styleUrls:['app/app.component.css'],
    directives:[AccountsList,AccountForm],
    providers:[AccountService]

})
export class AppComponent {

  private _accounts:Array<Account>;

  private _accountService:AccountService;

  constructor(accountService:AccountService){

    this._accountService = accountService;

    this._accounts = this._accountService.getAll();
  }

  private createAccError:string = "";

  public createAcc(newAccount:Account){
   this._accountService.create(newAccount);
   this.form.resetForm();
 }

 private removeAcc(index:number){
   this._accountService.remove(index);
 }

  @ViewChild(AccountForm) form:AccountForm;


}
