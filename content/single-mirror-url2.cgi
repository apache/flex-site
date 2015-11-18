#!/bin/sh
# Alex’s wrapper around the standard mirrors.cgi script to try to fix formatting
exec /www/www.apache.org/dyn/mirrors/mirrors.cgi >mirrors.out
grep ‘http’ mirrors.out
 