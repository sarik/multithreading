package org.example;

public class WaitNotify {

    public static class Resource {

        private boolean isComplete = false;

        public void letMeSleep(){
            try {
                Thread.sleep(2000);
            } catch (InterruptedException e) {
                throw new RuntimeException(e);
            }
            this.isComplete = true;
            notify();
        }

        public void letMeRun(){
            try {
                while(this.isComplete == false){
                    wait();
                }
                Thread.sleep(2000);
            } catch (InterruptedException e) {
                throw new RuntimeException(e);
            }
            System.out.println("I am doing work now");
        }

    }


    public static void main(String[] args) {

        Resource resource = new Resource();
        Thread t1 = new Thread(() -> {});
        Thread t2 = new Thread(() -> {});


    }
}
