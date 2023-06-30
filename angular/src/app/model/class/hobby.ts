export class Hobby {
  name: string = "";
  description: string = "";
  faIcon: any;
  imgUrl: string = "";
  constructor(name: string, description: string, faIcon: any, imgUrl: string) {
    this.name = name;
    this.description = description;
    this.faIcon = faIcon;
    this.imgUrl = imgUrl;
  }
}
