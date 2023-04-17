package org.example;

import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;

public class ExecutorExample {

    public static class Work implements Runnable{

        private int id;

        public Work(int id) {
            this.id = id;
        }

        @Override
        public void run() {
            System.out.println("Starting work for word id "+ id);
            try {
                Thread.sleep(15000);
                System.out.println("done with task "+id);
            } catch (InterruptedException e) {
                throw new RuntimeException(e);
            }
        }
    }

    public static void main(String[] args) {

        ExecutorService executorService = Executors.newFixedThreadPool(5);

        for (int i = 0; i < 10; i++) {
            executorService.submit(new Work(i+1));

        }

        executorService.shutdown();
    }
}
