@echo off
echo ============================================
echo   Deep-review of Financial Report
echo   正在启动本地 HTTP 服务...
echo ============================================
echo.
echo   服务启动后，请在浏览器中打开：
echo   http://localhost:8000
echo.
echo   按 Ctrl+C 可停止服务。
echo ============================================
echo.
cd /d "%~dp0"
python -m http.server 8000
pause