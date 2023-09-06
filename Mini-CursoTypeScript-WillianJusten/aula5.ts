//accountInfo
//charInfo
//playerinfo

type AccountInfo = {
    id: number;
    name: string;
    email?: string;
}

const account : AccountInfo = {
    id: 123,
    name: "Willian",
    email: "ariellalalal@yahoul.com"
}

type CharInfo = {
    nickname: string;
    level: number
}

const char: CharInfo = {
    nickname: "willjusten",
    level: 100
}

//interserction
type PlayerInfo = AccountInfo & CharInfo;

const player: PlayerInfo = {
    id: 123,
    name: "Willian",
    nickname: "willjusten",
    level:100
}