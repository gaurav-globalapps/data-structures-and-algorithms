// Linked List Model
class LinkNode<item> {
    item: item;
    next: LinkNode<item>;
 }
  
 // Stack Implementation
 class Stack<item> {
    private first: LinkNode<item>; // most recently added node
    private size: number = 0; // number of items in list
  
    /**
     * Check whether stack is empty
     */
    public isEmpty(): boolean {
        return this.first === undefined;
    }
    /**
     * return top element of stack
     */
    public getItem() {
        return this.first.item;
    }
  
     /**
     * Push items into stack
     */
    public push(item: item): void {
        let oldfirst: LinkNode<item> = this.first; 
        this.first = new LinkNode<item>()
        this.first.item = item;
        this.first.next = oldfirst;
        this.size++;
    }
  
    /**
     * remove first item from stack
     */
    public pop() {
        if (!this.isEmpty()) {
            let item = this.first.item;
            this.first = this.first.next;
            this.size--;
            return item;
        }
    }
  
    /**
     * return the size of queue
     */
    public Size() {
        return this.size;
    }
 }
 