export interface UserDTO {
    id: number
    senha: string
    nome: string
    email: string
    departamento: string
    curso: string
    foto: string
}

export interface TeacherDTO {
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
    comentarios: ComentarioDTO[]
    foto: string
}

export interface ComentarioDTO {
    id: number
    idAutor: number
    nomeAutor: ''
    idAlvo: number
    data: string
    conteudo: string
    foto: ''
}
