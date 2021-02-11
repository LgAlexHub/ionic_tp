import owner from './owner'
export default class logementModel{
  Id: number;
  isActive: boolean;
  picture: string;
  title: string;
  price: number;
  owner: owner|null;
  constructor(ownerC:owner) {
    this.Id = 0;
    this.isActive = false;
    this.picture = "";
    this.title = "";
    this.price = 0;
    this.owner = new owner();
  }
}