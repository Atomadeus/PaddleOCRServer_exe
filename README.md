# PaddleOCRServer_exe

PaddleOCRServer_exe 是一个可以帮助你把飞桨 OCR Flask 服务打包成 exe 格式的项目。

其默认端口为 5000。你可以使用以下 API 进行 OCR：

- API 地址: https://127.0.0.1:5000/OCR

# 如何打包呢

下载项目代码

确保安装了 Python3.10 和所需的依赖包。

请在命令行中进入 PaddleOCRServer_exe 目录，并使用以下命令来安装所需的依赖包：pip install -r requirements.txt

在命令行中进入 PaddleOCRServer_exe 目录，并运行以下命令：

pyinstaller -y main.spec

这将使用 PyInstaller 工具将 main.py 文件打包成 exe 文件还有必要依赖包。

打包完成后，将生成的 dist 文件夹中的 exe 文件和 ocr 文件夹复制到希望运行的机器上即可。

注意：如果你需要修改默认端口，可以在 main.py 中的 port= 参数来指定端口号。(默认为 port = 5000)
