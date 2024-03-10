export class TodoProjectItem {
  static globalId = 0;

  constructor(name = "New Project") {
    TodoProjectItem.globalId += 1;
    this.id = TodoProjectItem.globalId.toString();
    this.name = name;
    this.array = [];
  }
}
