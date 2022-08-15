import time


def test(func, test_data):
    for test_el in test_data:
        start = time.time()

        if not isinstance(test_el, list):
            print('結果', func(test_el))
        else:
            print('結果', func(*test_el))

        elapsed_time = '{:f}'.format((time.time() - start)*1000)
        print("{0}".format(elapsed_time) + "[ms]\n")
