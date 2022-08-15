<?php

function dump(...$values)
{
    foreach ($values as $value) {
        if (is_array($value)) {
            print_r($value);
        } else {
            print($value . ' ');
        }
    }
    print(PHP_EOL);
}


function get_test_data($size = 10, $type = 'INT', $min = 0, $max = 100)
{
    $result = [];

    for ($i = 0; $i < $size; $i++) {
        if ($type === 'INT') {
            $result[] = random_int($min, $max);
        } elseif ($type === "STR") {
            $result[] = chr(random_int($min, $max));
        }
    }

    return $result;
}

function arr_key_last($array)
{
    if (!is_array($array) || empty($array)) {
        return NULL;
    }

    return array_keys($array)[count($array) - 1];
}


function is_empty($value)
{
    return $value === null or $value === '' or $value === [];
}

function combination(array $arr, int $r, bool $unique): ?array
{
    // 重複させたくないなら、重複した値を削除して，数値添字配列にする
    if ($unique) $arr = array_values(array_unique($arr));

    $n = count($arr);
    $result = []; // 最終的に二次元配列にして返す

    // nCr の条件に一致していなければ null を返す
    if ($r < 0 || $n < $r) {
        return null;
    }

    if ($r === 1) {
        foreach ($arr as $item) {
            $result[] = [$item];
        }
    }

    if ($r > 1) {
        // n - r + 1 回ループ
        for ($i = 0; $i < $n - $r + 1; $i++) {
            // $sliced は $i + 1 番目から末尾までの要素
            $sliced = array_slice($arr, $i + 1);
            // 再帰処理 二次元配列が返ってくる
            $recursion = combination($sliced, $r - 1, $unique);
            foreach ($recursion as $one_set) {
                array_unshift($one_set, $arr[$i]);
                $result[] = $one_set;
            }
        }
    }

    return $result;
}
