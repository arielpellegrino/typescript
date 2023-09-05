//types

// - boolean (true / false)
let isOpen: boolean
isOpen = true;

//String ('foo', "foo", `foo`);
let message: string
let messageOne: string
message = "foo";
messageOne = `foo ${isOpen}`;

//number (int, float, hex, binary
let total: number
total = 20
total = 0xff0
total = 2.0

//array define: (type[])
let items: number[]
items = [1, 2, 3]

let valueNumber: Array<number>
valueNumber = [1, 2, 3]

//tuple -  é um array onde saberemos o numero de elementos dentro dele e o tipo

let title: [number, string, string]
title = [1, "foo", "bar"]

//enum

enum Colors {
    white = '#fff',
    black = '#000'
}

//any = qualquer coisa

let coisa: any
coisa = true

//void (vazio)
function logger(): void {
    console.log('foo')
}

//null | undefined

type Bla = string | undefined;

//never
function error(): never {
    throw new Error("Error");
}

//object = é qualquer coisa que não seja dos tipos primitivos

let cart: object;
cart = {
    key: 'fi'
}