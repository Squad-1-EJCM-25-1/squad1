import { ProdutosItemProp } from "../types/types";

// export const fetchCategorias = async (url: string): Promise<CategoriaItemProp[]> => {
//     const response = await fetch(url);
//     const data: CategoriaItemProp[] = await response.json()
//     return data
// }

// export const fetchBeneficios = async (url: string): Promise<BeneficioItemProp[]> => {
//     const response = await fetch(url);
//     const data: BeneficioItemProp[] = await response.json()
//     return data
// }

export const fetchProdutos = async (url: string): Promise<ProdutosItemProp[]> => {
    const response = await fetch(url);
    const data: ProdutosItemProp[] = await response.json()
    return data
}