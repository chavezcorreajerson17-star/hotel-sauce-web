@echo off
title HOTEL SAUCE - Vista en celular
echo.
echo ============================================
echo   HOTEL SAUCE - SERVIDOR LOCAL DE PRUEBA
echo ============================================
echo.
echo Buscando la IP de esta laptop...
echo.
ipconfig | findstr /i "IPv4"
echo.
echo En tu celular, conectado al MISMO Wi-Fi, abre:
echo.
echo   http://TU-IP-DE-LA-LAPTOP:8080
echo.
echo Ejemplo: http://192.168.1.25:8080
echo.
echo IMPORTANTE: deja esta ventana abierta mientras pruebas la web.
echo.
python -m http.server 8080 --bind 0.0.0.0
echo.
echo Si aparece que "python" no existe, avísame y te preparo otra versión.
pause
