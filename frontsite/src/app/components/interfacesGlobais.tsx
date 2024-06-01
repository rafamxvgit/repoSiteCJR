export interface UserDTO {
    id: number
    senha: string
    nome: string
    email: string
    departamento: string
    curso: string
    foto: string
}

export interface AvaliacaoDTO {
    id: number
    idAutor: number
    nomeAutor: ''
    idAlvo: number
    nomeAlvo: ''
    data: string
    conteudo: string
    comentarios: ComentarioDTO[]
    foto: string
}

type DefaultValues = Pick<AvaliacaoDTO, 'comentarios'>
const defaultAvalValues: DefaultValues = {comentarios: []}
type Optional<T, K extends keyof T> = Pick<Partial<T> , K> & Omit<T, K>;
type AvaliacaoWithDefaults = Optional<AvaliacaoDTO, keyof DefaultValues>

export default AvaliacaoWithDefaults;

export interface ComentarioDTO {
    id: number
    idAutor: number
    nomeAutor: ''
    idAlvo: number
    data: string
    conteudo: string
    foto: ''
}
