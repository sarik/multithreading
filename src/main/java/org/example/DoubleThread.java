package org.example;

import java.util.Random;

public class DoubleThread {

    private static class BusinessThread extends Thread {

        private Metrics metrics;
        private Random random = new Random();

        public BusinessThread(Metrics metrics) {
            this.metrics = metrics;
        }

        @Override
        public void run() {
            while (true) {
                long start = System.currentTimeMillis();
                try {
                    Thread.sleep(random.nextInt(10));
                } catch (InterruptedException e) {
                    throw new RuntimeException(e);
                }
                metrics.addSample(System.currentTimeMillis() - start);
            }
        }
    }

    private static class MetricsPrinterThread extends Thread {

        private Metrics metrics;

        public MetricsPrinterThread(Metrics metrics) {
            this.metrics = metrics;
        }

        @Override
        public void run() {
            while (true) {
                try {
                    Thread.sleep(10);
                    System.out.println(metrics.getAverage());
                } catch (InterruptedException e) {
                    throw new RuntimeException(e);
                }

            }
        }
    }


    public static class Metrics {
        private long count;
        //since setter and getter on double are not atomic
        private volatile double average;

        public Metrics() {
            this.count = 0L;
            this.average = 0.0;

        }

        public synchronized void addSample(long sample) {
            double currSum = average * count;
            count++;
            average = (currSum + sample) / count;
        }

        public double getAverage() {
            //synchronized because of volatile keyword
            return this.average;
        }

    }

    public static void main(String[] args) {
        Metrics metrics = new Metrics();
        BusinessThread bt1 = new BusinessThread(metrics);
        BusinessThread bt2 = new BusinessThread(metrics);
        MetricsPrinterThread mt = new MetricsPrinterThread(metrics);

        bt1.start();
        bt2.start();
        mt.start();
    }
}
