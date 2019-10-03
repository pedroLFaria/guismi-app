import Item from "../item/Item";

export default interface Inventario {
    idInventario: number;
    nomeInventario: string;
    items: Item[];
}