process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    
    const [n, m] = data.split(" ");
    
    
    let result = ""
    
    for(let i = 0; i < m; i++){
        
        result += "*".repeat(n);
        
        result += '\n';
    }
    
    console.log(result)
    
    return result;
});