export interface UserDTO {
    id: number
    senha: string
    nome: string
    email: string
    departamento: string
    curso: string
    foto: string
    bio: string
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
    nomeAlvo?: string
    conteudoAlvo: string
    data: string
    conteudo: string
    foto: ''
    idUserAlvo: number
    fotoAlvo: string
}
