CLI tool
========
The application encode and decode a text by 3 substitution ciphers.
CLI tool accept 3 options:
1.  **-c, --config**: config for ciphers
    Config is a string with pattern `{XY(-)}n`, where:
* `X` is a cipher mark:
    * `C` is for Caesar cipher (with shift 1)
    * `A` is for Atbash cipher
    * `R` is for ROT-8 cipher
* `Y` is flag of encoding or decoding (mandatory for Caesar cipher and ROT-8 cipher and should not be passed Atbash cipher)
    * `1` is for encoding
    * `0` is for decoding
2. **-i, --input**: a path to input file, if this option is missed - it will use `stdin` as an input source
3. **-o, --output**: a path to output file, if this option is missed - it will use `stdout` as an output destination

QUICK START
-----------

**successful examples:**

```bash
$ node index -c "C1-C1-R0-A" -i "./input.txt" -o "./output.txt"
```

> input.txt
> `This is secret. Message about "_" symbol!`

> output.txt
> `Myxn xn nbdobm. Tbnnfzb ferlm "_" nhteru!`

```bash
$ node index -c "C1-C1-R0-A"
```

> process.stdin
> `This is secret. Message about "_" symbol!`

> process.stdout
> `Myxn xn nbdobm. Tbnnfzb ferlm "_" nhteru!`






