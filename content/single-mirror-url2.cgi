#!/bin/sh
# Alex’s wrapper around the standard mirrors.cgi script to try to fix formatting
Content-Type: text/plain
exec /www/www.apache.org/dyn/mirrors/mirrors.cgi >/dev/null
print preferred
