# Minify css

*Last update: 2024/08/19*

    file1 = open("normal.css", "r")
    file_line_list = file1.readlines()
    file1.close
    file2 = open("minified.css", "a")
    x = ' '.join([line.strip() for line in file_line_list])
    file2.write(x)
    file2.close

[Source code](http://handbook.avsbq.org/cs/python/src/minify.py)
