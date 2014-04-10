#!/bin/sh

ES_VERSION="1.1.0"

echo Installing elasticsearch repository
	wget -O - http://packages.elasticsearch.org/GPG-KEY-elasticsearch | apt-key add -
	echo 'deb http://packages.elasticsearch.org/elasticsearch/1.1/debian stable main' | tee /etc/apt/sources.list.d/elasticsearch.list

echo Install APT Packages
	apt-get update

echo Install Java JDK
	apt-get -y install openjdk-7-jdk
	update-java-alternatives -s java-1.7.0-openjdk-amd64	

echo Install Elasticsearch
	apt-get -y install elasticsearch=$ES_VERSION
	update-rc.d elasticsearch defaults

echo Install Attachments Plugin
    cd /usr/share/elasticsearch
    bin/plugin -install elasticsearch/elasticsearch-mapper-attachments/2.0.0

echo Launch Elasticsearch
  	service elasticsearch start


