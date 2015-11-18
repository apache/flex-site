#!/bin/sh
# Alex’s wrapper around the standard mirrors.cgi script to try to fix formatting
echo "Content-Type: text/plain"
/www/www.apache.org/dyn/mirrors/mirrors.cgi $* >.\mirrors.json
echo "Did I even get here?"

