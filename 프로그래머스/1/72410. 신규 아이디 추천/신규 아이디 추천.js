function solution(new_id) {
   console.log("새로운 아이디", new_id);
    
    const newId = new_id.toLowerCase()
                    .replace(/[^a-z0-9\.\-_]/g, "")
                    .replace(/\.+/g, ".")
                    .replace(/^\.|\.$/g, "")
                    .replace(/^$/, "a")
                    .slice(0, 15)
                    .replace(/\.$/, "")
    
    return newId.padEnd(3, newId[newId.length - 1]);
    
    
    
}