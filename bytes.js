function whatSize(byte) {
    
    var kylobyte = 1024
    var megabyte = kylobyte ** 2
    var gigabyte = kylobyte ** 3
    var terabyte = kylobyte ** 4
    var petabyte = kylobyte ** 5
    var exabyte = kylobyte ** 6
    var zetabyte = kylobyte ** 7
    var yottabyte = kylobyte ** 8
    
    if(byte >= yottabyte) {
        console.log(`O tamanho do arquivo é de ${(byte/yottabyte).toFixed(2)}YB`)
    } else if (byte >= zetabyte) {
        console.log(`O tamanho do arquivo é de ${(byte/zetabyte).toFixed(2)}ZB`)
    } else if (byte >= exabyte) {
        console.log(`O tamanho do arquivo é de ${(byte/exabyte).toFixed(2)}EB`)
    } else if (byte >= petabyte) {
        console.log(`O tamanho do arquivo é de ${(byte/petabyte).toFixed(2)}PB`)
    } else if (byte >= terabyte) {
        console.log(`O tamanho do arquivo é de ${(byte/terabyte).toFixed(2)}TB`)
    } else if (byte >= gigabyte) {
        console.log(`O tamanho do arquivo é de ${(byte/gigabyte).toFixed(2)}GB`)
    } else if (byte >= megabyte) {
        console.log(`O tamanho do arquivo é de ${(byte/megabyte).toFixed(2)}MB`)
    } else if (byte >= kylobyte){
        console.log(`O tamanho do arquivo é de ${(byte/kylobyte).toFixed(2)}KB`)
    } else {
        console.log(`O tamanho do arquivo é de ${(byte).toFixed(2)}B`)
    }
}

whatSize(555)