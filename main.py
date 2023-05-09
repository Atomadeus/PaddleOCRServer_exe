import os
import time
import uuid
from datetime import timedelta

import imageio.v2
from flask import Flask, request, jsonify
from gevent import pywsgi
from paddleocr import PaddleOCR
from werkzeug.utils import secure_filename

app = Flask(__name__)
app.config['JSON_AS_ASCII'] = False
app.config['SEND_FILE_MAX_AGE_DEFAULT'] = timedelta(hours=1)
app.config['MAX_CONTENT_LENGTH'] = 16 * 1024 * 1024
port = 5000


def allowed_file(fname):
    return '.' in fname and fname.rsplit('.', 1)[1].lower() in ['png', 'jpg', 'jpeg']


@app.route('/ocr', methods=['POST', 'GET'])
def detect():
    file = request.files['file']
    if file and allowed_file(file.filename):
        ext = file.filename.rsplit('.', 1)[1]
        zif = uuid.uuid4().hex
        random_name = '{}.{}'.format(zif, ext)
        save_path = os.path.join('caches', secure_filename(random_name))
        file.save(save_path)
        # time-1
        t1 = time.time()
        img = imageio.v2.imread(save_path)
        img_result = ocr.ocr(img)
        # 删除缓存
        os.remove(save_path)

        # time-2
        t2 = time.time()

        return jsonify({
            '服务状态': 'success',
            '识别结果': img_result,
            '识别时间': '{:.4f}s'.format(t2 - t1)
        })
    return jsonify({'服务状态': 'faild'})


if __name__ == '__main__':
    ocr = PaddleOCR(det_model_dir="./OCR/det"
                    , rec_model_dir="./OCR/rec"
                    , cls_model_dir="./OCR/cls"
                    , use_angle_cls=True)  # 查看README的参数说明
    # app.run(host='0.0.0.0', port=port, debug=True, threaded=True, processes=1)
    # print("http://" + QR.get_host_ip()+":"+str(port))
    server = pywsgi.WSGIServer(('0.0.0.0', port), app)
    server.serve_forever()
    '''
     debug=True, 
    app.run()中可以接受两个参数，分别是threaded和processes，用于开启线程支持和进程支持。
    1.threaded : 多线程支持，默认为False，即不开启多线程;
    2.processes：进程数量，默认为1.
    '''
