export const checkValidData = (email , password) =>{

const isEmailVaild = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);
const isPasswordVaild = /^((?=\S*?[A-Z])(?=\S*?[a-z])(?=\S*?[0-9]).{6,})\S$/.test(password);

if(!isEmailVaild) return "Email ID is Not Vaild";
if(!isPasswordVaild) return "Password is not vaild"

return null;

}