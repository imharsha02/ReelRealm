export type User = {
    id:string,
    name:string,
    email:string,
    password:string
}

export interface Movies {
    movie_id:number;
    name:string;
    Image_source:string;
}

export type Detail = {
    movie_id:number,
    movie_name:string,
    lead_role_by:string,
    release_date:string,
    Image_source:string
}