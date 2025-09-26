async function connectToDatabase(dataName) {
    console.log("Conectado ao BD " + dataName);
}

async function disconnectDatabase() {
    console.log("Desconectando do Bando de Dados!");
}

const databaseType = {
    userType: "admin",
    typeData: "datalocal",
}

//export default connectToDatabase;
export { connectToDatabase, disconnectDatabase, databaseType };
