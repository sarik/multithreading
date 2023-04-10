package org.example;

public class Monitor {

    public static class Inventory {

        private int counter1;
        private int counter2;

        public int getCounter1() {
            return counter1;
        }

        public int getCounter2() {
            return counter2;
        }

        public Inventory() {
            this.counter1 = 0;
            this.counter2 = 0;
        }

        public void increment1() {
            //synchronized ((Object)this.counter1) {
            this.counter1++;
            //}

        }

        public synchronized void increment2() {
            //synchronized ((Object)this.counter2) {
            this.counter2++;
            //}
        }

    }

    public static class Counter1Thread extends Thread {

        private Inventory inventory;

        public Counter1Thread(Inventory inventory) {
            this.inventory = inventory;
        }

        @Override
        public void run() {
            for (int i = 0; i < 100000; i++) {
                inventory.increment1();
            }
        }
    }

    public static class Counter2Thread extends Thread {

        private Inventory inventory;

        public Counter2Thread(Inventory inventory) {
            this.inventory = inventory;
        }

        @Override
        public void run() {
            for (int i = 0; i < 100000; i++) {
                inventory.increment2();
            }
        }
    }

    public static void main(String[] args) throws InterruptedException {

        Inventory inventory = new Inventory();

        Thread t1 = new Counter1Thread(inventory);
        Thread t2 = new Counter2Thread(inventory);

        long startTime = System.currentTimeMillis();
        t1.start();
        t2.start();
        t1.join();
        t2.join();
        System.out.println(System.currentTimeMillis() - startTime);
        System.out.println(inventory.getCounter1());
        System.out.println(inventory.getCounter2());


    }
}
