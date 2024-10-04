<!DOCTYPE HTML>
<html>
<head>
    <title>%($pageTitle%)</title>
    <link rel="stylesheet" href="http://pariffin.org/arif.css" type="text/css" media="screen, handheld" title="default">
    <meta charset="UTF-8">
% h = `{get_lib_file headers.inc}
% if(: ~ $#h 0)
%   cat $h
    %($"extraHeaders%)
</head>
<body>

