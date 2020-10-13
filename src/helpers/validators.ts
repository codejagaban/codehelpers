
// Validators
// validates an email address and returns true if the email is valid or false if the email is not valid
export const validateEmail = (email:string): boolean => {
	const tester = /^[-!#$%&'*+/0-9=?A-Z^_a-z`{|}~](\.?[-!#$%&'*+/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/;
    if (!email) return false;
    if (email.length > 256) return false;
    if (!tester.test(email)) return false;
    // Further checking of some things regex can't handle
    const [account, address] = email.split('@');
    if (account.length > 64) return false;

    const domainParts = address.split('.');
    return !domainParts.some(function (part) {
        return part.length > 63;
    });

}