let emailRegex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
let passwordRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,16}$/;
let usernameRegex = /^[a-zA-Z]{2,}$/;

export const emailValidation = {
    pattern: {
        value: emailRegex,
        message: 'Invalid email'
    },
    required: {
        value: true,
        message: 'Email is required'
    }
}
export const passwordValidation = {
    pattern: {
        value: passwordRegex,
        message: 'Invalid password'
    },
    required: {
        value: true,
        message: 'Password is required'
    }
}
export const usernameValidation = {
    pattern: {
        value: usernameRegex,
        message: 'Invalid username'
    },
    required: {
        value: true,
        message: 'Username is required'
    }
}