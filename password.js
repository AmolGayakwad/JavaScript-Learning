//Write a program to check the strength of a password. The password should be at least 8 characters long and include a mix of uppercase letters, lowercase letters, and numbers.

var passWord = 'amol@123';

if (passWord.length < 8) {
    console.log("Weak: Password should be at least 8 characters long.");
} else {
    if (!/[A-Z]/.test(passWord)) {
        console.log("Weak: Password should include at least one uppercase letter.");
    } else {
        if (!/[a-z]/.test(passWord)) {
            console.log("Weak: Password should include at least one lowercase letter.");
        } else {
            if (!/\d/.test(passWord)) {
                console.log("Weak: Password should include at least one number.");
            } else {
                console.log("Strong: Password meets the criteria.");
            }
        }
    }
}
