"use strict";(self.webpackChunkloans_ui=self.webpackChunkloans_ui||[]).push([[777],{9777:(A,c,l)=>{l.r(c),l.d(c,{LoansModule:()=>_});var d=l(6895),p=l(2045),h=l(3701),b=l(8462),t=l(8256),g=l(529);let m=(()=>{class e{constructor(n){this.http=n,this.apiUrl="https://banking-cdy3.vercel.app/app/v1/loan"}getAllLoans(){return new g.WM({Authorization:"Bearer "+sessionStorage.getItem("token")}),this.http.get(`${this.apiUrl}`)}getLoanStatusById(n){return this.http.get(`${this.apiUrl}/${n}`)}deleteLoanRequest(n){return this.http.delete(`${this.apiUrl}/${n}`)}updateLoanStatus(n,o){return this.http.put(`${this.apiUrl}/${n}`,o)}}return e.\u0275fac=function(n){return new(n||e)(t.LFG(g.eN))},e.\u0275prov=t.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();var s=l(433);function Z(e,a){if(1&e){const n=t.EpF();t.TgZ(0,"tr")(1,"td"),t._uU(2,"User123"),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.qZA(),t.TgZ(5,"td"),t._uU(6),t.qZA(),t.TgZ(7,"td"),t._uU(8),t.qZA(),t.TgZ(9,"td"),t._uU(10),t.qZA(),t.TgZ(11,"td"),t._uU(12),t.qZA(),t.TgZ(13,"td"),t._uU(14),t.qZA(),t.TgZ(15,"td"),t._uU(16),t.ALo(17,"date"),t.qZA(),t.TgZ(18,"td"),t._uU(19),t.ALo(20,"date"),t.qZA(),t.TgZ(21,"td"),t._uU(22),t.qZA(),t.TgZ(23,"td")(24,"button",24),t.NdJ("click",function(){const i=t.CHM(n).$implicit,u=t.oxw();return t.KtG(u.openAddEditModal(i._id))}),t._uU(25,"Status"),t.qZA(),t._uU(26,"\xa0\xa0 "),t.TgZ(27,"button",25),t.NdJ("click",function(){const i=t.CHM(n).$implicit,u=t.oxw();return t.KtG(u.deleteLoan(i._id))}),t._uU(28,"Delete"),t.qZA()()()}if(2&e){const n=a.$implicit;t.xp6(4),t.Oqu(n.loanNumber),t.xp6(2),t.Oqu(n.loanType),t.xp6(2),t.Oqu(n.amount),t.xp6(2),t.Oqu(n.interestRate),t.xp6(2),t.Oqu(n.term),t.xp6(2),t.Oqu(n.collateral),t.xp6(2),t.Oqu(t.xi3(17,9,n.startDate,"dd/MM/yyyy")),t.xp6(3),t.Oqu(t.xi3(20,12,n.endDate,"dd/MM/yyyy")),t.xp6(3),t.Oqu(n.status)}}const L=function(e){return{display:e}},O=[{path:"",component:(()=>{class e{constructor(n){this.adminLoanService=n,this.loansVMObj=new h.f}ngOnInit(){this.loadLoans()}loadLoans(){this.adminLoanService.getAllLoans().subscribe(n=>{this.loansVMObj.loansDataList=n})}closePopup(){this.loansVMObj.displayStyle="none"}openAddEditModal(n){null==n?(this.loansVMObj.editMode=!1,this.loansVMObj.loanDataObj=new b.lR):(this.loansVMObj.editMode=!0,this.selectedLoan(n)),this.loansVMObj.displayStyle="block"}selectedLoan(n){this.adminLoanService.getLoanStatusById(n).subscribe(o=>{console.log("Customer details data:",o),this.loansVMObj.loanDataObj=o})}updateloanStatus(){this.adminLoanService.updateLoanStatus(this.loansVMObj.loanDataObj._id,this.loansVMObj.loanDataObj).subscribe(()=>{alert("Customer Updated SuccessFully!"),this.loansVMObj.displayStyle="none",this.loadLoans()}),this.loansVMObj.loanDataObj._id?this.adminLoanService.updateLoanStatus(this.loansVMObj.loanDataObj._id,this.loansVMObj.loanDataObj).subscribe(()=>{alert("Status  Updated SuccessFully!"),this.loansVMObj.displayStyle="none",this.loadLoans()},o=>{console.error("Error updating Status:",o)}):alert("Unknown Error Occured:")}deleteLoan(n){this.adminLoanService.deleteLoanRequest(n).subscribe(()=>{this.loadLoans(),alert("Loan Request deleted Successfully")})}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(m))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-loans"]],decls:59,vars:6,consts:[[1,"container"],[1,"row"],[1,"col-6"],[1,"col-lg-12","table-container"],[1,"table"],[1,"text-center"],[4,"ngFor","ngForOf"],["tabindex","-1","role","dialog",1,"modal","expandIn",3,"ngStyle"],["role","document",1,"modal-dialog"],[1,"modal-content"],[1,"modal-header"],[1,"col-lg-11","col-md-11","col-sm-11","col-11"],["type","button",1,"btn-close",3,"click"],[1,"modal-body"],[1,"col-lg-12","col-md-12","col-sm-12","p-2"],[1,"form-outline"],["aria-label","Default select example",1,"form-select",3,"ngModel","ngModelChange"],["SelectRole","ngModel"],["disabled","","selected","",3,"value"],["value","Approved"],["value","Rejected"],[1,"modal-footer"],[1,"col-lg-12","col-md-12","col-sm-12","text-end"],[1,"btn","btn-warning",3,"click"],[1,"btn","btn-primary",3,"click"],[1,"btn","btn-danger",3,"click"]],template:function(n,o){1&n&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"h2"),t._uU(4,"Loans"),t.qZA()()(),t.TgZ(5,"div",1)(6,"div",3)(7,"table",4)(8,"thead")(9,"tr")(10,"th"),t._uU(11,"User Name"),t.qZA(),t.TgZ(12,"th"),t._uU(13,"Loan Number"),t.qZA(),t.TgZ(14,"th"),t._uU(15,"Loan Type"),t.qZA(),t.TgZ(16,"th"),t._uU(17,"Amount"),t.qZA(),t.TgZ(18,"th"),t._uU(19,"Rate"),t.qZA(),t.TgZ(20,"th"),t._uU(21,"Term"),t.qZA(),t.TgZ(22,"th"),t._uU(23,"Colateral"),t.qZA(),t.TgZ(24,"th"),t._uU(25,"Start Date"),t.qZA(),t.TgZ(26,"th"),t._uU(27,"End Date"),t.qZA(),t.TgZ(28,"th"),t._uU(29,"Status"),t.qZA(),t.TgZ(30,"th",5),t._uU(31,"Actions"),t.qZA()()(),t.TgZ(32,"tbody"),t.YNc(33,Z,29,15,"tr",6),t.qZA()()()(),t.TgZ(34,"div",7)(35,"div",8)(36,"div",9)(37,"div",10)(38,"div",11)(39,"h5"),t._uU(40," Change Loan Status "),t.qZA()(),t.TgZ(41,"button",12),t.NdJ("click",function(){return o.closePopup()}),t.qZA()(),t.TgZ(42,"div",13)(43,"div",1)(44,"div",14)(45,"div",15)(46,"select",16,17),t.NdJ("ngModelChange",function(i){return o.loansVMObj.loanDataObj.status=i}),t.TgZ(48,"option",18),t._uU(49,"Change Status "),t.qZA(),t.TgZ(50,"option",19),t._uU(51,"Approved"),t.qZA(),t.TgZ(52,"option",20),t._uU(53,"Rejected"),t.qZA()()()()()(),t.TgZ(54,"div",21)(55,"div",1)(56,"div",22)(57,"button",23),t.NdJ("click",function(){return o.updateloanStatus()}),t._uU(58,"Update Status"),t.qZA()()()()()()()()),2&n&&(t.xp6(33),t.Q6J("ngForOf",o.loansVMObj.loansDataList),t.xp6(1),t.Q6J("ngStyle",t.VKq(4,L,o.loansVMObj.displayStyle)),t.xp6(12),t.Q6J("ngModel",o.loansVMObj.loanDataObj.status),t.xp6(2),t.s9C("value",o.loansVMObj.loanDataObj.status))},dependencies:[d.sg,d.PC,s.YN,s.Kr,s.EJ,s.JJ,s.On,d.uU],styles:[".table-container[_ngcontent-%COMP%]{width:1000px;overflow:scroll;height:420px}.table[_ngcontent-%COMP%]{width:100%;table-layout:scroll;border:solid rgb(107,201,255) 2px}table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{border:1px solid rgb(223,238,241);padding:8px;color:#f0f8ff}thead[_ngcontent-%COMP%]{width:100%;top:80;background:rgb(39,76,127);z-index:1}"]}),e})()}];let M=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[p.Bz.forChild(O),p.Bz]}),e})(),_=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[d.ez,M,s.u5]}),e})()}}]);