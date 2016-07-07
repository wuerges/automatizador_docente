import csv
import sys
import json

l =  []

with open(sys.argv[1]) as f:
    r = csv.reader(f)
    for row in r:
        li = []
        for c in row:
            li.append(c)

        l.append(li)

l = zip(*l)

print(json.dumps(list(l)))


