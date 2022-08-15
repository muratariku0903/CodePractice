import sys
import subprocess

command = 'kernprof -l index.py'
command = 'kernprof'

try:
    res = subprocess.check_output(command)
    print(res)
except Exception as e:
    print('Error')
    print(e)
