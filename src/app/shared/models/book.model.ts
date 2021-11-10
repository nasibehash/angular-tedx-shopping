
export interface Book {
    category: Category;
    tags: Array<Tags>;
    translator: any[ ];
    writers: Array<Writer>;
    _id: string;
    title: string;
    description:string;
    publishTime: Date;
    link: string;
    createdAt: Date;
    updatedAt: Date;
    
}


export interface Category{
    
        _id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
      
}

export interface Tags{
  
        _id: string;
        name: string;
    
}

export interface Writer  {
    _id: string;
    name: string;
    about: string;
    photo: string;
    createdAt: Date;
    updatedAt: Date;
    
}