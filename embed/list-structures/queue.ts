// FIFO queue
export class LinkNode<item> {
    item: item;
    next: LinkNode<item>;
 }
  
  
 export class Queue<item> {
    private first: LinkNode<item>;
    private last: LinkNode<item>;
    private size: number = 0;
  
    /**
     * check whether queue is empty
     */
    public isEmpty(): boolean {
        return this.first == null;
    }
  
    /**
     * push items at the end of queue
     */
    public enqueue(item: item) {
        let oldlast: LinkNode<item> = this.last;
        this.last = new LinkNode<item>();
        this.last.item = item;
        this.last.next = null;
  
        if (this.isEmpty()) this.first = this.last;
        else oldlast.next = this.last;
  
        this.size++;
    }
  
    /**
     * remove item from the beginning of the queue
     */
    public dequeue() {
        let item = this.first.item;
        this.first = this.first.next;
  
        if (this.isEmpty()) this.last = null;
        this.size--;
    }
  
    /**
     * return first item in queue
     */
    public front() {
        if (this.first) return this.first.item;
    }
  
    /**
     * return last item in queue
     */
    public rear() {
        if (this.last) return this.last.item;
    }
  
    /**
     * return the size of queue
     */
    public Size() {
        return this.size;
    }
 }
 