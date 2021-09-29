

# code from https://github.com/l0k3ndr/log-of-learning/blob/master/readme_generator.py

import os
import re
from datetime import datetime

readme_file = open("README.md","w")

def override_print(x):
    readme_file.write(x+"\n")

print = override_print

BLOB_PATH="https://github.com/...../notes"

mds = [ md for md in os.listdir("./notes/") if md.endswith(".md") ]
mds.remove('notes-dd-mmm-yyyy.md')

mds.sort(key = lambda date: datetime.strptime(date.split(".")[0].split("notes-")[1], '%d-%b-%Y')) 

date_arr = []

categories = []
result = []
k = 1

last_type = None


for md in mds:
    data = open("./notes/"+md).readlines()

    temp_res = []

    temp_content = []
    for line in data:
        if re.search("### \d+ - ", line.strip()):

            temp_res += [ ("["+(line.strip().split(" - ",1)[1]).capitalize() + "]("+ BLOB_PATH + md + "#" +  line.strip().lower().replace("###","")[1:].replace(" ","-").replace("?","").replace("(","").replace(")","").replace(",","").replace("_","") + ") ")]
            date_arr += [md.split(".md")[0].split("notes-")[1]]
            k = k+1


    result += list(reversed(list(temp_res)))



prefix = """
 _                               __         _                            _
| |  ___    __ _          ___   / _|       | |  ___   __ _  _ __  _ __  (_) _ __    __ _
| | / _ \  / _` | _____  / _ \ | |_  _____ | | / _ \ / _` || '__|| '_ \ | || '_ \  / _` |
| || (_) || (_| ||_____|| (_) ||  _||_____|| ||  __/| (_| || |   | | | || || | | || (_| |
|_| \___/  \__, |        \___/ |_|         |_| \___| \__,_||_|   |_| |_||_||_| |_| \__, |
           |___/                                                                   |___/
"""

prefix = "\n".join([" "*8+s for s in prefix.split("\n")]) +"\n"

prefix_sub = """
| LINK |
|------|"""



#print (prefix + "\n".join(list(reversed([ "|" + str(i+1)+"|" + result[i] + "|" + date_arr[i] + "|" for i in range(len(result))]))))

print( prefix)

print("[ "+ str(len(result)) + " ]")

print (prefix_sub)
print ( "\n".join(list(reversed([ "|" +  result[i] + "|" for i in range(len(result))]))))

readme_file.close()


