import pyautogui
import webbrowser as wb
import time

from flask import Flask
app = Flask(__name__)

@app.route('/wh/<string:text>/<string:number>/<string:count>/<string:delay>', methods=['GET'])
def generate_qr(text,number,count,delay):
    link=  "https://web.whatsapp.com/send?phone=" + number
    wb.open(link)
    time.sleep(int(delay))
    for i in range(int(count)):
        for i in text:
            pyautogui.press(i)
        pyautogui.press("enter")
    return "Done"

if __name__ == '__main__':
    app.run(debug=True)
