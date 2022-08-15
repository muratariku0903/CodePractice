<?php

require_once('test.php');
require_once('functions.php');


function func($words1, $words2)
{
    $ans = 0;
    $words1_counter = array_count_values($words1);
    $words2_counter 
    dump(array_intersect($words1_counter, $words2_counter));
    foreach ($words1_counter as $word1 => $cnt1) {
        if ($cnt1 > 1) continue;
        if (array_key_exists($word1, $words2_counter) && $words2_counter[$word1] === 1) $ans++;
    }
    return $ans;
}


$test_data = [
    [["leetcode", "is", "amazing", "as", "is"], ["amazing", "leetcode", "is"]],
    [["b", "bb", "bbb"], ["a", "aa", "aaa"]],
    [["a", "ab"], ["a", "a", "a", "ab"]],
];

test('func', $test_data);
