import { SideNavModel } from "./side-nav-model";

export class LayoutViewModel {
    viewModel: SideNavModel= new SideNavModel();
    showLeftSideMenu: boolean = true;
    toggleSideMenu = "default";
    toogleWrapper = " ";
    loggedIn:boolean=false;
    isAdmin:boolean=false;
    isUser:boolean=false;

}