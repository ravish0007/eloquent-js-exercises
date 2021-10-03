class Vec {

   constructor(x, y) {
      this.x = x;
      this.y = y;
   }


   plus(another) {
      return new Vec(this.x + another.x, this.y + another.y );  
   }

  
   minus(another) { 
      return new Vec(this.x - another.x, this.y - another.y );  
   }

  get length() {
       return Math.sqrt( this.x*this.x + this.y*this.y);
  }    

}



console.log(new Vec(1, 2).plus(new Vec(2, 3)));
console.log(new Vec(1, 2).minus(new Vec(2, 3)));
console.log(new Vec(3, 4).length);
