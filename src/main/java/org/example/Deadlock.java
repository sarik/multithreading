package org.example;

import java.util.concurrent.locks.ReentrantLock;

public class Deadlock {

    ReentrantLock lock1 = new ReentrantLock();
    ReentrantLock lock2 = new ReentrantLock();

    public void worker1() {

        lock1.lock();
        System.out.println("Acquired locked 1 "+ Thread.currentThread().getName());

        try {
            Thread.sleep(500);
        } catch (InterruptedException e) {
            throw new RuntimeException(e);
        }

        lock2.lock();
        System.out.println("Acquired locked 2 "+ Thread.currentThread().getName());

        lock1.unlock();
        lock2.unlock();
    }

    public void worker2() {

        lock2.lock();
        System.out.println("Acquired locked 2 "+ Thread.currentThread().getName());

        try {
            Thread.sleep(500);
        } catch (InterruptedException e) {
            throw new RuntimeException(e);
        }

        lock1.lock();
        System.out.println("Acquired locked 1 "+ Thread.currentThread().getName());

        lock1.unlock();
        lock2.unlock();
    }

    public static void main(String[] args) {

        Deadlock deadlock = new Deadlock();
        new Thread(deadlock::worker1,"thread1").start();
        new Thread(deadlock::worker2,"thread2").start();
    }

}
