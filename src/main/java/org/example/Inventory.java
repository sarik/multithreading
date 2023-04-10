package org.example;

import java.util.concurrent.atomic.AtomicInteger;

public class Inventory {

    private AtomicInteger count = new AtomicInteger(0);
    public Inventory(){
        //this.count = 0;
    }

    public int getCount() {
        return count.get();
    }

    public void increment(){
        count.incrementAndGet();
    }

    public void decrement(){
        count.decrementAndGet();
    }

}
