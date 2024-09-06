/*
Node.js'deki "process" ve "thread" terimleri, işletim sistemi ve yazılım geliştirme dünyasında kullanılan kavramlardır 
ve farklı anlamlara gelirler."Process" (işlem), bir işletim sisteminde çalışan ve bellekte bulunan bir uygulama veya 
komut satırı komutudur. Her process, ayrı bir bellek alanına ve ayrı bir CPU zamanına sahiptir ve diğer işlemlerden 
tamamen ayrıdır. Node.js, bir işletim sistemi işlemi olarak çalışan bir JavaScript motorudur ve Node.js kodunuz bir 
Node.js işlemini ifade eder.
"Thread" (iş parçacığı), bir işletim sistemi işlemi içinde çalışan ve bir işlem tarafından paylaşılan bellek alanına 
sahip bir iş parçacığıdır. Her iş parçacığı, ayrı bir CPU zamanına sahiptir ve bir işlem içinde birden fazla iş parçacığı 
çalıştırılabilir.
Node.js, bir işletim sistemi işlemi olarak çalıştığı için iş parçacığı kavramını desteklemez ve yerine tek bir iş
parçacığı üzerinde çalışan bir işlem modeli kullanır. Bunun nedeni, Node.js'nin JavaScript motorunun sınırlı
bellek alanına sahip olduğu ve bu bellek alanının birçok iş parçacığı arasında paylaşılmasının zor olmasıdır. 
Bunun yerine, Node.js, birden fazla işlemi (örneğin, çocuk işlemler) oluşturarak bu işlemler arasında veri
 alışverişi yapmasını ve bellek bölümlemesini sağlar. */

/*Node.js'de "child process" (çocuk işlem), bir Node.js işleminde çalışan ve bu işlemin yanı sıra 
ayrı bir işlem olarak çalışan bir işlemdir. Bu, Node.js işleminin büyük veya zor bir görevi parçalara
bölerek daha hızlı ve verimli bir şekilde çalışmasını veya diğer işletim sistemi araçlarını çağırmasını
ve bunların çıktılarını kullanmasını sağlar.
Node.js'de child_process modülü, çocuk işlemler oluşturmak, yönetmek ve bunlarla iletişim kurmak için 
gereken araçları sunar. Bu modül, çocuk işlemleri oluşturmak için spawn(), exec(), execFile() ve fork() 
gibi fonksiyonlar içerir.
Örneğin, aşağıdaki kod, ls komutunu bir çocuk işlem olarak çalıştırır ve çıktısını ekrana yazdırır: */

/* child-process; exec, execFile, spawn, fork metodlarına sahiptir. */