# -*- mode: python ; coding: utf-8 -*-


block_cipher = None


a = Analysis(
    ['main.py'],
    pathex=["E:\\PythonAISever2Java\\venv\\Lib\\site-packages\\paddleocr","E:\\PythonAISever2Java\\venv\\Lib\\site-packages\\paddle\\libs"],
    binaries=[('E:\\PythonAISever2Java\\venv\\Lib\\site-packages\\paddle\\libs', '.')],
    datas=[],
    hiddenimports=[],
    hookspath=['.'],
    hooksconfig={},
    runtime_hooks=[],
    excludes=['matplotlib'],
    win_no_prefer_redirects=False,
    win_private_assemblies=False,
    cipher=block_cipher,
    noarchive=False,
)
pyz = PYZ(a.pure, a.zipped_data, cipher=block_cipher)

exe = EXE(pyz,
     a.scripts,
     [],
     exclude_binaries=True,
     name='main',
     debug=False,
     bootloader_ignore_signals=False,
     strip=False,
     upx=True,
     console=True,
     icon=['favicon.ico'],
)

coll = COLLECT(exe,
     a.binaries,
     a.zipfiles,
     a.datas,
     strip=False,
     upx=True,
     upx_exclude=[],
     name='main')