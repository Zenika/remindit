#!/bin/sh

echo Installing MongoDB repository
	apt-key adv --keyserver keyserver.ubuntu.com --recv 7F0CEB10
	echo 'deb http://downloads-distro.mongodb.org/repo/debian-sysvinit dist 10gen' | tee /etc/apt/sources.list.d/mongodb.list

echo Install APT Packages
	apt-get update

echo Installing MongoDB
	apt-get install -y mongodb-10gen