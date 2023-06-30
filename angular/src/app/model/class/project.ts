export class Project{
  name: string = "";
  date: string = "";
  description: string = "";
  technos: {name: string, logoUrl: string}[] = [];
  images: {type: 'video' | 'img', name: string, url: string}[] = [];

  constructor(name: string, date: string, description: string, technos: {name: string, logoUrl: string}[], images?: {type: 'video' | 'img', name: string, url: string}[]){
    this.name = name;
    this.date = date;
    this.description = description;
    this.technos = technos;
    images ? this.images = images : this.images = [];
  }
}
