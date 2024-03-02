export class TodoProjectItem {
  static globalId = 0;

  constructor(name) {
    TodoProjectItem.globalId += 1;
    this.id = TodoProjectItem.globalId.toString();
    this.name = name;
    this.array = [];
  }
}
