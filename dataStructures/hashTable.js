class HashTable {
  constructor(size=50) {
    this.buckets = Array(size).fill([]);
  }
  

  hash(key) {
    const hash = Array.from(key).reduce(
      (hashAccumulator, keySymbol) => (hashAccumulator + keySymbol.charCodeAt(0)), 0
    );
    return hash % this.buckets.length;
  }

  set(key, value) {
    const index = this.hash(key)
    this.buckets[index].push({ key, value })
  }

  get(key) {
    const index = this.hash(key);
    const values = this.buckets[index];

    for(let i=0; i < values.length; i++) {
      if(values[i].key === key && this.buckets[index][i].found !== true) {
        this.buckets[index][i].found = true;
        return values[i];
      }
    }
   
    return false
  }
}

module.exports = HashTable