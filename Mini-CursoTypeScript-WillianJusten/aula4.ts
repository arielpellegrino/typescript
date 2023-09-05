//type alias

type Uid = number | string | undefined;
type Plataform = 'Windows' | 'Linux' | 'Mac Os' | 'ios';

function renderPlataform(plataform: Plataform) {
    return plataform
}


function logDetails(uid: Uid | string, item: string) {
    console.log(`A product with ${uid} has a title as ${item}.`)
}

renderPlataform('ios')

function logInfo(uid: number | string, user: string){
    console.log(`A user with ${uid} has a name as ${user}.`)
}

logDetails(123, "sapato");
logDetails("124", "sapato");
logInfo(123, "willian");
logInfo("123", "willian");