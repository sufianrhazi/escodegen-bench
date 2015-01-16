Benchmark Results:

| JS Runtime    | mean over 5 runs (ns) |
| ------------- | --------------------- |
| node v0.10.16 | 2867683795.0          |
| io.js 1.0.2   | 5312892821.4          |

---

```
$ uname -r
2.6.32-220.4.1.el6.x86_64

$ /home/srhazi/ext/io.js/iojs-v1.0.2-linux-x64/bin/iojs --version
v1.0.2
$ /home/srhazi/ext/io.js/iojs-v1.0.2-linux-x64/bin/iojs bench.js
5375503758
$ /home/srhazi/ext/io.js/iojs-v1.0.2-linux-x64/bin/iojs bench.js
4722964416
$ /home/srhazi/ext/io.js/iojs-v1.0.2-linux-x64/bin/iojs bench.js
6528912783
$ /home/srhazi/ext/io.js/iojs-v1.0.2-linux-x64/bin/iojs bench.js
5586535356
$ /home/srhazi/ext/io.js/iojs-v1.0.2-linux-x64/bin/iojs bench.js
4350547794

$ node --version
v0.10.16
$ node bench.js
3177948459
$ node bench.js
2925061488
$ node bench.js
2947895527
$ node bench.js
2342236063
$ node bench.js
2945277438
```
