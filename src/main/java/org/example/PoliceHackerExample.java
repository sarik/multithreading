package org.example;

import org.w3c.dom.ls.LSOutput;

import javax.print.attribute.standard.RequestingUserName;
import java.math.BigInteger;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Random;
import java.util.concurrent.CompletableFuture;

public class PoliceHackerExample {

    public static final int MAX_PASSWORD = 9999;

    public static class Vault {

        private int password;

        public Vault(int password) {
            this.password = password;
        }

        public boolean isCorrect(int guess) {
            try {
                Thread.sleep(3);
            } catch (InterruptedException e) {
                throw new RuntimeException(e);
            }
            return this.password == guess;
        }
    }

    public static class FactorialThread extends Thread {
        private long inputNumber;
        private BigInteger result;
        private boolean isFinished;

        public FactorialThread(long inputNumber) {
            this.inputNumber = inputNumber;
        }

        @Override
        public void run() {
            this.result = factorial(this.inputNumber);
            this.isFinished = true;
        }

        public BigInteger factorial(long inputNumber) {
            BigInteger tempResult = BigInteger.ONE;
            for (long i = 2; i <= inputNumber; i++) {
                if (this.isInterrupted()) {
                    System.out.println("I am interrupted,returning " + BigInteger.ZERO);
                    return BigInteger.ZERO;
                }
                tempResult = tempResult.multiply(new BigInteger(Long.toString(i)));

            }
            return tempResult;
        }

        public boolean isFinished() {
            return this.isFinished;
        }

        public BigInteger getResult() {
            return this.result;
        }

    }

    public static void main(String[] args) throws InterruptedException {

        String somestr = "My nmyname is Sarik";

        Long rt = 1000L;
        long g = rt.longValue();
        Long h = Long.valueOf(g);

        System.out.println(somestr.indexOf("name", 4));

        CompletableFuture.supplyAsync(() -> {

                    try {
                        Thread.sleep(2000);
                        System.out.println("Going to sleep in thread " + Thread.currentThread().getName());
                    } catch (InterruptedException e) {
                        throw new RuntimeException(e);
                    }
                    return 33;
                })
                .thenCombine(CompletableFuture.supplyAsync(() -> {

                    try {
                        Thread.sleep(2000);
                        System.out.println("Going to sleep in thread " + Thread.currentThread().getName());
                    } catch (InterruptedException e) {
                        throw new RuntimeException(e);
                    }
                    return 44;
                }), (a, b) -> Integer.valueOf(a) + Integer.valueOf(b))
                .thenAccept(System.out::println);

        System.out.println("Anyway progressing");
        List<Long> inputNumbers = Arrays.asList(0L, 3435L, 23L, 3212L, 100000000L);
        List<FactorialThread> threads = new ArrayList<>();

        for (long input : inputNumbers) {
            threads.add(new FactorialThread(input));

        }

        for (FactorialThread thread : threads) {
            thread.start();
        }
        for (FactorialThread thread : threads) {
            thread.join(20000);
        }


        for (int i = 0; i < inputNumbers.size(); i++) {
            if (threads.get(i).isFinished()) {
                System.out.println(inputNumbers.get(i) + " Thread has returned value " + threads.get(i).getResult());
            } else {
                System.out.println(inputNumbers.get(i) + " Thread is still running ");

            }

        }

        //Thread.sleep(2000);
        for (FactorialThread thread : threads) {
            if (thread.isAlive()) {
                thread.interrupt();
            }
        }

//        Thread nonRespindingThread = new Thread(() -> {
//            try {
//                Thread.sleep(6000);
//            } catch (InterruptedException e) {
//                System.out.println("I was interrupted since i was hanging around too long");
//            }
//        });
//
//        nonRespindingThread.start();
//        nonRespindingThread.is
//
//        Thread.sleep(2000);
//        nonRespindingThread.interrupt();

    }

    public static void main_old(String[] args) {
        Random random = new Random();
        Vault vault = new Vault(random.nextInt(MAX_PASSWORD));

        List<Thread> allThreads = new ArrayList<>();
        allThreads.add(new Police());
        allThreads.add(new AscendingHacker(vault));
        allThreads.add(new DescendingHacker(vault));

        for (Thread t : allThreads) {
            t.start();
        }


    }


    public static abstract class HackerThread extends Thread {

        protected Vault vault;

        public HackerThread(Vault vault) {
            this.vault = vault;
            this.setName(this.getClass().getSimpleName());
            this.setPriority(Thread.MAX_PRIORITY);
        }


        @Override
        public synchronized void start() {
            System.out.println("Starting hacker " + this.getClass().getSimpleName());
            super.start();
        }
    }

    public static class AscendingHacker extends HackerThread {

        public AscendingHacker(Vault vault) {
            super(vault);
        }

        @Override
        public void run() {
            for (int i = 0; i <= MAX_PASSWORD; i++) {
                System.out.println("Attempt by hacker");
                if (this.vault.isCorrect((i))) {
                    System.out.println("Vault broken by " + Thread.currentThread().getName());
                    System.exit(0);
                }
            }
        }
    }

    public static class DescendingHacker extends HackerThread {

        public DescendingHacker(Vault vault) {
            super(vault);
        }

        @Override
        public void run() {
            for (int i = MAX_PASSWORD; i >= 0; i--) {
                System.out.println("Attempt by hacker");
                if (this.vault.isCorrect((i))) {
                    System.out.println("Vault broken by " + Thread.currentThread().getName());
                    System.exit(0);
                }
            }
        }
    }

    public static class Police extends Thread {

        public Police() {
            this.setPriority(Thread.MAX_PRIORITY);
        }

        @Override
        public void run() {
            for (int i = 10; i > 0; i--) {
                try {
                    Thread.sleep(1000);
                } catch (InterruptedException e) {
                    throw new RuntimeException(e);
                }
                System.out.println("Police arriving in " + i + " seconds");
            }
            System.out.println("Hacker caught");
            System.exit(0);
        }
    }

}
