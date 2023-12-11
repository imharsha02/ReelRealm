export type User = {
    id:string,
    name:string,
    email:string,
    password:string
}

export type Shows = {
    show_id:string,
    name:string,
    episodes:string,
    imageSrc:string
}

export type Movies = {
    movie_id:number,
    name:string,
    imageSrc:string
}
export type Sequel = {
    sequel_id:string,
    sequel_name:string,
    imageSrc:string
}

export type Detail = {
    movie_id:number,
    movie_name:string,
    leadRoleBy:string,
    release_date:string,
    imageSrc:string
}