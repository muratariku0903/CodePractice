<?php

function test($func, $test_data)
{
    foreach ($test_data as $test_el) {
        $start = microtime(true);

        if (is_array($test_el)) {
            var_dump($func(...$test_el));
        } else {
            var_dump($func($test_el));
        }

        $end = microtime(true);
        print '処理時間' . strval(round((($end - $start) / 1000), 10)) . "ms\n\n";
    }
}
