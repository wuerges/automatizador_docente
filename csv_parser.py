import csv
import sys
import json

l =  []

with open(sys.argv[1]) as f:
    r = csv.reader(f)
    for row in r:
        li = list(row)
        l.append(li)

print(json.dumps(list(l)))

