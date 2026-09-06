/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
    // 1. Path ko '/' ko basis par split karo 
    const parts = path.split("/"); 
    const stack = []; 

    for(let part of parts) {
        // Empty strings (jo multiple /// se aati hai) ya '.' ko ignore karo 
        if(part === "" || part === ".") {
            continue; 
        }

        // ".." ane par pichli directory ko pop karo (agar stack khali nhi hai) 
        if(part === "..") {
            stack.pop(); 
        } else {
            // Valid directory name ko stack me push karo 
            stack.push(part); 
        }
    }  

    // 2. Stack elements ko '/' se join karke leading '/' ke saath return karo 
    return '/' + stack.join('/'); 
};