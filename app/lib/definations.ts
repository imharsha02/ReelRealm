export type User = {
    id:string,
    name:string,
    email:string,
    password:string
}

export interface Movies {
    movie_id:number;
    name:string;
    imageSrc:string;
}

export type Detail = {
    movie_id:number,
    movie_name:string,
    leadRoleBy:string,
    release_date:string,
    imageSrc:string
}