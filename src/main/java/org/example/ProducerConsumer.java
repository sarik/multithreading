package org.example;

import java.util.ArrayList;
import java.util.List;

class ProducerConsumerWorker {

    private List<Integer> queue = new ArrayList<>();
    private static final int UPPER_LIMIT = 5;

    public void produce() throws InterruptedException {

        synchronized (this) {

            while (true) {

                if (queue.size() == UPPER_LIMIT) {
                    //Notify works at the end of current function or when you go to wait
                    wait();
                } else {
                    int gonnaAdd = queue.size();
                    queue.add(gonnaAdd);
                    System.out.println("Produced " + gonnaAdd);
                    notify();
                }
                Thread.sleep(800);
            }

        }
    }

    public void consume() throws InterruptedException {

        synchronized (this) {

            while (true) {

                if (queue.size() == 0) {
                    wait();
                } else {
                    System.out.println("Consumed " + queue.remove(queue.size() - 1));
                    notify();
                }
                Thread.sleep(800);
            }

        }
    }

}

class ProducerConsumer {

    public static void main(String[] args) throws InterruptedException {

        ProducerConsumerWorker producerConsumerWorker = new ProducerConsumerWorker();
        Thread t1 = new Thread(() -> {
            try {
                producerConsumerWorker.consume();
            } catch (InterruptedException e) {
                throw new RuntimeException(e);
            }
        });
        Thread t2 = new Thread(() -> {
            try {
                producerConsumerWorker.produce();
            } catch (InterruptedException e) {
                throw new RuntimeException(e);
            }
        });

        t1.start();
        t2.start();

        t2.join();
        t1.join();

    }

}
