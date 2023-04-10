package org.example;

public class Notify {

    public static class MySharedClass {
        private boolean isComplete;

        public void waitUntilComplete() {
            synchronized (this) {
                while (isComplete == false) {
                    try {
                        this.wait();
                    } catch (InterruptedException e) {
                        throw new RuntimeException(e);
                    }
                }
                System.out.println("I see complete now");
                try {
                    Thread.sleep(2000);
                } catch (InterruptedException e) {
                    throw new RuntimeException(e);
                }
                System.out.println("Going to sleep off of my own");
            }

        }

        public void letMeComplete() {
            synchronized (this) {
                try {
                    Thread.sleep(2000);
                } catch (InterruptedException e) {
                    throw new RuntimeException(e);
                }
                this.isComplete = true;
                System.out.println("I am marking it complete");
                this.notify();

            }

        }
    }

    public static class WaitThread extends Thread {
        private MySharedClass mySharedClass;

        public WaitThread(MySharedClass mySharedClass) {
            this.mySharedClass = mySharedClass;
        }

        @Override
        public void run() {
            try {
                mySharedClass.waitUntilComplete();
            }
            catch (Exception e){
                System.out.println(e.getMessage());
            }
        }
    }

    public static class WorkerThread extends Thread {
        private MySharedClass mySharedClass;

        public WorkerThread(MySharedClass mySharedClass) {
            this.mySharedClass = mySharedClass;
        }

        @Override
        public void run() {
            mySharedClass.letMeComplete();
        }
    }


    public static void main_old(String[] args) throws InterruptedException {

        MySharedClass mySharedClass = new MySharedClass();
        Thread t1 = new WaitThread(mySharedClass);
        Thread t2 = new WorkerThread(mySharedClass);

        t1.start();
        t2.start();

        t2.join();
        t1.interrupt();
        System.out.println("t2 is done");

    }

    public static void main(String[] args) throws InterruptedException {
        Thread.currentThread().setName("parent");
        Thread t = new Thread(() -> {
            try {
                Thread.sleep(3000);
                System.out.println("done sleeping");
            } catch (InterruptedException e) {
                throw new RuntimeException(e);
            }
            System.out.println("done sleeping");
        });
        //t.setDaemon(true);
        t.setName("child one");
        t.setDaemon(true);
        t.start();

        System.out.println("exiting main");
        //Thread.sleep(5000);
    }
}
