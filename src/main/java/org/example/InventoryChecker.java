package org.example;

public class InventoryChecker {

    public static class DecrementingThread extends Thread {

        private Inventory inventory;

        public DecrementingThread(Inventory inventory) {
            this.inventory = inventory;
        }

        @Override
        public void run() {
            for (int i = 0; i < 10000; i++) {
                inventory.decrement();
            }
        }
    }

    public static class IncrementingThread extends Thread {

        private Inventory inventory;

        public IncrementingThread(Inventory inventory) {
            this.inventory = inventory;
        }

        @Override
        public void run() {
            for (int i = 0; i < 10000; i++) {
                inventory.increment();
            }
        }
    }

    public static void main(String[] args) throws InterruptedException {

        Inventory inventory = new Inventory();
        DecrementingThread dt = new DecrementingThread(inventory);
        IncrementingThread it = new IncrementingThread(inventory);

        dt.start();
        it.start();

        dt.join();
        it.join();

        System.out.println(inventory.getCount());


    }
}
