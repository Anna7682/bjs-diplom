'use strict'

const userForm = new UserForm();

UserForm.loginFormCallback = (data) => {
    ApiConnector.login(
        data,
        (response) => {
            if (response.success) {
                location.reload()
            } else {
                UserForm.setLoginErrorMessage(response.error);
            }
        }
    )
}
UserForm.registerFormCallback = (data) => {
    ApiConnector.register(
        data,
        (response) => {
            if (response.success) {
                location.reload()
            } else {
                UserForm.setRegisterErrorMessage(response.error);
            }
        }
    )
}