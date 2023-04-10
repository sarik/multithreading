package org.example;

import com.github.javafaker.Faker;
import org.w3c.dom.ls.LSOutput;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;
import reactor.core.scheduler.Schedulers;

import java.awt.*;
import java.sql.Array;
import java.sql.SQLOutput;
import java.time.Duration;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Map;
import java.util.concurrent.CompletableFuture;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.ExecutionException;
import java.util.stream.Collectors;
import java.util.stream.IntStream;
import java.util.stream.Stream;

class Consumer {

    String name;

    @Override
    public String toString() {
        return name + "\n";
    }

    public Consumer(String name) {
        this.name = name;
    }

    public void consume(String s) {
        System.out.println(s + " consumed by" + this.name + "from " + Thread.currentThread().getName().toUpperCase());
    }

}

public class Main {


    static Mono<Integer> just;

    public static void waitInSeconds(long seconds) {
        try {

            Thread.sleep(seconds * 1000);
        } catch (Exception e) {

        }
    }

    public static Mono<String> getName() {
        System.out.println("went into getting name");

        return Mono.fromSupplier(() -> {
            waitInSeconds(2);
            return Faker.instance().name().firstName();
        }).map(String::toUpperCase);
    }

    static String getRan() {
        System.out.println("check inside");
        return "random";
    }

    public static void main(String[] args) throws InterruptedException {
//        Thread t = new Thread(() -> {
//            System.out.println("inside child thread "+ Thread.currentThread().getName());
//        });

        Thread t = new Thread(new Runnable() {
            @Override
            public void run() {
                System.out.println("inside child thread " + Thread.currentThread().getName());
            }
        });

        System.out.println("Before scheduling a child thread from " + Thread.currentThread().getName());
        t.setName("my child");
        t.start();
        System.out.println("After scheduling a child thread from " + Thread.currentThread().getName());
        Thread.sleep(1000);
    }

