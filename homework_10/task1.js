function debounce(func, ms){
    let timer = null;
    return function(){
        const end = () => {
            func.apply(this);
            timer = null;
        }
        
        if (timer) {
            clearTimeout(timer);
        }
        
        timer = setTimeout(end, ms);
    };
}

// Example

let iterator = 0;

function increaseIteratorBy1() {
  iterator++;

  printIteratorValue();
}

function printIteratorValue() {
  console.log('Iterator value ', iterator);
}

var increaseIterator = debounce(increaseIteratorBy1, 1000);

increaseIterator();
increaseIterator();
increaseIterator();
increaseIterator();
increaseIterator();
increaseIterator();
increaseIterator();
increaseIterator();
increaseIterator(); // Should print 'Iterator value 1'