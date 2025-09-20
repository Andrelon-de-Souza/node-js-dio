const product = require('./services/products');
const { getFullName, getProductLabel } = require('./services/products');
const config = require('./services/config');
const database = require('./services/database');

async function main() {
    console.log("Carrinho de compras:");
    product.getFullName("408", "mousepad");
    product.getFullName("508", "Televisão");
    product.productType.version

    getFullName("1", "Teclado");

    console.log(config.client);

    database.connectToDatabase();
    database.disconnectDatabase();
    
}

main();