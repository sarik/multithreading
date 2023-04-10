package org.example;

import java.util.concurrent.locks.ReentrantLock;
import java.util.concurrent.locks.ReentrantReadWriteLock;

public class ReentrantLockDemo {

    public static class SharedResource {

        private int counter = 0;
        ReentrantLock reentrantLock = new ReentrantLock();
        ReentrantReadWriteLock reentrantReadWriteLock = new ReentrantReadWriteLock();


        public void increment() {
            reentrantReadWriteLock.writeLock().lock();
            this.counter++;
            reentrantReadWriteLock.writeLock().unlock();
        }

        public void decrement() {
            reentrantReadWriteLock.writeLock().lock();
            this.counter--;
            reentrantReadWriteLock.writeLock().unlock();
        }

        public int getCounter() {
            return counter;
        }
    }


    public static void main(String[] args) {
        SharedResource sharedResource = new SharedResource();

        Thread t1 = new Thread(() -> {
            for (int i = 0; i < 10000; i++) {
                sharedResource.increment();
            }
        });

        new SharedResource();

        Thread t2 = new Thread(() -> {
            for (int i = 0; i < 10000; i++) {
                sharedResource.decrement();
            }
        });

        t1.start();
        t2.start();
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            throw new RuntimeException(e);
        }

        System.out.println(sharedResource.getCounter());
    }
}
