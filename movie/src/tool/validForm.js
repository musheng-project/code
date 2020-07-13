class ValidForm {
    constructor(){
        this.usernameReg = /^[A-Za-z][A-Za-z0-9]{3,7}$/;

        this.pwdReg = /^(?=.*[A-Z])(?=.*[a-z])\w{6,16}$/;
    }

    validUsername(value){
        return this.usernameReg.test(value);
    }

    validPwd(value){
        return this.pwdReg.test(value);
    }

    validEqual(v1, v2){
        return v1 === v2;
    }
}

export const validForm = new ValidForm();