export interface UserDTO {
    id: number
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
    imagem: string
}
