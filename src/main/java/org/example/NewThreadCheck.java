package org.example;

import java.util.Random;

public class NewThreadCheck {

    public int someFunc() {

        Thread someThread = new Thread(() -> {
            for (int i = 0; i < 10; i++) {
                try {
                    System.out.println("trying");
                    Thread.sleep(2000);

                } catch (InterruptedException e) {
                    throw new RuntimeException(e);
                }
            }
        });
        someThread.start();

        return 23;
    }


    public static void main(String[] args) throws InterruptedException {
        NewThreadCheck newThreadCheck = new NewThreadCheck();
        int val = newThreadCheck.someFunc();
        System.out.println(val);
        Thread.sleep(200000);

    }
}
