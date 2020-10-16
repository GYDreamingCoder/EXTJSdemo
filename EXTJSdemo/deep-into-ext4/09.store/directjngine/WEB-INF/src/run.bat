set CLASSPATH=../lib/commons-fileupload-1.2.1.jar
set CLASSPATH=%CLASSPATH%;../lib/directjngine.1.0.jar
set CLASSPATH=%CLASSPATH%;../../../../common/lib/servlet-api.jar


del *.bak

javac -d ../classes *.java
pause
