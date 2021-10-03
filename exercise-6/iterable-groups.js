class Group {

   constructor() {
      this.bucket = [];
   }

  add(item) {
     if (this.bucket.indexOf(item) == -1)  this.bucket.push(item);
  }


  delete(item) {
   this.bucket = this.bucket.filter(x => x != item);       
  }


  has(item) {
     return this.bucket.indexOf(item) != -1;
  }

   static from(iterable) {

      let group = new Group();

      for( let item of iterable) group.add(item);

      return group;

   }

   [Symbol.iterator]() {
      let index = -1;
      let data  = this.bucket;

      return {
        next: () => ({ value: data[++index], done: !(index < data.length) })
      };
   }

}



for (let value of Group.from(["a", "b", "c"])) {
  console.log(value);
}


