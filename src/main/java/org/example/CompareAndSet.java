package org.example;

import java.util.concurrent.atomic.AtomicInteger;
import java.util.concurrent.locks.ReentrantLock;

public class CompareAndSet {


    public static void main(String[] args) {

        int[][] a = new int[3][];

        for (int i = 0; i < 3; i++) {
            int[] b = new int[4];
            for (int j = 0; j < 4; j++) {
                b[j] = 33;

            }
            a[i] = b;

        }

        //a[2][5] =45;

        for (int i = 0; i < 3; i++) {
            for (int j = 0; j < 6; j++) {
                System.out.println(a[i][j]);
            }
            System.out.println("*******");

        }

        AtomicInteger count = new AtomicInteger(0);

        if (count.compareAndSet(0, 4)) {
            System.out.println("changed new value to 4");
            System.out.println(count.get());
        } else {
            System.out.println("didnt change new value to 4");
            System.out.println(count.get());
        }
    }
}
