export interface IPokemonsApiResponse {
    count: number,
    next: string | null,
    previous: string | null,
    results: Array<IPokemonModel>
}

export interface IPokemonModel {
    name: string,
    url: string,
    image?: string
}

export interface IPokemonDetailUrl {
    sprites: IPokemonImage
}

interface IPokemonImage {
    front_default: string
}