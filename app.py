from flask import Flask ,render_template
import os

app = Flask(__name__)
#os.system('set FLASK_APP=app.py')

@app.route("/")
def home():
    return render_template('index.html')

if __name__ == "__main__":
    app.run(debug=True, port=5000)