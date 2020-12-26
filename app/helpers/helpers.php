<?php
/**
 * @param string $url
 * @param string $rid
 * @return string
 */
function bInitData(string $url = null, string $rid = null): string
{
    if (!$url) $url = url()->current();
    if (!$rid) $rid = uniqid();

    return "{url:'$url',rid:'$rid'}";
}

/**
 * Used to apply active class to the frontend views
 * @param string $name
 * @param string | array $class String or One Dimensional String Array
 * @return string
 */
function isActiveRoute(string $name, $class = 'active')
{
    return request()->route()->getName() === $name ? (is_array($class) ? join(' ', $class) : $class) : '';
}