    public static void mainold2(String[] args) throws InterruptedException, ExecutionException {

        Integer[] items = new Integer[]{1, 2};
        ArrayList<Double> fa = new ArrayList<>();

        fa.add(22.0);

        char s = 'C';

        System.out.println(Character.isDigit(s));
        System.out.println(Double.isNaN(20.0 / 0.0));

        Flux.zip(Flux.fromIterable(List.of(1, 2, 3)), Flux.fromStream(List.of(11, 22, 33, 44).stream()))
                .subscribe(System.out::println);

        System.out.println("immediate after zip");

        Stream<Integer> someintstream = List.of(1, 2, 3).stream().map((v) -> {
            System.out.println("inside int stream");
            try {
                Thread.sleep(3000);
            } catch (InterruptedException e) {
                throw new RuntimeException(e);
            }
            return v + 3;
        });
        //.parallel();
        //.forEach(System.out::println);

        CompletableFuture.supplyAsync(() -> {
            someintstream.forEach(System.out::println);
            System.out.println("processing in a completavle futute");
            return "";
        });


        System.out.println("immediate after");

        Stream.of(List.of(1, 2, 3)).forEach(System.out::println);

        Mono.fromFuture(CompletableFuture.supplyAsync(() -> {
                    try {
                        Thread.sleep(2000);
                    } catch (InterruptedException e) {
                        throw new RuntimeException(e);
                    }
                    System.out.println("completable future creates something from thread " + Thread.currentThread().getName());
                    return "something";
                })).map(val -> val + "new content")
                //.thenReturn("nothing at last")
                .subscribe(System.out::println);

        CompletableFuture sm = CompletableFuture.supplyAsync(() -> {
            try {
                Thread.sleep(2000);
            } catch (InterruptedException e) {
                throw new RuntimeException(e);
            }
            return "something is there ";
        }).thenAccept(System.out::println);

        System.out.println("after first");


        Boolean a = new Boolean("trues");
        Integer as = new Integer("23");

        System.out.println(a.booleanValue());
        System.out.println(as.intValue());

        var classConsumerFlux = Flux.fromIterable(List.of(new Consumer("Sarik1"),
                        new Consumer("Sarik 2"), new Consumer("Sarik3")))
                .map(val -> {
                    try {
                        Thread.sleep(2000);
                    } catch (InterruptedException e) {
                        throw new RuntimeException(e);
                    }
                    return val;
                })
                .doOnNext(val -> val.name = "Changed you idiot")
                .subscribe(System.out::println);

        Flux<Integer> fluxFromInt = Flux.fromIterable(List.of(1, 2))
                .defaultIfEmpty(919);
//                .subscribe((v) -> {
//            try {
//                Thread.sleep(5000);
//            } catch (InterruptedException e) {
//                throw new RuntimeException(e);
//            }
//            System.out.println(v);
//        });


        fluxFromInt.map(v -> Integer.toString(v)).doOnNext(v -> {
            System.out.println("in next");
            try {
                Thread.sleep(2000);
            } catch (InterruptedException e) {
                throw new RuntimeException(e);
            }
            // return v;
            v = "333";

        }).subscribe(v -> System.out.println("from consumer " + v));


        Map<String, String> nameDir = Map.of("name", "Sarik",
                "surname", "Siddiqui"
        );

        var entrySet = nameDir.entrySet();

        for (Map.Entry<String, String> eset : entrySet) {
            String key = eset.getKey();
            String value = eset.getValue();
            System.out.println("key: " + key + " value " + value);
        }
        var someflux = Flux.fromIterable(List.of(1, 2, 3, 4, 5, 6, 2, 2, 2, 2)).map(val -> {
                    try {
                        Thread.sleep(3000);
                    } catch (InterruptedException e) {
                        throw new RuntimeException(e);
                    }
                    return val;
                })
                .handle((val, sink) -> {
                    System.out.println(val + "checking");
                    if (val != 2) {
                        sink.next(22);
                    } else {
                        sink.next(22);
                    }
                }).map(String::valueOf);

        Flux.fromIterable(List.of(1, 2, 3, 4, 5, 6, 2, 2, 2, 2)).map(val -> {
                    try {
                        Thread.sleep(3000);
                    } catch (InterruptedException e) {
                        throw new RuntimeException(e);
                    }
                    return val;
                })
                .handle((val, sink) -> {
                    System.out.println(val + "checking");
                    if (val != 2) {
                        sink.next("yes");
                    } else {
                        sink.next("no");
                    }
                })
                //.subscribeOn(Schedulers.boundedElastic())
                //.map(va -> Integer.parseInt((String) va))
                .subscribe(v -> {
                    System.out.println("subscribed in " + Thread.currentThread().getName() + " thread");
                    System.out.println(v);
                });
        System.out.println("first line");
        Mono.fromFuture(CompletableFuture.supplyAsync(() -> {

                    System.out.println("executing in thread " + Thread.currentThread().getName());
                    try {
                        Thread.sleep(4000);
                    } catch (InterruptedException e) {
                        throw new RuntimeException(e);
                    }
                    return 22;
                }))
                //.subscribeOn(Schedulers.boundedElastic())
                .subscribe((val) -> {
                    System.out.println("collecting in thread " + Thread.currentThread().getName());
                    System.out.println(val);
                });


//        Mono.fromSupplier(() -> {
//
//                    System.out.println("executing in thread " + Thread.currentThread().getName());
//                    try {
//                        Thread.sleep(4000);
//                    } catch (InterruptedException e) {
//                        throw new RuntimeException(e);
//                    }
//                    return 22;
//                })
//                .subscribeOn(Schedulers.boundedElastic())
//                .subscribe((val) -> {
//                    System.out.println("collecting in thread " + Thread.currentThread().getName());
//                    System.out.println(val);
//                });
        //Mono<Integer> monoInd =
        Mono.fromSupplier(() -> {
                    System.out.println("executing in thread " + Thread.currentThread().getName());

                    try {
                        Thread.sleep(0);
                    } catch (InterruptedException e) {
                        throw new RuntimeException(e);
                    }
                    return 2;
                }).map(val -> val * 2)
                .block();
        System.out.println("after mono");

        List<Consumer> consStream = IntStream.range(1, 11).
                mapToObj(i -> new Consumer(i + "::" + Faker.instance().name().firstName()))
                .parallel()
                .peek(i -> {
                    try {
                        Thread.sleep(2000);
                    } catch (InterruptedException e) {
                        throw new RuntimeException(e);
                    }
                })
                //.toList();
                .collect(Collectors.toList());

        System.out.println(consStream);
        //System.out.println(monoInd.block());


        var ab = CompletableFuture.supplyAsync(() -> {
            try {
                Thread.sleep(2000);
            } catch (InterruptedException e) {
                throw new RuntimeException(e);
            }
            System.out.println("Checking completable future supply thread in " + Thread.currentThread().getName());
            return 22;
        }).thenCombine(CompletableFuture.supplyAsync(() -> {
            try {
                Thread.sleep(1000);
            } catch (InterruptedException e) {
                throw new RuntimeException(e);
            }
            System.out.println("executing second completable future on thread " + Thread.currentThread().getName());
            return 33;
        }), (s1, s2) -> s1 + s2);
//                .thenAccept(res -> {
//            System.out.println("executing get step on thread " + Thread.currentThread().getName());
//            System.out.println(res);
//        });

        System.out.println("just chilling");

        Consumer sarik = new Consumer("Sarik");
        Consumer sajda = new Consumer("Sajda");

        var flux = Flux.fromStream(Stream.of("scene 1", "scene 2", "scene 1", "scene 2", "scene 1", "scene 2", "scene 1",
                        "scene 2", "scene 1", "scene 2", "scene 1", "scene 2", "scene 1", "scene 2", "scene 1", "scene 2",
                        "scene 1", "scene 2", "scene 1", "scene 2", "scene 1", "scene 2", "scene 1", "scene 2", "scene 1", "scene 2")
                //.parallel()
        ).delayElements(Duration.ofSeconds(2));
        flux.subscribe(sarik::consume);
        Thread.sleep(100000);
        System.out.println(Thread.currentThread().getName());
//        flux.subscribe(sajda::consume);
//
//        Flux.generate(() -> 1, (count, sink) -> {
//            if (count == 10) {
//                sink.complete();
//            } else {
//                sink.next(count);
//            }
//            return count + 1;
//        }).subscribe(System.out::println);
//        Flux.generate(sink -> {
//            var nextCountry = Faker.instance().country().name();
//            if (!nextCountry.toUpperCase().equals("INDIA")) {
//                sink.next(nextCountry);
//            } else {
//                sink.next(nextCountry);
//                sink.complete();
//            }
//        }).subscribe(System.out::println);
//
//        System.out.println("10 printed");
//
//
//        Flux<Integer> newFLuxx = Flux.create(fluxSink -> {
//            fluxSink.next(111);
//            waitInSeconds(2);
//            fluxSink.next(222);
//            waitInSeconds(2);
//            fluxSink.next(333);
//            waitInSeconds(2);
//            fluxSink.complete();
//        });
//
//        CompletableFuture<String> cf = CompletableFuture.supplyAsync(() -> {
//            newFLuxx.subscribe(System.out::println);
//            return "";
//        });
//
////        List<Integer> newList = List.of(2, 4, 6, 8, 10);
////        Stream<Integer> newStream = newList.stream().map(val -> {
////            waitInSeconds(2);
////            return val;
////        });
//
//        CompletableFuture.supplyAsync(() -> {
//            System.out.println("inside completable future check");
//            return getRan();
//        });
//        //.thenAccept(System.out::println);
//
//
//        //newStream.parallel().forEach(System.out::println);
//        //Flux.fromStream(newStream.parallel()).subscribe(System.out::println);
//        Flux<String> someflux = Flux.range(0, 5).map((vv) -> {
//            waitInSeconds(2);
//            return Faker.instance().name().firstName() + " from fllux";
//        });
//
//        var com = CompletableFuture.supplyAsync(() -> {
//            someflux.subscribe(System.out::println);
//            return "All five names done";
//        }).thenAccept(System.out::println);
//
//
//        System.out.println("Done");
//        Flux.range(1, 100).subscribe(System.out::println);
//
//        List<Integer> someStream = List.of(10, 11, 12, 13, 14);
//        Stream<Integer> stream = someStream.stream();
//
//        //stream.forEach(System.out::println);
//
//        Flux<Integer> ssomeflux = Flux.fromStream(stream);
//        ssomeflux.subscribe(System.out::println);
//        ssomeflux.subscribe(System.out::println, err -> System.out.println(err.getMessage()), System.out::println);
//
//
//        /*
//        Can be used only once
//         stream.forEach(System.out::println);
//        int[] ints = new int[5];
//        */
//
//
//        int[] ints = {1, 2, 3, 4, 5};
//        Flux.fromArray(Arrays.stream(ints).boxed().toArray()).filter(val -> (Integer) val % 2 == 0).subscribe(System.out::println);
//
//
//        Flux<Integer> fi = Flux.fromIterable(List.of(1, 2, 3, 4, 5));
//        fi.subscribe(System.out::println);
//
//
//        CompletableFuture<String> some = CompletableFuture.supplyAsync(() -> {
//            waitInSeconds(3);
//            return "mystring";
//        });
//
//        Mono.fromFuture(some).subscribe(System.out::println);
//        System.out.println("one");
//
//        Thread.sleep(5000);
//        com.join();

    }

    public static void main_old(String[] args) throws InterruptedException {

        CompletableFuture<String> some = CompletableFuture.supplyAsync(() -> {
            System.out.println("completable future demo");
            waitInSeconds(13);
            return "name is the name";
        });

        Thread t = new Thread(() -> {
            System.out.println(some.join());
        });
        t.start();


        System.out.println("Hello world!");

        getName();
        getName().subscribeOn(Schedulers.boundedElastic()).subscribe(System.out::println);
        getName();


        Thread tt = new Thread(() -> {
            try {
                Thread.sleep(2000);
                System.out.println("something in child thread");
                just = Mono.just(1).map(v -> 1 / 0);
                just = Mono.error(new RuntimeException("something happened"));
                just.subscribe(System.out::println, (err) -> {
                    System.out.println("error " + err.getMessage() + " " + Faker.instance().animal().name());
                }, () -> System.out.println("completed"));

            } catch (InterruptedException e) {
                throw new RuntimeException(e);
            }
        });
        tt.start();


        tt.join();
        System.out.println("tt joined");

        //Thread.sleep(4000);


    }
}