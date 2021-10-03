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
}


let group = Group.from([10, 20]);
console.log(group.has(10));
console.log(group.has(30));
group.add(10);
group.delete(10);
console.log(group.has(10));
console.log(group.bucket);
