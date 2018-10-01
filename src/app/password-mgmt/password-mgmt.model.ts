export class PasswordMgmt {
    public oldPwd: string;
    public newPwd: string;
    public secQuest: string;
    public secAns: string;
    
    constructor(oldPwd: string, newPwd: string, secQuest: string, secAns: string) {
        this.oldPwd = oldPwd;
        this.newPwd = newPwd;
        this.secQuest = secQuest;
        this.secAns = secAns;
    }
}