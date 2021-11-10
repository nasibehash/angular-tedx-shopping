
 export interface Tedx {
    _id: string;
    title: string;
    description: string;
    about:  string;
    owner: string;
    speakers: Array<Speakers>;
    details:Array<Details>;
    tags:Array<any>;
    streamLink:string;
    publishTime:Date;
    createdAt:Date;
    updatedAt: Date;
   category:Category;
   videoTime:number;
 }
 
 export interface Speakers{
    _id: string;
    name: string;
    about: string;
    photo: string;
 }
 export interface Speaker{
   _id: string;
   name: string;
   about: string;
   photo: string;
}
 export interface Details{
    _id: string;
    order: number;
    speaker:Speaker;
    title:  string ;
    time: number;
    restTime:number;
 }

 export interface Category{
   _id:string;
   name:string;
   createdAt:Date;
   updatedAt:Date;
 }