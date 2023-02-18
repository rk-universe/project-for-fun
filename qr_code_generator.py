from flask import Flask,send_file
import qrcode
from io import BytesIO
app = Flask(__name__)

@app.route('/qr/<string:text>', methods=['GET'])
def generate_qr(text):
    img = qrcode.make(text)

    # Save the image to a file
    img_file = BytesIO()
    img.save(img_file, "PNG")
    img_file.seek(0)

    # Return the file as a response
    return send_file(img_file, mimetype="image/png")
if __name__ == '__main__':
    app.run(debug=True)
