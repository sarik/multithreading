package org.example;

import java.util.Random;

public class RoadDeadlock {

    public static class Intersection {
        private Object RoadA = new Object();
        private Object RoadB = new Object();

        public void takeRoadA() {

            synchronized (RoadA) {
                System.out.println("Road A is locked by Thread " + Thread.currentThread().getName());
                synchronized (RoadB) {
                    try {
                        System.out.println("Train is passing through Road A");
                        Thread.sleep(1);
                    } catch (InterruptedException e) {
                        throw new RuntimeException(e);
                    }
                }
            }
        }

        public void takeRoadB() {

            synchronized (RoadB) {
                System.out.println("Road B is locked by Thread " + Thread.currentThread().getName());
                synchronized (RoadA) {
                    try {
                        System.out.println("Train is passing through Road B");
                        Thread.sleep(1);
                    } catch (InterruptedException e) {
                        throw new RuntimeException(e);
                    }
                }
            }
        }
    }

    public static class TrainA implements Runnable {

        private Intersection intersection;
        private Random random = new Random();

        public TrainA(Intersection intersection) {
            this.intersection = intersection;
        }


        @Override
        public void run() {
            while (true) {
                try {
                    Thread.sleep(random.nextInt(10));
                    intersection.takeRoadA();
                } catch (InterruptedException e) {
                    throw new RuntimeException(e);
                }


            }
        }
    }

    public static class TrainB implements Runnable {

        private Intersection intersection;
        private Random random = new Random();

        public TrainB(Intersection intersection) {
            this.intersection = intersection;
        }


        @Override
        public void run() {
            while (true) {
                try {
                    Thread.sleep(random.nextInt(10));
                    intersection.takeRoadB();
                } catch (InterruptedException e) {
                    throw new RuntimeException(e);
                }


            }
        }
    }

    public static void main(String[] args) {

        Intersection intersection = new Intersection();
        TrainA trainA = new TrainA(intersection);
        TrainB trainB = new TrainB(intersection);

        Thread t1 = new Thread(trainA);
        t1.setName("Train-A thread");
        Thread t2 = new Thread(trainB);
        t2.setName("Train-B thread");

        t1.start();
        t2.start();

        //At some point,while train A having locked road A now wants to lock road B so it could pass
        //At same point,train B has locked road B and now wants to lock road A to pass
        //Both are waiting other to release the lock they are waiting on


    }
}
